import torch
import numpy as np
import cv2
from PIL import Image

class GradCAM:
    def __init__(self, model, target_layer):
        self.model = model
        self.target_layer = target_layer
        self.gradients = None
        self.activations = None
        
        self.target_layer.register_forward_hook(self.save_activation)
        self.target_layer.register_full_backward_hook(self.save_gradient)
        
    def save_activation(self, module, input, output):
        self.activations = output
        
    def save_gradient(self, module, grad_input, grad_output):
        self.gradients = grad_output[0]
        
    def generate(self, input_tensor, target_key='height_out'):
        self.model.zero_grad()
        output = self.model(input_tensor)
        
        score = output[target_key].squeeze()
        score.backward(retain_graph=True)
        
        gradients = self.gradients.cpu().data.numpy()[0]
        activations = self.activations.cpu().data.numpy()[0]
        
        weights = np.mean(gradients, axis=(1, 2))
        cam = np.zeros(activations.shape[1:], dtype=np.float32)
        
        for i, w in enumerate(weights):
            cam += w * activations[i]
            
        cam = np.maximum(cam, 0)
        if np.max(cam) != 0:
            cam = cam / np.max(cam)
        else:
            cam = cam
            
        return cam

def overlay_cam(img: Image.Image, cam: np.ndarray) -> Image.Image:
    cam_resized = cv2.resize(cam, img.size)
    heatmap = cv2.applyColorMap(np.uint8(255 * cam_resized), cv2.COLORMAP_JET)
    heatmap = cv2.cvtColor(heatmap, cv2.COLOR_BGR2RGB)
    
    img_np = np.array(img.convert('RGB'))
    overlay = cv2.addWeighted(img_np, 0.6, heatmap, 0.4, 0)
    return Image.fromarray(overlay)
