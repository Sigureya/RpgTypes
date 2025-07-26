import { defineConfig } from "vitest/config";
import path from "path";
import { alias } from "./viteAlias.mts";
declare const __dirname: string;

export default defineConfig({
  test: {
    environment: "node", // テスト環境を指定 (Node.js環境)
    include: ["src/**/*.test.ts"], // テスト対象ファイルを指定
    coverage: {
      //      provider: "c8", // カバレッジ計測を有効化
      reporter: ["text", "html"], // レポート形式
    },
  },
  resolve: {
    alias: alias,
  },
});
