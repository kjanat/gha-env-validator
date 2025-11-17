/**
 * Enhanced Validation Reporter Example
 *
 * Uses schema metadata to provide rich, contextual error messages
 * with helpful suggestions based on variable categories and examples.
 */

import {
  createEnvSchema,
  getEnumValues,
  getSchemaMetadata,
  safeValidateCustomEnv,
  z
} from "@kjanat/gha-env-validator";
import type { ZodType } from "zod";

// Create schema with metadata
const deploySchema = createEnvSchema({
  API_URL: z.string().url().meta({
    id: "API_URL",
    title: "API Endpoint",
    description: "Base URL for API requests",
    category: "api",
    example: "https://api.example.com"
  }),

  ENVIRONMENT: z.enum(["dev", "staging", "prod"]).meta({
    id: "ENVIRONMENT",
    title: "Environment",
    description: "Deployment target environment",
    category: "deployment",
    example: "staging"
  }),

  PORT: z.string().transform(Number).meta({
    id: "PORT",
    title: "Server Port",
    description: "Port number for the server",
    category: "deployment",
    example: "3000"
  })
});

// Simulate validation with missing/invalid vars
const testEnv = {
  // Missing API_URL
  ENVIRONMENT: "invalid-env",
  PORT: "not-a-number"
  // ... GitHub Actions vars would be here in real scenario
};

const result = safeValidateCustomEnv(deploySchema, {
  env: testEnv as Record<string, string>
});

if (!result.success) {
  console.log("❌ Validation Failed\n");
  console.log("The following environment variables have issues:\n");

  // Enhanced error reporting using metadata
  for (const issue of result.error.issues) {
    const fieldName = issue.path[0] as string;
    const shapeRecord = deploySchema.shape as Record<string, ZodType>;
    const schema = shapeRecord[fieldName];
    const meta = schema ? getSchemaMetadata(schema) : {};

    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`\n🔴 ${fieldName}`);

    if (meta.title) {
      console.log(`   ${meta.title}`);
    }

    console.log(`\n   Issue: ${issue.message}`);

    if (meta.description) {
      console.log(`   About: ${meta.description}`);
    }

    if (meta.example) {
      console.log(`\n   💡 Example: ${meta.example}`);
    }

    if (meta.category) {
      console.log(`   📁 Category: ${meta.category}`);
    }

    // Provide context-aware help
    if (issue.code === "invalid_type" && meta.example) {
      console.log(`\n   ✨ Try setting: export ${fieldName}="${meta.example}"`);
    }

    if (issue.code === "invalid_value" && schema) {
      const enumValues = getEnumValues(schema);
      if (enumValues) {
        console.log(`\n   ✅ Valid options: ${enumValues.join(", ")}`);
      }
    }

    console.log();
  }

  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

  // Summary by category
  const errorsByCategory = new Map<string, number>();

  for (const issue of result.error.issues) {
    const fieldName = issue.path[0] as string;
    const shapeRecord = deploySchema.shape as Record<string, ZodType>;
    const schema = shapeRecord[fieldName];
    const meta = schema ? getSchemaMetadata(schema) : {};
    const category = meta.category || "unknown";
    errorsByCategory.set(category, (errorsByCategory.get(category) || 0) + 1);
  }

  console.log("📊 Errors by category:");
  for (const [category, count] of errorsByCategory) {
    console.log(`   ${category}: ${count} issue(s)`);
  }

  console.log("\n💡 Fix the issues above and try again.");
}
