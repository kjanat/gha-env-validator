/**
 * Action Inputs - Type-safe validation for GitHub Actions inputs
 *
 * Provides utilities for validating and parsing action inputs with Zod schemas.
 */

import { type ZodObject, type ZodRawShape, z } from "zod";

/**
 * Gets an action input value.
 *
 * Action inputs are passed as environment variables with the prefix INPUT_
 * and uppercased name. Spaces in input names are replaced with underscores.
 *
 * @example
 * ```typescript
 * import { getInput } from '@kjanat/gha-env-validator';
 *
 * const token = getInput('github-token');
 * const environment = getInput('environment', { required: true });
 * ```
 *
 * @param name - Input name (as defined in action.yml)
 * @param options - Input options
 * @returns Input value, or undefined if not set
 */
export function getInput(
  name: string,
  options: { required?: boolean } = {}
): string | undefined {
  const envName = `INPUT_${name.replace(/[ -]/g, "_").toUpperCase()}`;
  const value = process.env[envName]?.trim();

  if (options.required && !value) {
    throw new Error(`Input required and not supplied: ${name}`);
  }

  return value || undefined;
}

/**
 * Gets a boolean input value.
 *
 * Parses common boolean representations: true/false, yes/no, 1/0
 *
 * @example
 * ```typescript
 * import { getBooleanInput } from '@kjanat/gha-env-validator';
 *
 * const dryRun = getBooleanInput('dry-run');
 * const skipTests = getBooleanInput('skip-tests', { required: true });
 * ```
 *
 * @param name - Input name
 * @param options - Input options
 * @returns Boolean value
 */
export function getBooleanInput(
  name: string,
  options: { required?: boolean } = {}
): boolean {
  const value = getInput(name, options);

  if (value === undefined) {
    return false;
  }

  const normalized = value.toLowerCase();

  if (["true", "yes", "1"].includes(normalized)) {
    return true;
  }

  if (["false", "no", "0"].includes(normalized)) {
    return false;
  }

  throw new Error(`Input '${name}' has invalid boolean value '${value}'. Expected: true/false, yes/no, or 1/0.`);
}

/**
 * Gets a multiline input value as an array.
 *
 * @example
 * ```typescript
 * import { getMultilineInput } from '@kjanat/gha-env-validator';
 *
 * const files = getMultilineInput('files');
 * // Input:
 * // src/app.ts
 * // src/lib.ts
 * // Returns: ['src/app.ts', 'src/lib.ts']
 * ```
 *
 * @param name - Input name
 * @param options - Input options
 * @returns Array of non-empty lines
 */
export function getMultilineInput(
  name: string,
  options: { required?: boolean } = {}
): string[] {
  const value = getInput(name, options);

  if (!value) {
    return [];
  }

  return value
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

/**
 * Validates action inputs against a Zod schema.
 *
 * @example
 * ```typescript
 * import { validateInputs, z } from '@kjanat/gha-env-validator';
 *
 * const inputs = validateInputs({
 *   'api-key': z.string().min(1),
 *   'environment': z.enum(['dev', 'staging', 'prod']),
 *   'dry-run': z.boolean().default(false),
 * });
 *
 * console.log(inputs['api-key']); // Type-safe!
 * ```
 *
 * @param schema - Zod schema for inputs
 * @returns Validated inputs object
 */
export function validateInputs<T extends ZodRawShape>(
  schema: T
): z.infer<ZodObject<T>> {
  const inputs: Record<string, unknown> = {};

  for (const [name, zodSchema] of Object.entries(schema)) {
    const envName = `INPUT_${name.replace(/[ -]/g, "_").toUpperCase()}`;
    const value = process.env[envName]?.trim();

    // Handle different types
    if (value !== undefined && value !== "") {
      // Check if it's a boolean schema
      const schemaType = (zodSchema as any).type;

      if (schemaType === "boolean") {
        const normalized = value.toLowerCase();
        inputs[name] = ["true", "yes", "1"].includes(normalized);
      } else {
        inputs[name] = value;
      }
    }
  }

  return z.object(schema).parse(inputs);
}

/**
 * Safely validates action inputs, returning a result object.
 *
 * @example
 * ```typescript
 * import { safeValidateInputs, z } from '@kjanat/gha-env-validator';
 *
 * const result = safeValidateInputs({
 *   'api-key': z.string().min(10),
 *   'retries': z.number().int().min(0).max(5),
 * });
 *
 * if (result.success) {
 *   console.log('Inputs valid:', result.data);
 * } else {
 *   console.error('Validation failed:', result.error);
 * }
 * ```
 *
 * @param schema - Zod schema for inputs
 * @returns Safe parse result
 */
export function safeValidateInputs<T extends ZodRawShape>(schema: T) {
  const inputs: Record<string, unknown> = {};

  for (const [name, zodSchema] of Object.entries(schema)) {
    const envName = `INPUT_${name.replace(/[ -]/g, "_").toUpperCase()}`;
    const value = process.env[envName]?.trim();

    if (value !== undefined && value !== "") {
      const schemaType = (zodSchema as any).type;

      if (schemaType === "boolean") {
        const normalized = value.toLowerCase();
        inputs[name] = ["true", "yes", "1"].includes(normalized);
      } else {
        inputs[name] = value;
      }
    }
  }

  return z.object(schema).safeParse(inputs);
}
