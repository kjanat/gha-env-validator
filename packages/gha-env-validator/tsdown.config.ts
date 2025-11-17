import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist",
  platform: "node",
  target: "node18",
  dts: true,
  external: ["zod"],
  clean: true,
  sourcemap: false,
  minify: false,
  treeshake: true,
  fixedExtension: true
});
