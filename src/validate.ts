import type { z, ZodObject, ZodRawShape } from "zod";
import { type GitHubActionsEnv, githubActionsSchema } from "./schemas/index.js";

/**
 * Options for environment variable validation
 */
export interface ValidateEnvOptions {
  /**
   * Environment object to validate (defaults to process.env)
   */
  env?: Record<string, string | undefined>;

  /**
   * Whether to strip unknown environment variables from the result
   * @default false
   */
  strict?: boolean;
}

/**
 * Validates environment variables against the default GitHub Actions schema.
 *
 * Throws a ZodError with detailed validation failures if env vars are invalid or missing.
 *
 * @example
 * ```typescript
 * import { validateEnv } from '@kjanat/gha-env-validator';
 *
 * // In your GitHub Action
 * const env = validateEnv();
 * console.log(env.GITHUB_SHA); // Type-safe access with IntelliSense
 * console.log(env.GITHUB_RUN_ID); // number type
 * ```
 *
 * @param options - Validation options
 * @returns Validated and typed environment variables
 * @throws {ZodError} If validation fails
 */
export function validateEnv(
  options: ValidateEnvOptions = {},
): GitHubActionsEnv {
  const { env = process.env, strict = false } = options;

  if (strict) {
    return githubActionsSchema.parse(env);
  }

  // Pass through unknown vars by default for flexibility
  return githubActionsSchema.passthrough().parse(env) as GitHubActionsEnv;
}

/**
 * Validates environment variables against a custom schema.
 *
 * @example
 * ```typescript
 * import { validateCustomEnv, createEnvSchema } from '@kjanat/gha-env-validator';
 * import { z } from 'zod';
 *
 * const schema = createEnvSchema({
 *   API_KEY: z.string().min(1),
 *   NODE_ENV: z.enum(['development', 'production']),
 * });
 *
 * const env = validateCustomEnv(schema);
 * console.log(env.API_KEY); // string
 * console.log(env.GITHUB_SHA); // string (from defaults)
 * ```
 *
 * @param schema - Custom Zod schema to validate against
 * @param options - Validation options
 * @returns Validated and typed environment variables
 * @throws {ZodError} If validation fails
 */
export function validateCustomEnv<T extends ZodRawShape>(
  schema: ZodObject<T>,
  options: ValidateEnvOptions = {},
): z.infer<ZodObject<T>> {
  const { env = process.env, strict = false } = options;

  if (strict) {
    return schema.parse(env);
  }

  return schema.passthrough().parse(env);
}

/**
 * Safely validates environment variables, returning an error object instead of throwing.
 *
 * @example
 * ```typescript
 * import { safeValidateEnv } from '@kjanat/gha-env-validator';
 *
 * const result = safeValidateEnv();
 *
 * if (result.success) {
 *   console.log(result.data.GITHUB_SHA);
 * } else {
 *   console.error('Validation failed:', result.error.format());
 * }
 * ```
 *
 * @param options - Validation options
 * @returns Safe parse result with success/error
 */
export function safeValidateEnv(
  options: ValidateEnvOptions = {},
): z.SafeParseReturnType<unknown, GitHubActionsEnv> {
  const { env = process.env, strict = false } = options;

  if (strict) {
    return githubActionsSchema.safeParse(env);
  }

  return githubActionsSchema.passthrough().safeParse(env);
}

/**
 * Safely validates environment variables against a custom schema.
 *
 * @param schema - Custom Zod schema to validate against
 * @param options - Validation options
 * @returns Safe parse result with success/error
 */
export function safeValidateCustomEnv<T extends ZodRawShape>(
  schema: ZodObject<T>,
  options: ValidateEnvOptions = {},
): z.SafeParseReturnType<unknown, z.infer<ZodObject<T>>> {
  const { env = process.env, strict = false } = options;

  if (strict) {
    return schema.safeParse(env);
  }

  return schema.passthrough().safeParse(env);
}
