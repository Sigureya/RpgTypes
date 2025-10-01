import { describe, test, expect } from "vitest";
import { parsePlugin } from "./parse";
import type { ParsedPlugin, PluginCommandTokens } from "./types";

describe("parsePlugin", () => {
  test("should parse a command with arguments correctly", () => {
    const mockTexts: string[] = [
      "/*:",
      "@command save",
      "@text writeSave",
      "@desc write Save File",
      "@arg arg1",
      "@text arg1 text",
      "@type number",
      "@default 123",

      "@arg arg2",
      "@text text2",
      "@type string",
      "@default abc",
      "*/",
    ];
    const result: ParsedPlugin = parsePlugin(mockTexts.join("\n"));
    const expected: PluginCommandTokens = {
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
            text: "text2",
          },
        },
      ],
    };
    expect(result.commands).toEqual([expected]);
  });
  test("should parse multiple commands correctly", () => {
    const mockTexts: string[] = [
      "/*:",
      "@command save",
      "@text writeSave",
      "@desc write Save File",
      "@arg arg1",
      "@type number",
      "@default 123",

      "@command load",
      "@text readSave",
      "@desc read Save File",
      "@arg arg2",
      "@type string",
      "@default abc",
      "*/",
    ];
    const result: ParsedPlugin = parsePlugin(mockTexts.join("\n"));
    const expected: PluginCommandTokens[] = [
      {
        command: "save",
        text: "writeSave",
        desc: "write Save File",
        args: [
          {
            name: "arg1",
            attr: {
              kind: "number",
              default: "123",
            },
          },
        ],
      },
      {
        command: "load",
        text: "readSave",
        desc: "read Save File",
        args: [
          {
            name: "arg2",
            attr: {
              kind: "string",
              default: "abc",
            },
          },
        ],
      },
    ];
    expect(result.commands).toEqual(expected);
  });
  test("command name duplicate", () => {
    const mockTexts: string[] = [
      "/*:",
      "@command save",
      "@text writeSave",
      "@desc write Save File",
      "@arg arg1",
      "@type number",
      "@default 123",

      "@command save",
      "@text readSave",
      "@desc read Save File",
      "@arg arg2",
      "@type string",
      "@default abc",
      "*/",
    ];
    const result: ParsedPlugin = parsePlugin(mockTexts.join("\n"));
    const expected: PluginCommandTokens[] = [
      {
        command: "save",
        text: "writeSave",
        desc: "write Save File",
        args: [
          {
            name: "arg1",
            attr: {
              kind: "number",
              default: "123",
            },
          },
        ],
      },
    ];
    expect(result.commands).toEqual(expected);
  });
});
