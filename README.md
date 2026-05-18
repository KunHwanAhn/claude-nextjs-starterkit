# Next.js Starter Kit

웹 개발을 바르게 시작할 수 있는 스타터킷입니다. 검증된 기술스택으로 즉시 개발에 착수할 수 있습니다.

## 기술스택

| 기술 | 버전 | 설명 |
|------|------|------|
| [Next.js](https://nextjs.org) | 15 | App Router, Turbopack |
| [TypeScript](https://www.typescriptlang.org) | 5 | 정적 타입 |
| [TailwindCSS](https://tailwindcss.com) | 4 | CSS 기반 설정 (tailwind.config 없음) |
| [shadcn/ui](https://ui.shadcn.com) | latest | base-nova 스타일 UI 컴포넌트 |
| [lucide-react](https://lucide.dev) | latest | 아이콘 |
| [next-themes](https://github.com/pacocoursey/next-themes) | latest | 다크모드 (system/light/dark) |

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

[http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (Turbopack) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 검사 |

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css           # TailwindCSS v4 + shadcn 테마 설정
│   ├── layout.tsx            # 루트 레이아웃 (ThemeProvider, Header, Footer)
│   ├── page.tsx              # 랜딩 페이지
│   └── examples/
│       └── page.tsx          # shadcn/ui 컴포넌트 쇼케이스
├── components/
│   ├── ui/                   # shadcn 컴포넌트 (자동 생성)
│   ├── layout/
│   │   ├── Header.tsx        # 헤더 (네비게이션 + 다크모드 토글)
│   │   └── Footer.tsx        # 푸터
│   └── ThemeProvider.tsx     # next-themes 래퍼
├── hooks/                    # 커스텀 훅
└── lib/
    └── utils.ts              # cn() 유틸리티
```

## 설치된 shadcn/ui 컴포넌트

`button` `badge` `card` `dialog` `dropdown-menu` `input` `label` `separator` `sheet` `skeleton` `switch` `tabs` `textarea` `tooltip` `avatar`

컴포넌트 추가는 아래 명령어로 가능합니다:

```bash
npx shadcn@latest add [component-name]
```

전체 컴포넌트 목록은 [shadcn/ui 공식 문서](https://ui.shadcn.com/docs/components)에서 확인할 수 있습니다.

## 다크 모드

`next-themes` 기반으로 시스템/라이트/다크 모드를 지원합니다. 헤더 우측의 아이콘 버튼으로 전환할 수 있습니다.

테마 색상은 `src/app/globals.css`의 `:root`와 `.dark` 블록에서 수정할 수 있습니다.

## MCP 서버 설정 (Claude Code)

이 프로젝트는 [Claude Code](https://docs.anthropic.com/en/docs/claude-code)에서 활용할 수 있는 MCP(Model Context Protocol) 서버 설정을 지원합니다.

### 설정 방법

1. `.mcp.json.example`을 복사하여 `.mcp.json`을 생성합니다:

```bash
cp .mcp.json.example .mcp.json
```

2. `.mcp.json`을 열어 각 MCP 서버에 필요한 API 키를 입력합니다.

### 포함된 MCP 서버

| 서버 | 용도 |
|------|------|
| [Context7](https://context7.com) | 라이브러리/프레임워크의 최신 문서를 실시간으로 조회 |
| [Playwright](https://github.com/microsoft/playwright-mcp) | 브라우저 자동화를 통한 UI 테스트 및 스크린샷 |
| [Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking) | 복잡한 문제를 단계별로 분석하여 사고 과정을 구조화 |
| [Shrimp Task Manager](https://github.com/cjo4m06/mcp-shrimp-task-manager) | 복잡한 작업을 체계적으로 분석, 계획, 실행하는 태스크 관리 |
| [shadcn MCP](https://ui.shadcn.com/docs/cli#mcp) | shadcn/ui 컴포넌트 검색, 조회, 설치 지원 |

> **주의:** `.mcp.json`은 API 키를 포함할 수 있으므로 `.gitignore`에 등록되어 있습니다. 절대 커밋하지 마세요.

## 코딩 컨벤션

- 변수/함수: `camelCase`
- 클래스/컴포넌트: `PascalCase`
- 컴포넌트 파일명: `PascalCase` (예: `Header.tsx`)
- 상수: `UPPER_SNAKE_CASE`
- 들여쓰기: 스페이스 2칸
- 세미콜론 사용
- `any` 타입 사용 금지
