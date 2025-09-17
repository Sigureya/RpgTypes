import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import fn from "eslint-plugin-functional";
import importPlugin from "eslint-plugin-import";
import sortExports from "eslint-plugin-sort-exports";
// import禁止のグループ。長いので定数としておくことで分離した
const noimportGroups = [
  "node:*",
  "fs",
  "path",
  "os",
  "child_process",
  "cluster",
  "crypto",
  "dgram",
  "dns",
  "domain",
  //  "events",
  "http",
  "https",
  "net",
  "perf_hooks",
  //  "process",
  "querystring",
  "readline",
  "repl",
  "stream",
  "string_decoder",
  "timers",
  "tls",
  "tty",
  "url",
  "util",
  "v8",
  "vm",
  "zlib",
];

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
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-empty-object-type": "off",
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
      "@typescript-eslint/restrict-plus-operands": "error",
      "spaced-comment": "error",

      // importルール
      "import/no-cycle": "error",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
        },
      ],
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
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            // vitest関連のimportを.test.ts以外で禁止
            {
              group: ["vitest", "vitest/*", "vitest/dist*", "vitest/**"],
              message: "テスト以外でvitestのimportは禁止です",
            },
            // node.js関連のimportを禁止
            {
              group: noimportGroups,
              message:
                "Node.js組み込みモジュールのimportは禁止です（型importはOK）",
            },
          ],
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
      "no-restricted-imports": "off",
      "no-undef": "off",
      "@typescript-eslint/no-require-imports": "off",
    },
  },
  {
    files: ["src/rmmzRuntime/**/*.ts", "src/rmmzMock/**/*.ts"],
    rules: {
      "@functional/no-return-void": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
  {
    files: ["src/**/*index.ts", "src/**/*.d.ts"],
    rules: { "sort-exports/sort-exports": ["error", { sortDir: "asc" }] },
  },
];
