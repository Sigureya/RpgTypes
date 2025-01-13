module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "custom-rules"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "spaced-comment": "error",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
      },
    ],
  },
  overrides: [
    {
      files: ["src/api/server/**/*.{js,ts}"],
      rules: {
        "custom-rules/api-imports": "error",
      },
    },
  ],
};
