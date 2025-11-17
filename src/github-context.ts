/**
 * GitHub Context - Access to github context object properties
 *
 * Provides utilities for accessing the github context that's available
 * in GitHub Actions workflows beyond environment variables.
 *
 * @see https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context
 */

import * as fs from "node:fs";
import type {
  PullRequestEvent,
  PushEvent,
  ReleaseEvent,
  WorkflowDispatchEvent,
} from "@octokit/webhooks-types";
import { validateEnv } from "./validate.ts";

/**
 * Gets the full event webhook payload.
 *
 * Reads and parses the JSON event payload from GITHUB_EVENT_PATH.
 *
 * @example
 * ```typescript
 * import { getEventPayload } from '@kjanat/gha-env-validator';
 *
 * const event = getEventPayload();
 * console.log(event.action); // Event-specific properties
 * ```
 *
 * @returns Parsed event payload object
 */
export function getEventPayload<T = unknown>(): T {
  const env = validateEnv();
  const eventPath = env.GITHUB_EVENT_PATH;

  const eventData = fs.readFileSync(eventPath, "utf-8");
  return JSON.parse(eventData) as T;
}

/**
 * Gets a typed pull request event payload.
 *
 * @example
 * ```typescript
 * import { getPullRequestEvent } from '@kjanat/gha-env-validator';
 *
 * if (isPullRequest()) {
 *   const event = getPullRequestEvent();
 *   console.log(event.pull_request.number);
 *   console.log(event.pull_request.title);
 * }
 * ```
 *
 * @returns Typed pull request event
 */
export function getPullRequestEvent(): PullRequestEvent {
  return getEventPayload<PullRequestEvent>();
}

/**
 * Gets a typed push event payload.
 *
 * @example
 * ```typescript
 * import { getPushEvent } from '@kjanat/gha-env-validator';
 *
 * const event = getPushEvent();
 * console.log(event.commits.length);
 * console.log(event.head_commit?.message);
 * ```
 *
 * @returns Typed push event
 */
export function getPushEvent(): PushEvent {
  return getEventPayload<PushEvent>();
}

/**
 * Gets a typed release event payload.
 *
 * @example
 * ```typescript
 * import { getReleaseEvent } from '@kjanat/gha-env-validator';
 *
 * const event = getReleaseEvent();
 * console.log(event.release.tag_name);
 * console.log(event.release.name);
 * ```
 *
 * @returns Typed release event
 */
export function getReleaseEvent(): ReleaseEvent {
  return getEventPayload<ReleaseEvent>();
}

/**
 * Gets a typed workflow_dispatch event payload.
 *
 * @example
 * ```typescript
 * import { getWorkflowDispatchEvent } from '@kjanat/gha-env-validator';
 *
 * const event = getWorkflowDispatchEvent();
 * console.log(event.inputs); // Custom workflow inputs
 * ```
 *
 * @returns Typed workflow_dispatch event
 */
export function getWorkflowDispatchEvent(): WorkflowDispatchEvent {
  return getEventPayload<WorkflowDispatchEvent>();
}

/**
 * Gets the GitHub token for API authentication.
 *
 * Note: This requires the token to be passed as an input or environment variable.
 * The github.token context property is only available in YAML expressions.
 *
 * @example
 * ```typescript
 * import { getGitHubToken } from '@kjanat/gha-env-validator';
 *
 * const token = getGitHubToken();
 * const response = await fetch('https://api.github.com/user', {
 *   headers: { Authorization: `Bearer ${token}` },
 * });
 * ```
 *
 * @returns GitHub token from environment
 */
export function getGitHubToken(): string {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error(
      "GITHUB_TOKEN not found. Make sure to set it in your workflow:\n" +
        "  env:\n" +
        "    GITHUB_TOKEN: ${{ github.token }}",
    );
  }

  return token;
}

/**
 * Gets the repository clone URL.
 *
 * @example
 * ```typescript
 * import { getRepositoryUrl } from '@kjanat/gha-env-validator';
 *
 * const url = getRepositoryUrl();
 * // 'https://github.com/octocat/Hello-World'
 * ```
 *
 * @returns Repository URL
 */
export function getRepositoryUrl(): string {
  const env = validateEnv();
  return `${env.GITHUB_SERVER_URL}/${env.GITHUB_REPOSITORY}`;
}

/**
 * Gets the repository Git URL for cloning.
 *
 * @example
 * ```typescript
 * import { getRepositoryGitUrl } from '@kjanat/gha-env-validator';
 *
 * const url = getRepositoryGitUrl();
 * // 'https://github.com/octocat/Hello-World.git'
 * ```
 *
 * @returns Git clone URL
 */
export function getRepositoryGitUrl(): string {
  return `${getRepositoryUrl()}.git`;
}

/**
 * Checks if the current event is a specific type.
 *
 * @example
 * ```typescript
 * import { isEventType } from '@kjanat/gha-env-validator';
 *
 * if (isEventType('pull_request')) {
 *   console.log('This is a PR event');
 * }
 * ```
 *
 * @param eventType - Event type to check
 * @returns true if current event matches type
 */
export function isEventType(eventType: string): boolean {
  const env = validateEnv();
  return env.GITHUB_EVENT_NAME === eventType;
}

/**
 * Checks if running in a push event.
 *
 * @example
 * ```typescript
 * import { isPushEvent } from '@kjanat/gha-env-validator';
 *
 * if (isPushEvent()) {
 *   const event = getPushEvent();
 *   console.log(`Pushed ${event.commits.length} commits`);
 * }
 * ```
 *
 * @returns true if push event
 */
export function isPushEvent(): boolean {
  return isEventType("push");
}

/**
 * Checks if running in a release event.
 *
 * @example
 * ```typescript
 * import { isReleaseEvent } from '@kjanat/gha-env-validator';
 *
 * if (isReleaseEvent()) {
 *   const event = getReleaseEvent();
 *   console.log(`Released: ${event.release.tag_name}`);
 * }
 * ```
 *
 * @returns true if release event
 */
export function isReleaseEvent(): boolean {
  return isEventType("release");
}

/**
 * Checks if running in a workflow_dispatch event.
 *
 * @example
 * ```typescript
 * import { isWorkflowDispatch } from '@kjanat/gha-env-validator';
 *
 * if (isWorkflowDispatch()) {
 *   console.log('Manually triggered');
 * }
 * ```
 *
 * @returns true if workflow_dispatch event
 */
export function isWorkflowDispatch(): boolean {
  return isEventType("workflow_dispatch");
}

/**
 * Gets the event name.
 *
 * @example
 * ```typescript
 * import { getEventName } from '@kjanat/gha-env-validator';
 *
 * const event = getEventName();
 * console.log(`Triggered by: ${event}`);
 * ```
 *
 * @returns Event name (push, pull_request, release, etc.)
 */
export function getEventName(): string {
  const env = validateEnv();
  return env.GITHUB_EVENT_NAME;
}
