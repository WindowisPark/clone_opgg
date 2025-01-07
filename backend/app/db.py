from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base

# PostgreSQL 연결 URL
DATABASE_URL = "postgresql+asyncpg://fastapi_user:password123@localhost/champions_db"

# SQLAlchemy 엔진 및 세션 설정
engine = create_async_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)
Base = declarative_base()

# DB 세션 생성
async def get_db():
    async with SessionLocal() as session:
        yield session
