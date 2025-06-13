import { defineConfig } from "vitest/config";
import path from "path";
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
    alias: {
      "@RpgTypes/eventCommand": path.resolve(
        __dirname,
        "src/rmmz/eventCommand"
      ),
      "@RpgTypes/rpg": path.resolve(__dirname, "./src/rmmz/rpg"),

      "@RpgTypes/system": path.resolve(__dirname, "./src/rmmz/system"),
      "@RpgTypes": path.resolve(__dirname, "./src/libs"),
      src: path.resolve(__dirname, "./src/libs"),
    },
  },
});
