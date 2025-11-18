#!/usr/bin/env node
import {
  createEnvSchema,
  safeValidateCustomEnv,
  safeValidateEnv
} from "@kjanat/gha-env-validator";
import { safeValidateInputs } from "@kjanat/gha-env-validator/inputs";
import {
  addJobSummary,
  endGroup,
  error as logError,
  maskValue,
  notice,
  setFailed,
  setOutput,
  startGroup
} from "@kjanat/gha-env-validator/workflow-commands";
import { z } from "zod";

/**
 * Input schema for validate-workflow-env action
 */
const InputSchemaShape = {
  "custom-schema": z.string().default(""),
  "strict-mode": z.boolean().default(false),
  "required-vars": z.array(z.string()).default([]),
  "mask-sensitive": z.boolean().default(true)
} as const;

const InputSchema = z.object(InputSchemaShape);
type ValidationInputs = z.infer<typeof InputSchema>;

/**
 * Sensitive environment variable patterns
 */
const SENSITIVE_PATTERNS = [
  /token/i,
  /secret/i,
  /password/i,
  /key/i,
  /credential/i,
  /auth/i
];

/**
 * Check if env var name appears sensitive
 */
function isSensitive(name: string): boolean {
  return SENSITIVE_PATTERNS.some((pattern) => pattern.test(name));
}

/**
 * Main execution function
 */
async function run(): Promise<void> {
  try {
    if (process.env.ACT === "true") {
      notice("ACT detected; skipping validate-workflow-env action.");
      return;
    }

    // Parse and validate inputs
    const inputResult = safeValidateInputs(InputSchemaShape);

    if (!inputResult.success) {
      setFailed(`Invalid inputs: ${inputResult.error.message}`);
      return;
    }

    const inputs = inputResult.data as ValidationInputs;

    startGroup("🔍 Validating GitHub Actions Environment");

    // Build custom schema if required vars specified
    const customSchema = inputs["required-vars"].length > 0
      ? buildCustomSchema(inputs["required-vars"])
      : null;

    // Perform validation
    const validationResult = customSchema
      ? (() => {
        notice("Validating with custom schema (extending GitHub defaults)");
        const extendedSchema = createEnvSchema(customSchema);
        return safeValidateCustomEnv(extendedSchema);
      })()
      : (() => {
        notice("Validating GitHub Actions default environment");
        return safeValidateEnv();
      })();

    endGroup();

    // Process validation results
    if (validationResult.success) {
      const envData = validationResult.data;
      const envCount = Object.keys(envData).length;

      notice(`✅ Environment validation successful (${envCount} variables)`);

      // Mask sensitive values if requested
      if (inputs["mask-sensitive"]) {
        maskSensitiveValues(envData);
      }

      // Create summary
      await createSuccessSummary(envData, inputs);

      // Set outputs
      setOutput("validation-status", "success");
      setOutput("env-count", envCount.toString());
    } else {
      const errors = validationResult.error.issues;

      logError(`❌ Environment validation failed with ${errors.length} errors`);

      // Log each error
      for (const err of errors) {
        const path = err.path.join(".");
        logError(`  ${path}: ${err.message}`);
      }

      // Create error summary
      await createErrorSummary(errors);

      // Set outputs
      setOutput("validation-status", "failed");
      setOutput("env-count", "0");

      setFailed(`Environment validation failed with ${errors.length} errors`);
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    logError(`Validation error: ${message}`);
    setFailed(message);
  }
}

/**
 * Build custom schema from required vars list
 */
function buildCustomSchema(
  requiredVars: string[]
): Record<string, z.ZodString> {
  const schemaShape: Record<string, z.ZodString> = {};

  for (const varName of requiredVars) {
    schemaShape[varName] = z
      .string()
      .min(1, `${varName} is required but not set`);
  }

  return schemaShape;
}

/**
 * Mask sensitive environment variable values
 */
function maskSensitiveValues(envData: Record<string, unknown>): void {
  startGroup("🔒 Masking Sensitive Values");

  let maskedCount = 0;

  for (const [key, value] of Object.entries(envData)) {
    if (isSensitive(key) && typeof value === "string" && value.length > 0) {
      maskValue(value);
      maskedCount++;
    }
  }

  notice(`Masked ${maskedCount} sensitive environment variables`);
  endGroup();
}

/**
 * Create success summary with environment details
 */
async function createSuccessSummary(
  envData: Record<string, unknown>,
  inputs: ValidationInputs
): Promise<void> {
  const envVars = Object.entries(envData);
  const totalCount = envVars.length;

  // Categorize variables
  const githubVars = envVars.filter(([key]) => key.startsWith("GITHUB_"));
  const runnerVars = envVars.filter(([key]) => key.startsWith("RUNNER_"));
  const customVars = envVars.filter(([key]) =>
    !key.startsWith("GITHUB_") && !key.startsWith("RUNNER_")
  );

  // Create summary sections
  let summary = `## ✅ Environment Validation Success\n\n`;
  summary += `**Total Variables:** ${totalCount}\n\n`;
  summary += `| Category | Count |\n`;
  summary += `|----------|-------|\n`;
  summary += `| GitHub Actions | ${githubVars.length} |\n`;
  summary += `| Runner | ${runnerVars.length} |\n`;
  summary += `| Custom | ${customVars.length} |\n`;

  // Add custom vars table if any
  if (inputs["required-vars"].length > 0) {
    summary += `\n### Required Custom Variables\n\n`;
    summary += `| Variable | Status |\n`;
    summary += `|----------|--------|\n`;

    for (const varName of inputs["required-vars"]) {
      const isSet = varName in envData;
      summary += `| \`${varName}\` | ${isSet ? "✅ Set" : "❌ Missing"} |\n`;
    }
  }

  // Add key GitHub vars
  summary += `\n### Key GitHub Variables\n\n`;
  summary += `| Variable | Value |\n`;
  summary += `|----------|-------|\n`;
  summary += `| Repository | \`${envData.GITHUB_REPOSITORY || "N/A"}\` |\n`;
  summary += `| Ref | \`${envData.GITHUB_REF || "N/A"}\` |\n`;
  summary += `| SHA | \`${envData.GITHUB_SHA || "N/A"}\` |\n`;
  summary += `| Actor | \`${envData.GITHUB_ACTOR || "N/A"}\` |\n`;
  summary += `| Workflow | \`${envData.GITHUB_WORKFLOW || "N/A"}\` |\n`;

  addJobSummary(summary);
}

/**
 * Create error summary with validation failures
 */
async function createErrorSummary(errors: z.ZodIssue[]): Promise<void> {
  let summary = `## ❌ Environment Validation Failed\n\n`;
  summary += `**Error Count:** ${errors.length}\n\n`;
  summary += `| Variable | Error |\n`;
  summary += `|----------|-------|\n`;

  for (const err of errors) {
    const path = err.path.join(".") || "unknown";
    summary += `| \`${path}\` | ${err.message} |\n`;
  }

  summary += `\n### Resolution\n\n`;
  summary +=
    `Check that all required environment variables are set correctly in your workflow.\n`;

  addJobSummary(summary);
}

// Execute main function
run();
