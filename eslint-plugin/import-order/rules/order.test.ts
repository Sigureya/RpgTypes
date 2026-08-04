import { describe, it } from "vitest";
import { RuleTester } from "eslint";
import { orderRule } from "./order";

describe("order rule", () => {
  it("sorts imports and exports alphabetically and supports prioritized prefixes", () => {
    const ruleTester = new RuleTester({
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
    });

    ruleTester.run("order", orderRule, {
      valid: [
        {
          code: "import {  } from 'a';\nimport { b } from 'b';",
          options: [{ order: "asc" }],
        },
        {
          code: "import { test } from 'vitest';\nimport { a } from 'a';",
          options: [{ priority: ["vitest"] }],
        },
      ],
      invalid: [
        {
          code: "import { y } from 'b';\nimport { x } from 'a';",
          output: "import { x } from 'a';\nimport { y } from 'b';",
          options: [{ order: "asc" }],
          errors: [{ messageId: "incorrectOrder" }],
        },
        {
          code: "import { a } from 'a';\nimport { test } from 'vitest';",
          output: "import { test } from 'vitest';\nimport { a } from 'a';",
          options: [{ priority: ["vitest"] }],
          errors: [{ messageId: "incorrectOrder" }],
        },
      ],
    });
  });
});
