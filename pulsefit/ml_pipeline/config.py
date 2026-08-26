import os
from pydantic_settings import BaseSettings
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class Settings(BaseSettings):
    DEMO_MODE: bool = os.getenv("DEMO_MODE", "true").lower() in ("true", "1", "yes")
    MODEL_WEIGHTS_DIR: str = os.getenv("MODEL_WEIGHTS_DIR", "weights")
    GOLDEN_MODEL_PATH: str = os.path.join(MODEL_WEIGHTS_DIR, "pulsefit_golden_model.pth")
    SCALER_H_PATH: str = os.path.join(MODEL_WEIGHTS_DIR, "height_cm_scaler.pkl")
    SCALER_W_PATH: str = os.path.join(MODEL_WEIGHTS_DIR, "weight_scaler.pkl")
    CALIBRATOR_H_PATH: str = os.path.join(MODEL_WEIGHTS_DIR, "calibrator_height.pkl")
    CALIBRATOR_W_PATH: str = os.path.join(MODEL_WEIGHTS_DIR, "calibrator_weight.pkl")

settings = Settings()

if settings.DEMO_MODE:
    logger.warning("=====================================================")
    logger.warning("WARNING: RUNNING IN DEMO MODE!")
    logger.warning("Real model weights will not be loaded. Returning mock/synthetic predictions.")
    logger.warning("=====================================================")
