import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/index.ts", // ライブラリのエントリポイント
      name: "RpgTypes", // ライブラリの名前（UMD形式用）
      fileName: (format) => `rpgtypes.${format}.js`, // 出力ファイル名
      formats: ["es", "cjs", "umd"], // 出力形式
    },
    rollupOptions: {
      external: [], // 外部依存関係を適切に設定
    },
    sourcemap: true, // ソースマップの生成
    outDir: "dist", // 出力先ディレクトリ
    emptyOutDir: true, // 出力先をビルド前にクリア
  },
  plugins: [
    dts({
      include: ["src/**/*.ts"], // 型定義を生成する対象
      exclude: ["src/**/*.test.ts"], // 型定義生成からテストコードを除外
      insertTypesEntry: true, // 型ファイルへのエントリを追加
    }),
  ],
});
