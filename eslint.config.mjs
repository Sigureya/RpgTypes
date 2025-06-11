import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import fn from "eslint-plugin-functional";
import importPlugin from "eslint-plugin-import";
import sortExports from "eslint-plugin-sort-exports";

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
      import: importPlugin,
      "sort-exports": sortExports,
    },
    rules: {
      "no-undef": "error",
      "no-console": "warn",
      eqeqeq: "error",
      curly: "error",
      "no-dupe-else-if": "error",
      "no-duplicate-case": "error",
      // 純粋関数強制Rule
      "@functional/no-return-void": "warn",
      "@functional/no-let": "error",
      "@functional/no-loop-statements": "error",
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
      "@typescript-eslint/restrict-plus-operands": "error",
      "spaced-comment": "error",

      // importルール
      "import/no-cycle": "error",
      "import/order": [
        "error",
        {
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "never",
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          pathGroups: [
            {
              pattern: "vitest",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["vitest"],
        },
      ],
    },
  },
  {
    files: ["src/**/*.test.ts"],

    rules: {
      // テストファイルに特有のルール
      "@typescript-eslint/no-explicit-any": "off", // テストではanyを許可
      "@functional/no-return-void": "off",
    },
  },
  {
    files: ["src/**/*index.ts"],
    rules: { "sort-exports/sort-exports": ["error", { sortDir: "asc" }] },
  },
];
