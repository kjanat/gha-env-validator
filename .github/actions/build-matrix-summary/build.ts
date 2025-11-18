Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  target: "node",
  minify: {
    whitespace: false,
    identifiers: false,
    syntax: false
  },
  external: ["zod"],
  naming: "[dir]/[name].mjs"
});
