/**
 * Form/UI Builder Example
 *
 * Uses schema metadata to generate form field configurations
 * for building UIs that configure GitHub Actions workflows.
 */

import { createEnvSchema, z } from "@kjanat/gha-env-validator";

// Example: Build a deployment configuration form
const deploymentSchema = createEnvSchema({
  DEPLOY_ENV: z.enum(["staging", "production"]).meta({
    id: "DEPLOY_ENV",
    title: "Deployment Environment",
    description: "Target environment for deployment",
    category: "deployment",
    example: "production",
  }),

  API_KEY: z.string().min(1).meta({
    id: "API_KEY",
    title: "API Key",
    description: "Secret API key for authentication",
    category: "secrets",
    example: "sk_prod_...",
    sensitive: true, // Custom metadata field
  }),

  MAX_RETRIES: z.string().transform(Number).meta({
    id: "MAX_RETRIES",
    title: "Maximum Retries",
    description: "Number of retry attempts for failed operations",
    category: "deployment",
    example: "3",
    min: 0,
    max: 10,
  }),
});

// Generate form configuration from metadata
interface FormField {
  name: string;
  label: string;
  description: string;
  type: "text" | "select" | "number" | "password";
  required: boolean;
  options?: string[];
  example?: string;
  validation?: {
    min?: number;
    max?: number;
  };
}

const formFields: FormField[] = [];

for (const [name, schema] of Object.entries(deploymentSchema.shape)) {
  const meta = (schema as any)._zod?.meta || {};
  const zodType = (schema as any)._zod?.type;

  // Determine field type
  let fieldType: FormField["type"] = "text";
  let options: string[] | undefined;

  if (meta.sensitive) {
    fieldType = "password";
  } else if (zodType === "ZodEnum") {
    fieldType = "select";
    options = (schema as any)._zod?.values;
  } else if (
    name.includes("RETRIES") ||
    name.includes("NUMBER") ||
    name.includes("ID")
  ) {
    fieldType = "number";
  }

  formFields.push({
    name,
    label: meta.title || name,
    description: meta.description || "",
    type: fieldType,
    required: !(schema as any).isOptional(),
    options,
    example: meta.example,
    validation: {
      min: meta.min,
      max: meta.max,
    },
  });
}

// Output form configuration (could be used by React, Vue, etc.)
console.log("# Auto-generated Form Configuration\n");
console.log(JSON.stringify(formFields, null, 2));

console.log("\n# React Form Example:");
console.log(`
export function DeploymentForm() {
  return (
    <form>
      ${formFields
        .map(
          (field) => `
      <div>
        <label htmlFor="${field.name}">${field.label}</label>
        <${field.type === "select" ? "select" : "input"}
          id="${field.name}"
          name="${field.name}"
          type="${field.type}"
          ${field.required ? "required" : ""}
          placeholder="${field.example || ""}"
        ${field.type === "select" ? ">" : "/>"}
        ${
          field.type === "select"
            ? `
          ${field.options?.map((opt) => `<option value="${opt}">${opt}</option>`).join("\n          ")}
        </select>`
            : ""
        }
        <small>${field.description}</small>
      </div>`,
        )
        .join("\n")}
    </form>
  );
}
`);
