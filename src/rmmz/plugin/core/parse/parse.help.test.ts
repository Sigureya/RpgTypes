import { describe, test, expect } from "vitest";
import { parsePlugin } from "./parse";
import type {
  ParsedPlugin,
  PluginCommandTokens,
  PluginParamTokens,
} from "./types";

const mockTexts: string[] = [
  "/*:",
  "@command save",
  "@arg arg1",
  "@type number",
  "@default 123",

  "@param gameTitle",
  "@type string",
  "@default 'My Game'",

  "@help",
  "aaaa",
  "bbbb",
  "cccc",

  "@param data",
  "@type number",
  "@default 123",
  "*/",
];

describe("parsePlugin", () => {
  test("should parse plugin annotations correctly", () => {
    const result: ParsedPlugin = parsePlugin(mockTexts.join("\n"));
    expect(result.meta).toBeDefined();
    expect(result.helpLines).toEqual(["aaaa", "bbbb", "cccc"]);
  });

  test("should parse parameters correctly", () => {
    const result: ParsedPlugin = parsePlugin(mockTexts.join("\n"));

    const expected: PluginParamTokens[] = [
      {
        name: "gameTitle",
        attr: {
          kind: "string",
          default: "'My Game'",
        },
      },
      {
        name: "data",
        attr: {
          kind: "number",
          default: "123",
        },
      },
    ];
    expect(result.params).toEqual(expected);
  });
  test("should parse commands correctly", () => {
    const result: ParsedPlugin = parsePlugin(mockTexts.join("\n"));

    const expected: PluginCommandTokens = {
      command: "save",
      args: [
        {
          name: "arg1",
          attr: {
            kind: "number",
            default: "123",
          },
        },
      ],
    };
    expect(result.commands).toEqual([expected]);
  });
});
