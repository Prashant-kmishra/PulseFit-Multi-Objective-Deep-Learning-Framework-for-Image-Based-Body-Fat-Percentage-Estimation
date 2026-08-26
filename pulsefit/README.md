# PulseFit

PulseFit is a computer-vision fitness-tech application that takes a single full-body photo plus a user's age and gender, and returns an estimated height, weight, BMI, and body fat percentage, along with a diet/exercise plan.

This repository contains two main services:
1. **ML Inference Pipeline (`api/` and `ml_pipeline/`)**: A FastAPI backend serving the PyTorch models (DeepLabV3 segmentation + EfficientNet regression) and providing Grad-CAM/Shapley explainability.
2. **Frontend (`frontend/`)**: A Next.js 14 application providing an interactive, aesthetic "Liquid Glass" UI.

## Design System: Liquid Glass

**Palette**:
- Base background: `#F7FAFC`
- Primary blue: `#1D6FE0`
- Deep blue: `#0B3C8C`
- Sea green accent: `#12A594`
- Glass surface: `rgba(255,255,255,0.6)` with `backdrop-filter: blur(24px) saturate(160%)`

**Typography**: Inter/Arial for body, monospace for technical numbers.
**Motion**: Soft reveals and hover lift interactions.

## Running the Application

### Demo Mode
By default, the backend runs in `DEMO_MODE=true`. This means it will mock the ML predictions, allowing you to run the stack and test the UI without needing the large `pulsefit_golden_model.pth` and other scaler artifacts.

### Using Docker Compose (Recommended)
1. Ensure Docker is installed.
2. Run `docker-compose up --build`
3. Access the frontend at `http://localhost:3000`
4. Access the API docs at `http://localhost:8000/docs`

### Running Locally without Docker

**Backend**:
```bash
# In the pulsefit/ directory
pip install -r requirements.txt
export DEMO_MODE=true
uvicorn pulsefit.api.main:app --reload --port 8000
```

**Frontend**:
```bash
# In the pulsefit/frontend/ directory
npm install
npm run dev
```

### Production Mode (Adding Model Weights)
To run with real predictions:
1. Place the following files in a `weights/` directory at the root of `pulsefit/`:
   - `pulsefit_golden_model.pth`
   - `height_cm_scaler.pkl`
   - `weight_scaler.pkl`
   - `calibrator_height.pkl`
   - `calibrator_weight.pkl`
2. Set `DEMO_MODE=false` in the environment or `.env` file.
3. Start the backend.
