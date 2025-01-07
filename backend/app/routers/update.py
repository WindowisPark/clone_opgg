from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql import text  # SQL 명령을 명시적으로 선언하기 위해 추가
from app.db import get_db
from app.models import Champion
from app.services.riot_api import get_champions_data

router = APIRouter(
    prefix="/update",
    tags=["Update"]
)

@router.post("/")
async def update_champions_data(db: AsyncSession = Depends(get_db)):
    """
    Riot API에서 최신 챔피언 데이터를 가져와 PostgreSQL에 저장합니다.
    """
    champions_data = get_champions_data()
    if not champions_data:
        return {"error": "Failed to fetch champions data"}

    # 기존 데이터를 삭제
    await db.execute(text("DELETE FROM champions"))  # 수정된 부분
    await db.commit()  # 변경 사항 적용

    # 새 데이터를 삽입
    for champ_id, champ_info in champions_data.items():
        db.add(Champion(
            champion_id=champ_id,
            name=champ_info["name"],
            title=champ_info["title"],
            tags=champ_info["tags"],
            stats=champ_info["stats"],
            image_url=f"https://ddragon.leagueoflegends.com/cdn/img/champion/loading/{champ_id}_0.jpg"
        ))

    await db.commit()  # 변경 사항 적용
    return {"message": "Champion data updated"}
