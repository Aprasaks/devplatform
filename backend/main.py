from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import os
from dotenv import load_dotenv

# 우리가 만든 모듈들 import (점 없이!)
from app.models import UserCreate, UserLogin, UserResponse, Token
from app.database import get_db, create_tables, get_user_by_email, create_user
from app.auth import hash_password, verify_password, create_access_token

load_dotenv()

app = FastAPI(title="DevPlatform API", version="1.0.0")

# CORS 설정 (Next.js와 연결)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js 주소
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 앱 시작할 때 데이터베이스 테이블 생성
@app.on_event("startup")
def startup_event():
    create_tables()
    print("✅ 데이터베이스 테이블이 생성되었습니다!")

@app.get("/")
async def root():
    return {"message": "DevPlatform API is running!"}

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

# 🆕 회원가입 API
@app.post("/api/auth/signup", response_model=UserResponse)
def signup(user: UserCreate, db: Session = Depends(get_db)):
    # 이메일 중복 확인
    existing_user = get_user_by_email(db, user.email)
    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="이미 등록된 이메일입니다."
        )
    
    # 비밀번호 암호화
    hashed_password = hash_password(user.password)
    
    # 새 사용자 생성
    new_user = create_user(db, user.name, user.email, hashed_password)
    
    return new_user

# 🆕 로그인 API  
@app.post("/api/auth/login", response_model=Token)
def login(user: UserLogin, db: Session = Depends(get_db)):
    # 사용자 찾기
    db_user = get_user_by_email(db, user.email)
    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="이메일 또는 비밀번호가 잘못되었습니다."
        )
    
    # 비밀번호 확인
    if not verify_password(user.password, db_user.hashed_password):
        raise HTTPException(
            status_code=401,
            detail="이메일 또는 비밀번호가 잘못되었습니다."
        )
    
    # JWT 토큰 생성
    access_token = create_access_token(data={"sub": db_user.email})
    
    return {
        "access_token": access_token,
        "token_type": "bearer",
        "user": db_user
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)