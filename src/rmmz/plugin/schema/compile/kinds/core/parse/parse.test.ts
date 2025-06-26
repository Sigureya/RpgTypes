import { test, expect, describe } from "vitest";
import { parsePlugin } from "./parse";
import type { ParsingResult } from "./types/result";
import type { ParamToken, PluginCommandTokens } from "./types/token";

const mockTexts: string[] = [
  "@param bool",
  "@type boolean",
  "@text autoBattle",
  "@default false",
  "@on enabled",
  "@off disabled",

  "@param num",
  "@type number",
  "@default 0",
  "@min 0",
  "@max 100",

  "@command save",
  "@text writeSave",
  "@desc write Save File",
  "@arg arg1",
  "@type number",
  "@default 123",
  "@arg arg2",
  "@type string",
  "@default abc",

  "@command load",
  "@arg arg1",
  "@text arg1 text",
  "@desc load Save File",
  "@type number",
  "@default 456",
  "@arg arg2",
  "@type string",
  "@default abc",
];

describe("parsePlugin", () => {
  const result: ParsingResult = parsePlugin(mockTexts.join("\n"));
  test("should parse plugin annotations correctly", () => {
    expect(result.meta).toBeDefined();
  });
  test("should parse parameters correctly", () => {
    const expected: ParamToken[] = [
      {
        param: "bool",
        attributes: [
          { keyword: "type", value: "boolean" },
          { keyword: "text", value: "autoBattle" },
          { keyword: "default", value: "false" },
          { keyword: "on", value: "enabled" },
          { keyword: "off", value: "disabled" },
        ],
      },
      {
        param: "num",
        attributes: [
          { keyword: "type", value: "number" },
          { keyword: "default", value: "0" },
          { keyword: "min", value: "0" },
          { keyword: "max", value: "100" },
        ],
      },
    ];
    expect(result.params).toEqual(expected);
  });
  test("should parse commands correctly", () => {
    const expected: PluginCommandTokens[] = [
      {
        command: "save",
        text: "writeSave",
        desc: "write Save File",
        args: [
          {
            arg: "arg1",
            attributes: [
              { keyword: "type", value: "number" },
              { keyword: "default", value: "123" },
            ],
          },
          {
            arg: "arg2",
            attributes: [
              { keyword: "type", value: "string" },
              { keyword: "default", value: "abc" },
            ],
          },
        ],
      },
      {
        command: "load",
        args: [
          {
            arg: "arg1",
            attributes: [
              { keyword: "text", value: "arg1 text" },
              { keyword: "desc", value: "load Save File" },
              { keyword: "type", value: "number" },
              { keyword: "default", value: "456" },
            ],
          },
          {
            arg: "arg2",
            attributes: [
              { keyword: "type", value: "string" },
              { keyword: "default", value: "abc" },
            ],
          },
        ],
      },
    ];
    expect(result.commands).toEqual(expected);
  });
});
