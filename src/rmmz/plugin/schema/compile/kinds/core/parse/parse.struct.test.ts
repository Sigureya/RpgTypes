import { describe, test, expect } from "vitest";
import { parsePlugin } from "./parse";
import type { PluginParamTokens } from "./types";

describe("parsePlugin", () => {
  describe("structs", () => {
    const tokens: string[] = [
      "/*:",
      "@param num",
      "@type number",
      "@default 10",
      "",
      "@param person",
      "@type struct<Person>",
      "@desc This is a person",
      "*/",

      `/*~struct~Person:`,
      "@param name",
      "@desc This is the name",
      "@type string",
      "@default bob",
      "@param age",
      "@type number",
      "@default 20",
      `*/`,
    ];
    const result = parsePlugin(tokens.join("\n"));
    test("commands is empty", () => {
      const expected: PluginParamTokens[] = [
        {
          name: "num",
          attr: { kind: "number", default: "10" },
        },
        {
          name: "person",
          attr: {
            kind: "struct",
            struct: "Person",
            desc: "This is a person",
          },
        },
      ];
      expect(result.commands).toEqual(expected);
    });
    test("params is empty", () => {
      expect(result.params).toEqual([]);
    });
  });
});
