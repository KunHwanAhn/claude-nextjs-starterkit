# 프로젝트 개요

Next.js 스타터킷 — 웹 개발을 빠르게 시작하기 위한 보일러플레이트

# 기술스택

- Next.js 15 (App Router, Turbopack)
- TypeScript
- TailwindCSS v4 (CSS 기반 설정, tailwind.config 없음)
- shadcn/ui (base-nova 스타일, @base-ui/react 기반)
- lucide-react (아이콘)
- next-themes (다크모드)

# 개발 환경

- Node.js 22.22.2 (.tool-versions)
- 패키지 매니저: npm

# 프로젝트 구조

- `src/app/` — Next.js App Router 페이지 및 레이아웃
- `src/components/ui/` — shadcn 자동 생성 컴포넌트 (수정 금지 원칙)
- `src/components/layout/` — 레이아웃 컴포넌트 (Header, Footer)
- `src/components/` — 프로젝트 공용 컴포넌트
- `src/hooks/` — 커스텀 훅
- `src/lib/` — 유틸리티 함수

# 코딩 컨벤션

- 변수/함수: camelCase
- 클래스/컴포넌트: PascalCase
- 컴포넌트 파일명: PascalCase (예: Header.tsx, ThemeProvider.tsx)
- shadcn/ui 자동 생성 파일: kebab-case 유지
- Next.js 규약 파일: 소문자 유지 (page.tsx, layout.tsx)
- 상수: UPPER_SNAKE_CASE
- 들여쓰기: 스페이스 2칸
- 세미콜론 사용
- 주석: 한국어
- any 타입 사용 금지
- 테스트 파일: `__tests__` 폴더, `*.test.ts` 형식

# 개발 명령어

- `npm run dev` — 개발 서버 (Turbopack)
- `npm run build` — 프로덕션 빌드
- `npm run start` — 프로덕션 서버
- `npm run lint` — ESLint

# UI 컴포넌트 관리

- shadcn 컴포넌트 추가: `npx shadcn@latest add [component-name]`
- 설치된 컴포넌트: button, badge, card, dialog, dropdown-menu, input, label, separator, sheet, skeleton, switch, tabs, textarea, tooltip, avatar
- 다크모드: next-themes ThemeProvider (attribute="class", defaultTheme="system")
- 테마 설정: `src/app/globals.css` 내 `@theme inline` 블록
- TooltipProvider가 루트 레이아웃에 래핑되어 있음

# MCP 서버 설정

- 프로젝트 MCP 설정 파일: `.mcp.json` (`.gitignore` 등록, API 키 포함)
- 템플릿: `.mcp.json.example`을 복사하여 `.mcp.json` 생성 후 키 입력
- 설정된 MCP 서버:
  - Context7 — 라이브러리/프레임워크 최신 문서 실시간 조회
  - Playwright — 브라우저 자동화를 통한 UI 테스트 및 스크린샷
  - Sequential Thinking — 복잡한 문제를 단계별로 분석하여 사고 과정 구조화
  - Shrimp Task Manager — 복잡한 작업을 체계적으로 분석, 계획, 실행하는 태스크 관리
  - shadcn MCP — shadcn/ui 컴포넌트 검색, 조회, 설치 지원
