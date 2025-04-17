import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    outDir: "./dist",
    lib: {
      entry: "src/index.ts",
      name: "Schema",
      fileName: (format) => `schema.${format}.js`,
      formats: ["es", "cjs"],
    },
    sourcemap: true,
  },
  plugins: [
    dts({
      exclude: ["src/**/*.test.ts"],
    }),
  ],
});
