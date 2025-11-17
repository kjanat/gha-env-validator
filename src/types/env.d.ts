import type { GitHubActionsEnv } from "../schemas/index.js";

/**
 * Augments NodeJS.ProcessEnv with GitHub Actions environment variable types.
 *
 * This provides IntelliSense and type-safety when accessing process.env in TypeScript.
 * After importing this package, you'll get autocomplete for all GitHub Actions vars.
 *
 * @example
 * ```typescript
 * import '@kjanat/gha-env-validator';
 *
 * // Now you get IntelliSense for GitHub Actions vars:
 * const sha = process.env.GITHUB_SHA; // string
 * const runId = process.env.GITHUB_RUN_ID; // string | undefined
 * ```
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv extends Partial<GitHubActionsEnv> {
      // Preserve index signature for dynamic env var access
      [key: string]: string | undefined;
    }
  }
}
