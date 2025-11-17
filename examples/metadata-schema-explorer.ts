/**
 * Schema Explorer Example
 *
 * Interactive tool to explore schema structure and metadata.
 * Useful for understanding available variables and their relationships.
 */

import { githubActionsSchema } from "@kjanat/gha-env-validator";

interface VariableInfo {
  name: string;
  id: string;
  title: string;
  description: string;
  category: string;
  example: string;
  type: string;
  optional: boolean;
  enum?: string[];
}

// Extract complete variable information
function extractVariableInfo(): VariableInfo[] {
  const variables: VariableInfo[] = [];

  for (const [name, schema] of Object.entries(githubActionsSchema.shape)) {
    const meta = (schema as any)._zod?.meta || {};
    const zodType = (schema as any)._zod?.type || "unknown";
    const isOptional = (schema as any).isOptional?.() || false;
    const enumValues = (schema as any)._zod?.values;

    variables.push({
      name,
      id: meta.id || name,
      title: meta.title || name,
      description: meta.description || "",
      category: meta.category || "uncategorized",
      example: meta.example || "",
      type: zodType,
      optional: isOptional,
      enum: enumValues,
    });
  }

  return variables;
}

// Statistics
function showStatistics(vars: VariableInfo[]) {
  console.log("📊 Schema Statistics\n");

  // By category
  const byCategory = vars.reduce(
    (acc, v) => {
      acc[v.category] = (acc[v.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  console.log("Variables by category:");
  for (const [cat, count] of Object.entries(byCategory).sort(
    (a, b) => b[1] - a[1],
  )) {
    console.log(`  ${cat}: ${count}`);
  }

  // By type
  const byType = vars.reduce(
    (acc, v) => {
      acc[v.type] = (acc[v.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  console.log("\nVariables by Zod type:");
  for (const [type, count] of Object.entries(byType).sort(
    (a, b) => b[1] - a[1],
  )) {
    console.log(`  ${type}: ${count}`);
  }

  // Optional vs required
  const optional = vars.filter((v) => v.optional).length;
  const required = vars.length - optional;

  console.log(`\nOptional: ${optional}, Required: ${required}`);
  console.log(`Total: ${vars.length} variables\n`);
}

// Export capabilities
function generateTypeScriptInterface(vars: VariableInfo[]) {
  console.log("🔧 Generated TypeScript Interface:\n");
  console.log("interface GitHubActionsEnvironment {");

  vars
    .sort((a, b) => a.category.localeCompare(b.category))
    .forEach((v) => {
      console.log(`  /** ${v.description} */`);
      const optionalMarker = v.optional ? "?" : "";
      let type = "string";

      if (v.enum) {
        type = v.enum.map((e) => `"${e}"`).join(" | ");
      } else if (v.type === "ZodNumber" || v.name.includes("_ID")) {
        type = "number";
      } else if (
        v.type === "ZodBoolean" ||
        v.name === "CI" ||
        v.name === "GITHUB_ACTIONS"
      ) {
        type = "boolean";
      }

      console.log(`  ${v.name}${optionalMarker}: ${type};`);
      console.log();
    });

  console.log("}\n");
}

// Generate JSON Schema (useful for external tools)
function generateJsonSchemaStub(vars: VariableInfo[]) {
  const properties: Record<string, any> = {};

  vars.forEach((v) => {
    properties[v.name] = {
      type: v.enum ? "string" : "string",
      title: v.title,
      description: v.description,
      examples: [v.example],
      category: v.category,
    };

    if (v.enum) {
      properties[v.name].enum = v.enum;
    }
  });

  return {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties,
    required: vars.filter((v) => !v.optional).map((v) => v.name),
  };
}

// Run examples
const variables = extractVariableInfo();

console.log("=".repeat(70));
console.log("GitHub Actions Schema Explorer");
console.log("=".repeat(70));
console.log();

showStatistics(variables);
generateTypeScriptInterface(variables.slice(0, 5)); // Show first 5 for demo

console.log("📄 JSON Schema (stub):");
const jsonSchema = generateJsonSchemaStub(variables.slice(0, 3));
console.log(`${JSON.stringify(jsonSchema, null, 2).slice(0, 500)}...\n`);

console.log("💡 Use metadata for:");
console.log("  ✓ IDE extensions");
console.log("  ✓ Documentation sites");
console.log("  ✓ Config validators");
console.log("  ✓ OpenAPI spec generation");
console.log("  ✓ GraphQL schema generation");
