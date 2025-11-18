import { type ZodRawShape, z } from "zod";
import { githubActionsSchema } from "~/schemas";

/**
 * Creates a custom environment variable schema by extending the default GitHub Actions schema.
 *
 * @example
 * ```typescript
 * import { createEnvSchema } from '@kjanat/gha-env-validator';
 * import { z } from 'zod';
 *
 * const schema = createEnvSchema({
 *   // Custom environment variables
 *   API_KEY: z.string().min(1),
 *   API_URL: z.string().url(),
 *   NODE_ENV: z.enum(['development', 'production', 'test']),
 *   MAX_RETRIES: z.string().transform(Number),
 * });
 * ```
 *
 * @param customSchema - Zod schema object for your custom environment variables
 * @returns Combined schema with both GitHub Actions defaults and custom variables
 */
export function createEnvSchema<T extends ZodRawShape>(customSchema: T) {
  return githubActionsSchema.extend(customSchema);
}

/**
 * Creates a schema for ONLY custom environment variables (without GitHub Actions defaults).
 * Useful when you want to validate custom vars independently or in non-GHA contexts.
 *
 * @example
 * ```typescript
 * import { createCustomEnvSchema } from '@kjanat/gha-env-validator';
 * import { z } from 'zod';
 *
 * const schema = createCustomEnvSchema({
 *   DATABASE_URL: z.string().url(),
 *   PORT: z.string().transform(Number),
 * });
 * ```
 *
 * @param customSchema - Zod schema object for your environment variables
 * @returns Zod schema without GitHub Actions defaults
 */
export function createCustomEnvSchema<T extends ZodRawShape>(
  customSchema: T
): z.ZodObject<T> {
  return z.object(customSchema);
}
