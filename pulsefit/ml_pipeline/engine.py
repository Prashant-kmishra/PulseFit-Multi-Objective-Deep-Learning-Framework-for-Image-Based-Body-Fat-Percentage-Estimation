import os
import torch
from PIL import Image

from pulsefit.ml_pipeline.config import settings
from pulsefit.ml_pipeline.models.segmentation import SegmentationModel
from pulsefit.ml_pipeline.models.regressor import BiometricRegressor
from pulsefit.ml_pipeline.preprocessing.transforms import get_cnn_transform
from pulsefit.ml_pipeline.preprocessing.scalers import BiometricScalers
from pulsefit.ml_pipeline.formulas.body_composition import calculate_bmi, classify_bmi, calculate_body_fat, classify_body_fat
from pulsefit.ml_pipeline.recommendations.plans import get_recommendation
from pulsefit.ml_pipeline.explainability.gradcam import GradCAM, overlay_cam
from pulsefit.ml_pipeline.explainability.shap_linear import explain_deurenberg

class PulseFitEngine:
    def __init__(self, device=None):
        self.device = device if device else torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.demo_mode = settings.DEMO_MODE
        
        self.segmenter = SegmentationModel(device=self.device, demo_mode=self.demo_mode)
        self.scalers = BiometricScalers(config_settings=settings)
        self.cnn_transform = get_cnn_transform()
        
        self.regressor = BiometricRegressor(dropout_rate=0.4468).to(self.device)
        if not self.demo_mode:
            if os.path.exists(settings.GOLDEN_MODEL_PATH):
                self.regressor.load_state_dict(torch.load(settings.GOLDEN_MODEL_PATH, map_location=self.device))
        self.regressor.eval()
        
    def _parse_gender(self, gender):
        if isinstance(gender, str):
            gender_clean = gender.strip().lower()
            if gender_clean in ['m', 'male', '1']:
                return 1, "Male"
            elif gender_clean in ['f', 'female', '0']:
                return 0, "Female"
            else:
                raise ValueError("Gender must be 'Male' or 'Female'.")
        else:
            return int(gender), "Male" if int(gender) == 1 else "Female"
            
    def predict(self, image_input: Image.Image, age: int, gender: str, explain: bool = False) -> dict:
        gender_num, gender_label = self._parse_gender(gender)
        
        masked_silhouette = self.segmenter.extract_silhouette(image_input)
        
        if self.demo_mode:
            import random
            final_h = 175.0 + random.uniform(-10, 10)
            final_w = 75.0 + random.uniform(-10, 10)
        else:
            cnn_tensor = self.cnn_transform(masked_silhouette).unsqueeze(0).to(self.device)
            with torch.no_grad():
                preds = self.regressor(cnn_tensor)
                scaled_h = preds['height_out'].cpu().numpy().reshape(-1, 1)[0][0]
                scaled_w = preds['weight_out'].cpu().numpy().reshape(-1, 1)[0][0]
                
            final_h, final_w = self.scalers.inverse_transform_and_calibrate(scaled_h, scaled_w)
            
        bmi = calculate_bmi(final_w, final_h)
        bmi_cat = classify_bmi(bmi)
        
        body_fat_pct = calculate_body_fat(bmi, age, gender_num)
        bf_cat = classify_body_fat(body_fat_pct, gender_num)
        
        plan = get_recommendation(bf_cat, gender_num, bmi_cat)
        
        result = {
            "profile": {
                "age": age,
                "gender": gender_label
            },
            "metrics": {
                "height_cm": round(final_h, 2),
                "weight_kg": round(final_w, 2),
                "bmi": round(bmi, 2),
                "bmi_category": bmi_cat,
                "body_fat_pct": round(body_fat_pct, 2),
                "body_fat_category": bf_cat
            },
            "recommendation": plan,
            "silhouette_base64": SegmentationModel.image_to_base64(masked_silhouette)
        }
        
        if explain:
            # SHAP Linear
            result["shap"] = explain_deurenberg(bmi, age, gender_num)
            
            # Grad-CAM
            if self.demo_mode:
                # generate random heatmap for demo
                import numpy as np
                cam_h = np.random.rand(7, 7).astype(np.float32)
                cam_w = np.random.rand(7, 7).astype(np.float32)
                h_img = overlay_cam(masked_silhouette, cam_h)
                w_img = overlay_cam(masked_silhouette, cam_w)
            else:
                target_layer = self.regressor.feature_extractor[-1]
                gradcam = GradCAM(self.regressor, target_layer)
                cnn_tensor = self.cnn_transform(masked_silhouette).unsqueeze(0).to(self.device)
                
                cam_h = gradcam.generate(cnn_tensor, target_key='height_out')
                h_img = overlay_cam(masked_silhouette, cam_h)
                
                cam_w = gradcam.generate(cnn_tensor, target_key='weight_out')
                w_img = overlay_cam(masked_silhouette, cam_w)
                
            result["gradcam"] = {
                "height_base64": SegmentationModel.image_to_base64(h_img),
                "weight_base64": SegmentationModel.image_to_base64(w_img)
            }
            
        return result
