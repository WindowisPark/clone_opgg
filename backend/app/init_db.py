from app.db import engine, Base

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)  # 기존 테이블 삭제
        await conn.run_sync(Base.metadata.create_all)  # 테이블 생성


# 실행
import asyncio
asyncio.run(init_db())
