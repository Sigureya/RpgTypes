import { describe, test, expect } from "vitest";
import { parsePlugin } from "./parse";
import type { ParsedPlugin, PluginParamTokens } from "./types";

describe("parsePlugin", () => {
  describe("structs", () => {
    const tokens: string[] = [
      `/*~struct~TypeName:`,
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
    test("", () => {
      expect(result.commands).toEqual([]);
      expect(result.params).toEqual([]);
    });
  });
});
