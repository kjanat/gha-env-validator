import { defineConfig } from "vitepress";

export default defineConfig({
  title: "GHA Env Validator",
  description: "Type-safe GitHub Actions environment variable validation",
  base: "/gha-env-validator/",

  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/getting-started" },
      { text: "API", link: "/api/" },
      { text: "Examples", link: "/guide/examples" },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Introduction", link: "/guide/getting-started" },
            { text: "Installation", link: "/guide/installation" },
            { text: "Quick Start", link: "/guide/quick-start" },
          ],
        },
        {
          text: "Features",
          items: [
            { text: "Environment Validation", link: "/guide/validation" },
            { text: "Action Inputs", link: "/guide/inputs" },
            { text: "Workflow Commands", link: "/guide/workflow-commands" },
            { text: "Context Utilities", link: "/guide/context" },
            { text: "Metadata", link: "/guide/metadata" },
          ],
        },
        {
          text: "Examples",
          link: "/guide/examples",
        },
      ],
      "/api/": [
        {
          text: "API Reference",
          items: [
            { text: "Overview", link: "/api/" },
            { text: "Validation", link: "/api/validation" },
            { text: "Schemas", link: "/api/schemas" },
            { text: "Workflow Commands", link: "/api/workflow-commands" },
            { text: "Context", link: "/api/context" },
            { text: "Inputs", link: "/api/inputs" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/kjanat/gha-env-validator" },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 kjanat",
    },
  },

  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },
});
