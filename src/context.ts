/**
 * Context Utilities - Helper functions for accessing GitHub Actions context
 *
 * Provides convenient wrappers around validated environment variables
 * for common workflow context operations.
 */

import { validateEnv } from "./validate.js";

/**
 * Gets the current branch name.
 *
 * @example
 * ```typescript
 * import { getCurrentBranch } from '@kjanat/gha-env-validator';
 *
 * const branch = getCurrentBranch();
 * console.log(`Building branch: ${branch}`);
 * ```
 *
 * @returns The current branch name
 */
export function getCurrentBranch(): string {
  const env = validateEnv();
  return env.GITHUB_REF_NAME;
}

/**
 * Gets repository information.
 *
 * @example
 * ```typescript
 * import { getRepoInfo } from '@kjanat/gha-env-validator';
 *
 * const repo = getRepoInfo();
 * console.log(`${repo.owner}/${repo.name}`); // octocat/Hello-World
 * ```
 *
 * @returns Repository owner and name
 */
export function getRepoInfo(): { owner: string; name: string; full: string } {
  const env = validateEnv();
  const parts = env.GITHUB_REPOSITORY.split("/");
  const owner = parts[0] || "";
  const name = parts[1] || "";

  return { owner, name, full: env.GITHUB_REPOSITORY };
}

/**
 * Gets the current commit SHA.
 *
 * @example
 * ```typescript
 * import { getCommitSha } from '@kjanat/gha-env-validator';
 *
 * const sha = getCommitSha();
 * const shortSha = getCommitSha('short');
 * ```
 *
 * @param format - 'full' or 'short' (7 chars)
 * @returns Commit SHA
 */
export function getCommitSha(format: "full" | "short" = "full"): string {
  const env = validateEnv();
  return format === "short" ? env.GITHUB_SHA.substring(0, 7) : env.GITHUB_SHA;
}

/**
 * Checks if the current event is a pull request.
 *
 * @example
 * ```typescript
 * import { isPullRequest } from '@kjanat/gha-env-validator';
 *
 * if (isPullRequest()) {
 *   console.log('Running in PR context');
 * }
 * ```
 *
 * @returns true if running in a pull request
 */
export function isPullRequest(): boolean {
  const env = validateEnv();
  return env.GITHUB_EVENT_NAME === "pull_request"
    || env.GITHUB_EVENT_NAME === "pull_request_target";
}

/**
 * Gets pull request information (only available in PR context).
 *
 * @example
 * ```typescript
 * import { getPullRequestInfo } from '@kjanat/gha-env-validator';
 *
 * if (isPullRequest()) {
 *   const pr = getPullRequestInfo();
 *   console.log(`PR: ${pr.base} ← ${pr.head}`);
 * }
 * ```
 *
 * @returns PR base and head refs, or null if not in PR context
 */
export function getPullRequestInfo(): {
  base: string;
  head: string;
} | null {
  const env = validateEnv();

  if (!env.GITHUB_BASE_REF || !env.GITHUB_HEAD_REF) {
    return null;
  }

  return {
    base: env.GITHUB_BASE_REF,
    head: env.GITHUB_HEAD_REF,
  };
}

/**
 * Checks if running on a specific branch.
 *
 * @example
 * ```typescript
 * import { isOnBranch } from '@kjanat/gha-env-validator';
 *
 * if (isOnBranch('main')) {
 *   console.log('Running on main branch');
 * }
 * ```
 *
 * @param branchName - Branch name to check
 * @returns true if on specified branch
 */
export function isOnBranch(branchName: string): boolean {
  return getCurrentBranch() === branchName;
}

/**
 * Checks if the ref is a tag.
 *
 * @example
 * ```typescript
 * import { isTag } from '@kjanat/gha-env-validator';
 *
 * if (isTag()) {
 *   console.log('Building a tag release');
 * }
 * ```
 *
 * @returns true if the ref is a tag
 */
export function isTag(): boolean {
  const env = validateEnv();
  return env.GITHUB_REF_TYPE === "tag";
}

/**
 * Gets runner information.
 *
 * @example
 * ```typescript
 * import { getRunnerInfo } from '@kjanat/gha-env-validator';
 *
 * const runner = getRunnerInfo();
 * console.log(`Running on ${runner.os} (${runner.arch})`);
 * ```
 *
 * @returns Runner OS, architecture, and environment details
 */
export function getRunnerInfo(): {
  os: "Linux" | "Windows" | "macOS";
  arch: "X86" | "X64" | "ARM" | "ARM64";
  environment: "github-hosted" | "self-hosted";
  name: string;
} {
  const env = validateEnv();

  return {
    os: env.RUNNER_OS,
    arch: env.RUNNER_ARCH,
    environment: env.RUNNER_ENVIRONMENT,
    name: env.RUNNER_NAME,
  };
}

/**
 * Gets workflow run information.
 *
 * @example
 * ```typescript
 * import { getWorkflowRun } from '@kjanat/gha-env-validator';
 *
 * const run = getWorkflowRun();
 * console.log(`Run #${run.number}, attempt ${run.attempt}`);
 * ```
 *
 * @returns Workflow run details
 */
export function getWorkflowRun(): {
  id: number;
  number: number;
  attempt: number;
  url: string;
} {
  const env = validateEnv();

  return {
    id: env.GITHUB_RUN_ID,
    number: env.GITHUB_RUN_NUMBER,
    attempt: env.GITHUB_RUN_ATTEMPT,
    url: `${env.GITHUB_SERVER_URL}/${env.GITHUB_REPOSITORY}/actions/runs/${env.GITHUB_RUN_ID}`,
  };
}

/**
 * Gets actor information.
 *
 * @example
 * ```typescript
 * import { getActor } from '@kjanat/gha-env-validator';
 *
 * const actor = getActor();
 * console.log(`Triggered by: ${actor.name} (${actor.id})`);
 * ```
 *
 * @returns Actor name and ID
 */
export function getActor(): {
  name: string;
  id: number;
  triggering: string;
} {
  const env = validateEnv();

  return {
    name: env.GITHUB_ACTOR,
    id: env.GITHUB_ACTOR_ID,
    triggering: env.GITHUB_TRIGGERING_ACTOR,
  };
}

/**
 * Checks if running in debug mode.
 *
 * @example
 * ```typescript
 * import { isDebugMode } from '@kjanat/gha-env-validator';
 *
 * if (isDebugMode()) {
 *   console.log('Debug logging enabled');
 * }
 * ```
 *
 * @returns true if debug logging is enabled
 */
export function isDebugMode(): boolean {
  return process.env.RUNNER_DEBUG === "1";
}

/**
 * Gets all GitHub API URLs.
 *
 * @example
 * ```typescript
 * import { getApiUrls } from '@kjanat/gha-env-validator';
 *
 * const api = getApiUrls();
 * const response = await fetch(`${api.rest}/repos/${owner}/${repo}`);
 * ```
 *
 * @returns API, GraphQL, and server URLs
 */
export function getApiUrls(): {
  rest: string;
  graphql: string;
  server: string;
} {
  const env = validateEnv();

  return {
    rest: env.GITHUB_API_URL,
    graphql: env.GITHUB_GRAPHQL_URL,
    server: env.GITHUB_SERVER_URL,
  };
}
