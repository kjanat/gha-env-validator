# Context Utilities

Convenient helpers for accessing GitHub Actions context information.

## Branch Information

```typescript
import { getCurrentBranch, isOnBranch, isTag } from "@kjanat/gha-env-validator";

// Get current branch/tag name
const branch = getCurrentBranch(); // 'main', 'develop', 'v1.0.0', etc.

// Check specific branch
if (isOnBranch("main")) {
  console.log("On main branch!");
}

// Check if building a tag
if (isTag()) {
  console.log("Building a release tag");
}
```

## Repository Info

```typescript
import { getRepoInfo } from "@kjanat/gha-env-validator";

const repo = getRepoInfo();

console.log(repo.owner); // 'octocat'
console.log(repo.name); // 'Hello-World'
console.log(repo.full); // 'octocat/Hello-World'
```

## Commit Information

```typescript
import { getCommitSha } from "@kjanat/gha-env-validator";

const fullSha = getCommitSha(); // 'ffac537e6cbbf934b08745a378932722df287a53'
const shortSha = getCommitSha("short"); // 'ffac537'
```

## Pull Request Context

```typescript
import { getPullRequestInfo, isPullRequest } from "@kjanat/gha-env-validator";

if (isPullRequest()) {
  const pr = getPullRequestInfo();

  if (pr) {
    console.log(`PR: ${pr.base} ← ${pr.head}`);
    // PR: main ← feature-branch
  }
}
```

## Runner Information

```typescript
import { getRunnerInfo } from "@kjanat/gha-env-validator";

const runner = getRunnerInfo();

console.log(runner.os); // 'Linux' | 'Windows' | 'macOS'
console.log(runner.arch); // 'X64', 'ARM64', etc.
console.log(runner.environment); // 'github-hosted' | 'self-hosted'
console.log(runner.name); // 'GitHub Actions 2'
```

## Workflow Run Details

```typescript
import { getWorkflowRun } from "@kjanat/gha-env-validator";

const run = getWorkflowRun();

console.log(run.id); // 1658821493
console.log(run.number); // 42
console.log(run.attempt); // 1
console.log(run.url); // Full URL to workflow run
```

## Actor Information

```typescript
import { getActor } from "@kjanat/gha-env-validator";

const actor = getActor();

console.log(actor.name); // 'octocat'
console.log(actor.id); // 1234567
console.log(actor.triggering); // Username who triggered (may differ on re-runs)
```

## API URLs

```typescript
import { getApiUrls } from "@kjanat/gha-env-validator";

const api = getApiUrls();

console.log(api.rest); // 'https://api.github.com'
console.log(api.graphql); // 'https://api.github.com/graphql'
console.log(api.server); // 'https://github.com'

// Use in API calls
const response = await fetch(`${api.rest}/repos/${owner}/${repo}`);
```

## Debug Mode

```typescript
import { isDebugMode } from "@kjanat/gha-env-validator";

if (isDebugMode()) {
  console.log("🐛 Debug logging enabled");
  // Enable verbose logging
}
```

## Conditional Logic Example

```typescript
import {
  getCurrentBranch,
  isOnBranch,
  isPullRequest,
  isTag
} from "@kjanat/gha-env-validator";

if (isPullRequest()) {
  console.log("Running PR checks");
} else if (isTag()) {
  console.log("Building release");
} else if (isOnBranch("main")) {
  console.log("Deploying to production");
} else {
  console.log(`Feature branch: ${getCurrentBranch()}`);
}
```

## Next Steps

- [Action Inputs →](/guide/inputs)
- [Workflow Commands →](/guide/workflow-commands)
- [Examples →](/guide/examples)
