import { describe, test, expect } from "vitest";
import { parsePlugin } from "./parse";
import type { PluginParamTokens, StructParseState } from "./types";

describe.skip("parsePlugin", () => {
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
      expect(result.commands).toEqual([]);
    });
    test("params is empty", () => {
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
      expect(result.params).toEqual(expected);
    });
    test("structs is defined", () => {
      const struct: StructParseState = {
        name: "Person",
        params: [
          {
            name: "name",
            attr: { kind: "string", default: "bob", desc: "This is the name" },
          },
          {
            name: "age",
            attr: { kind: "number", default: "20" },
          },
        ],
      };
      expect(result.structs).toEqual([struct]);
    });
  });
});
