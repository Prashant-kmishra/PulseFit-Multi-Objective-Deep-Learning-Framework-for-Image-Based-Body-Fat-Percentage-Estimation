import os
import joblib

class BiometricScalers:
    def __init__(self, config_settings):
        self.demo_mode = config_settings.DEMO_MODE
        if not self.demo_mode:
            if not os.path.exists(config_settings.SCALER_H_PATH):
                pass # let's just let it crash or warn, actually the prompt says it must not crash in demo mode
            else:
                self.scaler_h = joblib.load(config_settings.SCALER_H_PATH)
                self.scaler_w = joblib.load(config_settings.SCALER_W_PATH)
                self.calibrator_h = joblib.load(config_settings.CALIBRATOR_H_PATH)
                self.calibrator_w = joblib.load(config_settings.CALIBRATOR_W_PATH)

    def inverse_transform_and_calibrate(self, scaled_h: float, scaled_w: float):
        if self.demo_mode:
            # Dummy inversion
            # In demo mode, the input scaled_h/w could just be random. 
            # We will just generate reasonable values in the engine directly.
            return 175.0, 75.0

        raw_h = float(self.scaler_h.inverse_transform([[scaled_h]])[0][0])
        raw_w = float(self.scaler_w.inverse_transform([[scaled_w]])[0][0])
        
        final_h = float(self.calibrator_h.predict([[raw_h]])[0])
        final_w = float(self.calibrator_w.predict([[raw_w]])[0])
        return final_h, final_w
