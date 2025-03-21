# Portal Net Mob

이 프로젝트는 React, TypeScript, Vite를 사용하여 개발된 웹 애플리케이션입니다. 이 문서는 프로젝트 구조, 사용된 패키지, 실행 방법 및 스토리북 실행 방법에 대해 설명합니다.

## 프로젝트 구조

```
/Users/thebiz/work/net/portal-net-mob
├── src
│   ├── components
│   │   ├── common
│   │   └── view
│   └── App.tsx
├── .storybook
├── eslint.config.js
├── tsconfig.json
└── README.md
```

- **src**: 애플리케이션의 소스 코드가 포함된 디렉토리입니다.
  - **components**: 재사용 가능한 UI 컴포넌트가 포함된 디렉토리입니다.
    - **common**: 여러 곳에서 공통으로 사용되는 컴포넌트가 포함된 디렉토리입니다.
    - **view**: 특정 뷰와 관련된 컴포넌트가 포함된 디렉토리입니다.
  - **App.tsx**: 애플리케이션의 루트 컴포넌트입니다.
- **.storybook**: 스토리북 설정 파일이 포함된 디렉토리입니다.
- **eslint.config.js**: ESLint 설정 파일입니다.
- **tsconfig.json**: TypeScript 설정 파일입니다.
- **README.md**: 프로젝트에 대한 설명이 포함된 파일입니다.

## 사용된 주요 패키지

- React
- TypeScript
- Vite
- Storybook
- ESLint
- react-aria-components
- react-modal-sheet
- overlay-kit

## 프로젝트 설정 및 실행 방법

### 1. 패키지 설치

프로젝트의 루트 디렉토리에서 다음 명령어를 실행하여 필요한 패키지를 설치합니다:

```bash
npm install
```

### 2. 개발 서버 실행

다음 명령어를 실행하여 개발 서버를 시작합니다:

```bash
npm run dev
```

### 3. 빌드

프로덕션 빌드를 생성하려면 다음 명령어를 실행합니다:

```bash
npm run build
```

### 4. ESLint 검사

코드 스타일 및 품질 검사를 위해 ESLint를 실행하려면 다음 명령어를 사용합니다:

```bash
npm run lint
```

## 스토리북 실행 방법

스토리북을 실행하여 컴포넌트의 UI를 독립적으로 확인할 수 있습니다. 다음 명령어를 실행하여 스토리북을 시작합니다:

```bash
npm run storybook
```

스토리북은 기본적으로 `http://localhost:6006`에서 실행됩니다.
