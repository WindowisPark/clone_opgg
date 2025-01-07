from sqlalchemy import Column, Integer, String, JSON, TIMESTAMP
from app.db import Base

class Champion(Base):
    __tablename__ = "champions"

    id = Column(Integer, primary_key=True, index=True)
    version = Column(String(20), index=True)
    champion_id = Column(String(50), index=True)
    name = Column(String(100))
    title = Column(String(100))
    tags = Column(JSON)
    stats = Column(JSON)
    image_url = Column(String(255))
    updated_at = Column(TIMESTAMP)
