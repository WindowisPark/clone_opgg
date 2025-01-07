import json
from fastapi import APIRouter
from app.services.riot_api import get_champions_data

router = APIRouter(
    prefix="/champions",
    tags=["Champions"]
)

@router.get("/")
async def get_champions():
    """
    Riot API에서 챔피언 데이터를 가져옵니다.
    """
    champions_data = get_champions_data()
    
    # 데이터 구조 변환 (Riot API 응답 형식을 우리가 원하는 형식으로 변환)
    formatted_champions = [
        {
            "champion_id": champ_data["id"],
            "name": champ_data["name"],
            "title": champ_data["title"],
            "tags": champ_data["tags"],
            "image_url": f"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/{champ_data['id']}_0.jpg"
        }
        for champ_data in champions_data.values()
    ]
    
    return formatted_champions
