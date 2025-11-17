---
layout: home

hero:
  name: GHA Env Validator
  text: Type-safe GitHub Actions
  tagline: Environment variable validation with IntelliSense, Zod v4 metadata, and workflow command helpers
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/kjanat/gha-env-validator

features:
  - icon: 🔐
    title: Type-Safe Validation
    details: Full TypeScript support with Zod v4 schemas for all 43 GitHub Actions environment variables

  - icon: 💡
    title: Rich IntelliSense
    details: Auto-complete and hover documentation for every environment variable in your IDE

  - icon: 📦
    title: Rich Metadata
    details: Zod v4 .meta() with id, title, description, category, and examples for all variables

  - icon: ⚙️
    title: Workflow Commands
    details: 20+ helper utilities for environment vars, outputs, summaries, annotations, and more

  - icon: 🎯
    title: Context Utilities
    details: Convenient helpers for branches, repos, commits, PRs, runners, and workflow info

  - icon: 📝
    title: Action Inputs
    details: Type-safe input validation with Zod schemas and boolean/multiline parsing

  - icon: 🧪
    title: 100% Tested
    details: 106 passing tests with 95%+ coverage, automated quality gates with lefthook

  - icon: ⚡
    title: Bun-Native
    details: Built and tested with Bun for optimal performance, works with Node.js 18+
---

## Quick Example

```typescript
import { addSummary, setOutput, validateEnv } from "@kjanat/gha-env-validator";

// Validate GitHub Actions environment
const env = validateEnv();

// Type-safe access with IntelliSense
console.log(env.GITHUB_SHA); // string
console.log(env.GITHUB_RUN_ID); // number
console.log(env.RUNNER_OS); // "Linux" | "Windows" | "macOS"

// Use workflow commands
setOutput("commit", env.GITHUB_SHA.substring(0, 7));
addSummary("Build", `✅ Deployed to ${env.RUNNER_OS}`);
```

## Installation

::: code-group

```bash [npm]
npm install @kjanat/gha-env-validator zod
```

```bash [bun]
bun add @kjanat/gha-env-validator zod
```

```bash [yarn]
yarn add @kjanat/gha-env-validator zod
```

```bash [pnpm]
pnpm add @kjanat/gha-env-validator zod
```

:::
