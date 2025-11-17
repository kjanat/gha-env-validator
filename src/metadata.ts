import type { ZodType } from "zod";

/**
 * Zod GlobalMeta interface for type-safe metadata access
 * Matches the metadata structure used throughout this library
 */
export interface ZodMetadata {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  example?: string;
  sensitive?: boolean;
  min?: number;
  max?: number;
  [k: string]: unknown;
}

/**
 * Safely extract metadata from Zod schema using .meta() method
 * @param schema - Any Zod schema type
 * @returns Metadata object (empty if none set)
 */
export function getSchemaMetadata(schema: ZodType): ZodMetadata {
  try {
    // Zod v4 .meta() method returns metadata
    // biome-ignore lint/suspicious/noExplicitAny: Accessing Zod internal API (.meta method)
    const meta = (schema as any).meta?.();
    return meta || {};
  } catch {
    return {};
  }
}

/**
 * Get Zod type name from internal _zod.traits or _def property
 * @param schema - Any Zod schema type
 * @returns Type name (e.g., 'ZodString', 'ZodEnum', etc.)
 */
export function getZodTypeName(schema: ZodType): string {
  // biome-ignore lint/suspicious/noExplicitAny: Accessing Zod internal properties
  const schemaAny = schema as any;

  // Zod v4: Check _zod.traits Set for type information
  if (schemaAny._zod?.traits) {
    const traits = Array.from(schemaAny._zod.traits as Set<string>);
    // Find the non-$ prefixed trait (e.g., "ZodBoolean" not "$ZodBoolean")
    const typeName = traits.find((t) =>
      !t.startsWith("$") && t.startsWith("Zod")
    );
    if (typeName) return typeName;
  }

  // Fallback: Try _def.typeName (older Zod versions)
  return schemaAny._def?.typeName || "ZodUnknown";
}

/**
 * Type guard for ZodEnum schemas
 * @param schema - Any Zod schema type
 * @returns True if schema is a ZodEnum
 */
export function isZodEnum(schema: ZodType): boolean {
  return getZodTypeName(schema) === "ZodEnum";
}

/**
 * Extract enum values safely from ZodEnum schema
 * @param schema - Any Zod schema type
 * @returns Array of enum values if schema is ZodEnum, undefined otherwise
 */
export function getEnumValues(schema: ZodType): string[] | undefined {
  if (isZodEnum(schema)) {
    // biome-ignore lint/suspicious/noExplicitAny: Accessing Zod internal property (_def.values for ZodEnum)
    return (schema as any)._def?.values;
  }
  return undefined;
}

/**
 * Check if schema is optional (ZodOptional wrapper)
 * @param schema - Any Zod schema type
 * @returns True if schema is optional
 */
export function isSchemaOptional(schema: ZodType): boolean {
  return getZodTypeName(schema) === "ZodOptional";
}

/**
 * Check if schema is or contains a boolean type (unwraps optionals/defaults)
 * @param schema - Any Zod schema type
 * @returns True if the underlying schema is ZodBoolean
 */
export function isBooleanSchema(schema: ZodType): boolean {
  const typeName = getZodTypeName(schema);

  // Direct boolean
  if (typeName === "ZodBoolean") {
    return true;
  }

  // Unwrap optional/default to check inner type
  if (typeName === "ZodOptional" || typeName === "ZodDefault") {
    // biome-ignore lint/suspicious/noExplicitAny: Accessing Zod internal property (_def.innerType)
    const innerType = (schema as any)._def?.innerType;
    if (innerType) {
      return getZodTypeName(innerType) === "ZodBoolean";
    }
  }

  return false;
}
