import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import fn from "eslint-plugin-functional";

export default [
  {
    files: ["src/**/*.ts"],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json", // 型情報を提供するためにプロジェクトを指定
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "@functional": fn,
    },
    rules: {
      // ESLintの推奨ルールセットを手動で適用
      "no-unused-vars": "warn",
      "no-undef": "error",
      "no-console": "warn",
      eqeqeq: "error",
      curly: "error",

      // 純粋関数強制Rule
      //      "@functional/no-return-void": "warn",
      "@functional/no-let": "error",

      // その他のルール
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
        },
      ],
      "spaced-comment": "error",
    },
  },
];
