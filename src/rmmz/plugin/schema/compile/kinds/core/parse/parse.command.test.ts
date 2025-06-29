import { describe, test, expect } from "vitest";
import type { ParsedPlugin, PluginCommand, PluginParamTokens } from "./parseV2";
import { parsePlugin } from "./parseV2";

describe("parsePlugin", () => {
  test("", () => {
    const mockTexts: string[] = [
      "@command save",
      "@text writeSave",
      "@desc write Save File",
      "@arg arg1",
      "@text arg1 text",
      "@type number",
      "@default 123",

      "@arg arg2",
      "@type string",
      "@default abc",
    ];
    const result: ParsedPlugin = parsePlugin(mockTexts.join("\n"));
    const expected: PluginCommand = {
      command: "save",
      text: "writeSave",
      desc: "write Save File",
      args: [
        {
          name: "arg1",
          attr: {
            kind: "number",
            text: "arg1 text",
            default: "123",
          },
        },
        {
          name: "arg2",
          attr: {
            kind: "string",
            default: "abc",
          },
        },
      ],
    };
    expect(result.commands).toEqual([expected]);
  });
});
