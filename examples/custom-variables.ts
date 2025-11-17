/**
 * Custom variables example - extends default schema with custom env vars
 */

import { createEnvSchema, validateCustomEnv, z } from "@kjanat/gha-env-validator";

// Define your custom environment variables
const schema = createEnvSchema({
  // API Configuration
  API_KEY: z.string().min(1, "API_KEY is required"),
  API_URL: z.string().url("API_URL must be a valid URL"),

  // Environment settings
  NODE_ENV: z.enum(["development", "production", "test"]),

  // Numeric configs (with transformation)
  PORT: z.string().transform(Number),
  MAX_RETRIES: z.string().transform(Number),
  TIMEOUT_MS: z.string().transform(Number),

  // Boolean flags (with transformation)
  DEBUG: z.string().transform((s) => s === "true"),
  DRY_RUN: z.string().transform((s) => s === "true"),

  // Optional variables
  SENTRY_DSN: z.string().url().optional(),
  LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]).optional(),
});

// Validate environment
const env = validateCustomEnv(schema);

console.log("🔧 Custom Environment Configuration:");
console.log("  API URL:", env.API_URL);
console.log("  Environment:", env.NODE_ENV);
console.log("  Port:", env.PORT, "(type:", typeof env.PORT + ")");
console.log("  Debug mode:", env.DEBUG, "(type:", typeof env.DEBUG + ")");
console.log("  Max retries:", env.MAX_RETRIES);
console.log("  Timeout:", env.TIMEOUT_MS, "ms");

console.log("\n🎯 GitHub Actions context:");
console.log("  Repository:", env.GITHUB_REPOSITORY);
console.log("  SHA:", env.GITHUB_SHA);
console.log("  Runner:", env.RUNNER_OS);
