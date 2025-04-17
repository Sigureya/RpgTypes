import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

declare const __dirname: string;

export default defineConfig({
  build: {
    outDir: "./dist",
    lib: {
      entry: "src/index.ts",
      name: "namedItemSource",
      fileName: (format) => `namedItemSource.${format}.js`,
      formats: ["es", "cjs"],
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@RpgTypes/schema": path.resolve(__dirname, "../schema/src"),
    },
  },
  plugins: [
    dts({
      outDir: "./dist",
      exclude: ["src/**/*.test.ts"],
    }),
  ],
});
