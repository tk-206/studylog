StudyLog - 공부 시간 기록 앱
간단하고 직관적인 학습 시간 추적 웹 애플리케이션입니다. 일일 공부 기록을 작성하고, 주간 통계를 확인할 수 있습니다.
📸 주요 기능

✏️ 학습 기록 작성: 과목, 학습 시간, 태그를 입력하여 기록
📊 주간 통계: 이번 주 총 공부 시간과 요일별 그래프 제공
🏷️ 태그 필터링: 태그별로 기록을 필터링하여 조회
🔍 검색 기능: 과목명으로 빠르게 검색
💾 로컬 저장: 브라우저 LocalStorage를 활용한 데이터 영구 보관
📱 반응형 디자인: 모바일부터 데스크톱까지 모든 기기에서 사용 가능

🚀 시작하기
필요 조건

Node.js 20.19.0 이상 또는 22.12.0 이상
npm 또는 yarn

설치 및 실행
bash# 저장소 클론
git clone [repository-url]
cd studylog

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과물 미리보기
npm run preview
```

## 🛠️ 기술 스택

### 프론트엔드
- **React 19.2.0**: 최신 React와 React Compiler 사용
- **Vite 7.1**: 빠른 개발 환경과 HMR(Hot Module Replacement)
- **Tailwind CSS 3.3**: 유틸리티 기반 스타일링
- **Chart.js 4.5** & **react-chartjs-2**: 데이터 시각화

### 개발 도구
- **ESLint**: 코드 품질 관리
- **React Compiler**: 성능 최적화
- **PostCSS & Autoprefixer**: CSS 전처리 및 벤더 프리픽스 자동 추가

## 📁 프로젝트 구조
```
studylog/
├── src/
│   ├── components/
│   │   ├── FilterSearch.jsx    # 태그 필터 & 검색 컴포넌트
│   │   ├── RecordForm.jsx       # 기록 입력 폼
│   │   ├── RecordList.jsx       # 기록 목록 표시
│   │   └── WeeklyChart.jsx      # 주간 그래프
│   ├── utils/
│   │   ├── storage.js           # LocalStorage 관리
│   │   └── stats.jsx            # 통계 계산 함수
│   ├── App.jsx                  # 메인 앱 컴포넌트
│   ├── main.jsx                 # 엔트리 포인트
│   └── index.css                # 전역 스타일
├── public/
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
💡 사용 방법
1. 기록 추가하기

주제 필드에 공부한 과목이나 주제 입력
시간(분) 필드에 학습 시간을 분 단위로 입력
태그 필드에 카테고리나 분류 입력 (선택사항)
"기록 추가" 버튼 클릭

2. 기록 조회하기

전체 태그 드롭다운에서 특정 태그 선택하여 필터링
검색 필드에 과목명을 입력하여 검색
기록 우측의 삭제 버튼으로 기록 제거

3. 통계 확인하기

상단에 이번 주 총 공부 시간 표시
요일별 막대 그래프로 학습 패턴 확인

🎨 주요 컴포넌트 설명
App.jsx

애플리케이션의 중심 컴포넌트
상태 관리 및 데이터 흐름 제어
LocalStorage와의 동기화 처리

RecordForm.jsx

새로운 학습 기록 입력 폼
유효성 검사 및 자동 날짜 설정

RecordList.jsx

기록 목록을 렌더링
각 기록의 삭제 기능 제공

FilterSearch.jsx

태그별 필터링
과목명 검색 기능

WeeklyChart.jsx

요일별 학습 시간을 막대 그래프로 시각화
일요일부터 토요일까지 표시

📦 데이터 구조
javascript// 단일 기록 객체
{
  subject: "수학",      // 과목명
  duration: 60,        // 학습 시간(분)
  tag: "수능",         // 태그
  date: "2025-10-28"   // 날짜 (YYYY-MM-DD)
}
🔧 환경 설정
Vite 설정 (vite.config.js)

React 플러그인 활성화
React Compiler를 통한 자동 최적화

Tailwind 설정 (tailwind.config.js)

모든 JSX/TSX 파일에서 Tailwind 클래스 사용 가능

ESLint 설정 (eslint.config.js)

React Hooks 규칙 적용
React Refresh 지원

🌟 향후 개발 계획

 월간/연간 통계 추가
 목표 설정 및 달성률 표시
 CSV 내보내기/가져오기 기능
 다크 모드 지원
 PWA(Progressive Web App) 지원
 태그별 색상 구분
 데이터 백업 및 복원 기능

📄 라이선스
이 프로젝트는 개인 학습 목적으로 제작되었습니다.
🤝 기여하기
버그 리포트나 기능 제안은 이슈를 통해 자유롭게 남겨주세요!
📞 문의
프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 등록해 주세요.

Made with ❤️ using React & Vite