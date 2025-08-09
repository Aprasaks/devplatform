# DevPlatform

> 비전공자를 위한 개발 학습 공유 플랫폼

개발을 배우는 모든 사람들이 자신의 학습 과정과 프로젝트를 공유하고, 서로 피드백을 주고받을 수 있는 커뮤니티 플랫폼입니다.

## ✨ 주요 기능

### 학습 공유

- **학습 노트**: 배운 개념, 코드 스니펫, 트러블슈팅 경험 공유
- **프로젝트 전시**: 개인/팀 프로젝트 소개 및 링크 공유
- **진행 상황**: 학습 로드맵과 진도 추적

### 커뮤니티 활동

- **피드백 시스템**: 프로젝트와 코드에 대한 건설적인 피드백
- **스터디 그룹**: 함께 공부할 동료 찾기

### 링크 허브

- **프로젝트 링크**: GitHub, 배포 사이트 등 직접 연결
- **학습 자료**: 도움이 된 강의, 문서, 블로그 링크 모음
- **포트폴리오**: 개인 개발 여정을 한눈에 볼 수 있는 페이지

## 타겟 사용자

- **개발 입문자**: 비전공자, 부트캠프 수강생, 독학러
- **멘토**: 경험을 나누고 싶은 시니어 개발자

## 🛠️ 기술 스택

### Frontend

- **Next.js 14** - React 기반 풀스택 프레임워크
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 퍼스트 CSS 프레임워크
- **Shadcn/ui** - 재사용 가능한 UI 컴포넌트

### Backend

- **FastAPI** - 현대적이고 빠른 Python 웹 프레임워크
- **PostgreSQL** - 관계형 데이터베이스
- **SQLAlchemy** - Python ORM
- **Pydantic** - 데이터 검증

### DevOps

- **Docker** - 컨테이너화
- **GitHub Actions** - CI/CD
- **Vercel** - 프론트엔드 배포 (예정)

## 개발 로드맵

### Phase 1: 기본 기능 (MVP)

- [ ] 사용자 인증 및 프로필
- [ ] 프로젝트 등록 및 조회
- [ ] 기본 피드백 시스템

### Phase 2: 커뮤니티 기능

- [ ] 댓글 및 좋아요 시스템
- [ ] 태그 및 카테고리 분류
- [ ] 검색 및 필터링

### Phase 3: 고급 기능

- [ ] 실시간 알림
- [ ] 멘토링 매칭 시스템
- [ ] 학습 진도 추적

### Phase 4: 확장 기능

- [ ] 모바일 앱
- [ ] API 공개
- [ ] 써드파티 통합

## 빠른 시작

### 개발 환경 설정

```bash
# 저장소 클론
git clone https://github.com/Aprasaks/devplatform.git
cd devplatform

# Docker로 실행
docker-compose up --build


# 프론트엔드
cd frontend
npm install
npm run dev

# 백엔드 (새 터미널)
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### 접속 URL

- **프론트엔드**: http://localhost:3000
- **백엔드 API**: http://localhost:8000
- **API 문서**: http://localhost:8000/docs

## 기여하기

이 프로젝트는 비전공자의 비전공자에 의한 비전공자를 위한 플랫폼입니다!

### 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 기여 가이드라인

- **버그 리포트**: 이슈 탭에서 버그 신고
- **기능 제안**: 새로운 아이디어나 개선사항 제안
- **문서 개선**: README, 주석, 가이드 문서 개선
- **코드 기여**: 기능 개발, 버그 수정, 코드 리팩토링

## 라이센스

이 프로젝트는 [MIT License](LICENSE) 하에 배포됩니다.

## 연락처

- **GitHub**: [@Aprasaks](https://github.com/Aprasaks)
- **프로젝트 링크**: [https://github.com/Aprasaks/devplatform](https://github.com/Aprasaks/devplatform)

---

### 프로젝트의 철학

> "인간이기에 생각을 하고 공유를 하면서 더 나아갈 수 있는 법"

이 플랫폼은 개발자가 되어가는 모든 사람들이 서로의 여정을 응원하고 도울 수 있는 공간이 되고자 합니다. 완벽한 코드보다는 성장하는 과정을, 경쟁보다는 협력을 중시합니다.

**함께 배우고, 함께 성장해요! **
