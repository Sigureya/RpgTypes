import { describe, it } from "vitest";
import { RuleTester } from "eslint";
import { blankLinesRule } from "./blank-lines";

describe("blank-lines rule", () => {
  it("enforces configured blank lines between imports and exports", () => {
    const ruleTester = new RuleTester({
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    });

    ruleTester.run("blank-lines", blankLinesRule, {
      valid: [
        {
          code: "import a from 'a';\n\nexport { a };",
          options: [{ importExport: 1 }],
        },
        {
          code: "import a from 'a';\nimport b from 'b';",
          options: [{ importImport: 0 }],
        },
        {
          code: "export const a = 1;\nexport const b = 2;",
          options: [{ exportExport: 0 }],
        },
      ],
      invalid: [
        {
          code: "import a from 'a';\nexport { a };",
          output: "import a from 'a';\n\nexport { a };",
          options: [{ importExport: 1 }],
          errors: [{ messageId: "incorrect" }],
        },
        {
          code: "import a from 'a';\nimport b from 'b';",
          output: "import a from 'a';\n\nimport b from 'b';",
          options: [{ importImport: 1 }],
          errors: [{ messageId: "incorrect" }],
        },
      ],
    });
  });
});
