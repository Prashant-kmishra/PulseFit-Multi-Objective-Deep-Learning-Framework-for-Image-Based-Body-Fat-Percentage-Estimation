from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pulsefit.api.routers import predict, explain
from pulsefit.ml_pipeline.config import settings

app = FastAPI(title="PulseFit API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Next.js origin goes here in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(predict.router)
app.include_router(explain.router)

@app.get("/api/health")
def health_check():
    return {
        "status": "ok",
        "demo_mode": settings.DEMO_MODE
    }
