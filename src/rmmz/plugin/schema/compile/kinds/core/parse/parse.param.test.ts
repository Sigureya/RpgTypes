import { describe, test, expect } from "vitest";
import type { ParsedPlugin, PluginParamTokens } from "./parseV2";
import { parsePlugin } from "./parseV2";

describe("parsePlugin", () => {
  test("should parse parameters correctly", () => {
    const mockTexts: string[] = [
      "@param data",
      "@type number",
      "@min 0",
      "@max 200",
      "@default 123",
    ];
    const result: ParsedPlugin = parsePlugin(mockTexts.join("\n"));

    const expected: PluginParamTokens[] = [
      {
        name: "data",
        attr: {
          kind: "number",
          min: "0",
          max: "200",
          default: "123",
        },
      },
    ];
    expect(result.params).toEqual(expected);
  });
});
