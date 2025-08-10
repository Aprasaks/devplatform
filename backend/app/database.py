# 데이터베이스 연결 및 테이블 설정

import os
from sqlalchemy import create_engine, Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

# PostgreSQL 데이터베이스 (배포용) 또는 SQLite (로컬용)
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./devplatform.db")

# SQLAlchemy 설정
if DATABASE_URL.startswith("postgres://"):
    # Railway가 postgres://로 주는데 sqlalchemy는 postgresql://를 원함
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

engine = create_engine(
    DATABASE_URL, 
    connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# 사용자 테이블 정의
class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

# 데이터베이스 테이블 생성
def create_tables():
    Base.metadata.create_all(bind=engine)

# 데이터베이스 세션 가져오기
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# 이메일로 사용자 찾기
def get_user_by_email(db, email: str):
    return db.query(User).filter(User.email == email).first()

# 새 사용자 생성
def create_user(db, name: str, email: str, hashed_password: str):
    db_user = User(
        name=name,
        email=email, 
        hashed_password=hashed_password
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user