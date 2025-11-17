/**
 * Documentation Generator Example
 *
 * Uses schema metadata to auto-generate markdown documentation
 * for all GitHub Actions environment variables.
 */

import {
  getSchemaMetadata,
  githubActionsSchema,
  type ZodMetadata
} from "@kjanat/gha-env-validator";

// Group variables by category
const varsByCategory = new Map<
  string,
  Array<{ name: string; meta: ZodMetadata }>
>();

for (const [name, schema] of Object.entries(githubActionsSchema.shape)) {
  const meta = getSchemaMetadata(schema);
  const category = meta.category || "uncategorized";

  if (!varsByCategory.has(category)) {
    varsByCategory.set(category, []);
  }

  varsByCategory.get(category)?.push({ name, meta });
}

// Generate markdown documentation
console.log("# GitHub Actions Environment Variables Reference\n");
console.log("Auto-generated from schema metadata.\n");

// Sort categories alphabetically
const categories = Array.from(varsByCategory.keys()).sort();

for (const category of categories) {
  const vars = varsByCategory.get(category) || [];

  console.log(`## ${category.charAt(0).toUpperCase() + category.slice(1)}\n`);

  for (const { name, meta } of vars) {
    console.log(`### \`${name}\`\n`);

    if (meta.title) {
      console.log(`**${meta.title}**\n`);
    }

    if (meta.description) {
      console.log(`${meta.description}\n`);
    }

    if (meta.example) {
      console.log(`**Example:** \`${meta.example}\`\n`);
    }

    console.log("---\n");
  }
}

console.log("\n## Summary\n");
console
  .log(`Total variables: ${Object.keys(githubActionsSchema.shape).length}`);
console.log(`Categories: ${categories.length}`);
