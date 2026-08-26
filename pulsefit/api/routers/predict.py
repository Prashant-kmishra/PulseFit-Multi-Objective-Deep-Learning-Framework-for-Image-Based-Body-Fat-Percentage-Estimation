from fastapi import APIRouter, File, UploadFile, Form, HTTPException
from PIL import Image
import io
from pulsefit.api.schemas import PredictResponse
from pulsefit.ml_pipeline.engine import PulseFitEngine

router = APIRouter()
engine = PulseFitEngine()

@router.post("/api/predict", response_model=PredictResponse)
async def predict_endpoint(
    image: UploadFile = File(...),
    age: int = Form(...),
    gender: str = Form(...)
):
    if age < 18 or age > 90:
        raise HTTPException(status_code=400, detail="Age must be between 18 and 90.")
    if gender.lower() not in ["male", "m", "1", "female", "f", "0"]:
        raise HTTPException(status_code=400, detail="Gender must be Male or Female.")
    
    try:
        content = await image.read()
        pil_img = Image.open(io.BytesIO(content)).convert("RGB")
    except Exception as e:
        raise HTTPException(status_code=400, detail="Invalid image file.")
        
    try:
        result = engine.predict(pil_img, age, gender, explain=False)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
