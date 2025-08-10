# 사용자 데이터 구조를 정의하는 파일

from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# 회원가입할 때 받을 데이터
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

# 로그인할 때 받을 데이터  
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# 사용자 정보를 응답할 때 보낼 데이터 (비밀번호 제외!)
class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    created_at: datetime
    
    class Config:
        # 데이터베이스 객체를 JSON으로 변환 가능하게 함
        from_attributes = True

# JWT 토큰 응답
class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse