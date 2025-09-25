notion-clone/
├─ .vscode/ # 편의 설정 (권장)
├─ public/
├─ scripts/ # 빌드/배포 스크립트 (선택)
├─ .env.example # 환경변수 템플릿
├─ index.html
├─ vite.config.ts
├─ tsconfig.json
├─ package.json
├─ src/
│ ├─ app/ # 앱 엔트리/전역 셋업
│ │ ├─ main.ts
│ │ ├─ App.vue
│ │ ├─ router/
│ │ │ ├─ index.ts # 라우트 정의
│ │ │ └─ guards.ts # 인증/권한 가드
│ │ ├─ store/ # 전역(희소) 스토어(예: auth)
│ │ │ └─ auth.store.ts
│ │ ├─ providers/ # 앱 전역 DI/플러그인 주입(선택)
│ │ └─ styles/ # 전역 스타일, 변수
│ │ ├─ index.css
│ │ └─ tokens.css
│ │
│ ├─ shared/ # 공용(가벼운) 계층: UI, utils, types 등
│ │ ├─ ui/ # 재사용 가능한 단일 목적 컴포넌트
│ │ │ ├─ Button.vue
│ │ │ └─ Modal.vue
│ │ ├─ composables/ # useFetch, useDebounce 등 범용 훅
│ │ ├─ utils/ # 날짜/문자열/키바인딩 헬퍼
│ │ ├─ types/ # 전역 타입(절대 최소화)
│ │ └─ constants/ # 상수/열거형
│ │
│ ├─ entities/ # 도메인 모델(브랜드 없는 순수 모델)
│ │ ├─ block/
│ │ │ ├─ model.ts # Block, BlockType, Props 등
│ │ │ └─ mapper.ts # API ↔ 모델 변환자
│ │ ├─ page/
│ │ └─ user/
│ │
│ ├─ features/ # 기능 단위(상태+서비스+UI를 한 덩어리로)
│ │ ├─ editor/ # 블록 에디터(예: TipTap 래핑)
│ │ │ ├─ ui/Editor.vue
│ │ │ ├─ model/ # editor용 pinia store/composables
│ │ │ │ └─ editor.store.ts
│ │ │ └─ lib/ # 키맵/플러그인 래퍼
│ │ ├─ blocks/ # 블록 생성/이동/삭제 등
│ │ │ ├─ ui/BlockView.vue
│ │ │ ├─ model/blocks.store.ts
│ │ │ └─ lib/block-tree.ts # 트리 조작 알고리즘
│ │ ├─ realtime/ # 실시간 동기화(WebSocket/CRDT)
│ │ │ ├─ model/realtime.store.ts
│ │ │ └─ lib/yjs-client.ts
│ │ └─ search/ # 전역 검색/필터
│ │
│ ├─ pages/ # 라우트에 매핑되는 페이지(얇은 조립자)
│ │ ├─ HomePage.vue
│ │ ├─ WorkspacePage.vue
│ │ └─ PageDetail.vue
│ │
│ ├─ processes/ # 다기능 조합 플로우(선택, 로그인플로우 등)
│ ├─ widgets/ # 페이지에 끼워넣는 복합 UI(선택)
│ └─ services/ # 인프라 의존(HTTP, Auth, Storage)
│ ├─ http/
│ │ ├─ client.ts # fetch/axios 래퍼, 인터셉터
│ │ └─ endpoints.ts
│ ├─ auth/
│ │ └─ auth.service.ts # 로그인/토큰, me() 등
│ ├─ db/
│ │ ├─ schema.sql # (선택) 스키마 정의 or Prisma schema
│ │ └─ repo.page.ts # 페이지/블록 저장소 인터페이스
│ └─ realtime/
│ └─ ws.client.ts # 소켓 클라이언트, 재연결 로직
│
└─ tests/ # e2e/unit 테스트 (Vitest/Cypress)
