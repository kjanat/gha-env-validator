/**
 * Safe validation example - validation without throwing exceptions
 */

import {
  createEnvSchema,
  safeValidateCustomEnv,
  safeValidateEnv,
  z,
} from "@kjanat/gha-env-validator";

console.log("🔍 Safe Validation Examples\n");

// Example 1: Safe validation of default GitHub Actions vars
console.log("1️⃣  Validating default GitHub Actions environment...");
const defaultResult = safeValidateEnv();

if (defaultResult.success) {
  console.log("  ✅ Validation passed!");
  console.log("  Repository:", defaultResult.data.GITHUB_REPOSITORY);
  console.log("  SHA:", defaultResult.data.GITHUB_SHA);
} else {
  console.error("  ❌ Validation failed:");
  console.error("  Issues:", defaultResult.error.issues);
  process.exit(1);
}

// Example 2: Safe validation with custom schema
console.log("\n2️⃣  Validating custom environment variables...");
const customSchema = createEnvSchema({
  API_KEY: z.string().min(10, "API_KEY must be at least 10 characters"),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

const customResult = safeValidateCustomEnv(customSchema);

if (customResult.success) {
  console.log("  ✅ Custom validation passed!");
  console.log("  API Key length:", customResult.data.API_KEY?.length);
  console.log("  Environment:", customResult.data.NODE_ENV);
} else {
  console.error("  ❌ Custom validation failed:");

  // Formatted error output
  const formatted = customResult.error.format();
  console.error("  Formatted errors:", JSON.stringify(formatted, null, 2));

  // Individual issues
  customResult.error.issues.forEach((issue) => {
    console.error(`  - ${issue.path.join(".")}: ${issue.message}`);
  });
}

// Example 3: Graceful degradation pattern
console.log("\n3️⃣  Graceful degradation pattern...");
const result = safeValidateEnv();

if (result.success) {
  console.log("  ✅ Using validated environment");
  const env = result.data;
  // Use fully validated env
} else {
  console.log("  ⚠️  Using fallback configuration");
  // Fall back to default values or alternative config
  const env = {
    GITHUB_SHA: process.env.GITHUB_SHA || "unknown",
    GITHUB_REPOSITORY: process.env.GITHUB_REPOSITORY || "unknown/unknown",
    // ... other fallbacks
  };
}

console.log("\n✨ Safe validation complete!");
