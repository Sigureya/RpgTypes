import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";
declare const __dirname: string;
export default defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: "src/index.ts",
      name: "namedItemSource",
      fileName: (format) => `namedItemSource.${format}.js`,
      formats: ["es", "cjs"],
    },
    sourcemap: true,
    // rollupOptions: {
    //   external: ["ts-morph", "@rmmz-annotation/schema"], // 依存関係を外部モジュールとして扱う
    // },
  },

  resolve: {
    external: ["perf_hooks"],
    alias: {
      "@RpgTypes/schema": path.resolve(__dirname, "../schema/src"),
    },
  },
  plugins: [
    dts({
      exclude: ["src/**/*.test.ts"], // 型定義生成からテストコードを除外
    }),
  ],
});
