from fastapi import FastAPI
from .routers import champions
from app.routers import update
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI(
    title="OP.GG Backend",
    description="OP.GG 클론 백엔드 서버",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite의 기본 포트
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 챔피언 관련 라우터 등록
app.include_router(champions.router)

# 업데이트 라우터 등록
app.include_router(update.router)

@app.get("/")
def root():
    """
    기본 엔드포인트
    """
    return {"message": "Welcome to the Riot API Champion Data Service"}
