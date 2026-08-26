from pydantic import BaseModel
from typing import List, Optional, Dict, Any

class PredictRequest(BaseModel):
    pass

class Profile(BaseModel):
    age: int
    gender: str

class Metrics(BaseModel):
    height_cm: float
    weight_kg: float
    bmi: float
    bmi_category: str
    body_fat_pct: float
    body_fat_category: str

class Recommendation(BaseModel):
    summary: str
    diet: List[str]
    exercise: List[str]
    disclaimer: str

class PredictResponse(BaseModel):
    profile: Profile
    metrics: Metrics
    recommendation: Recommendation
    silhouette_base64: str

class ShapItem(BaseModel):
    name: str
    value: float

class ShapResponse(BaseModel):
    waterfall: List[ShapItem]
    total_body_fat: float

class GradcamResponse(BaseModel):
    height_base64: str
    weight_base64: str

class ExplainResponse(PredictResponse):
    shap: ShapResponse
    gradcam: GradcamResponse
