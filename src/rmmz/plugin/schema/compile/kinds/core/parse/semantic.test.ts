import { test, expect } from "vitest";
import { sliceToken, pluginCommandContext } from "./semantic";
import type { ParsingContext, PluginCommandTokens, Token } from "./types/token";

const mockParamBool: ParsingContext = {
  head: { keyword: "param", value: "bool" },
  tokens: [
    { keyword: "type", value: "boolean" },
    { keyword: "text", value: "autoBattle" },
    { keyword: "default", value: "false" },
    { keyword: "on", value: "enabled" },
    { keyword: "off", value: "disabled" },
  ],
};

const mockParamNum: ParsingContext = {
  head: { keyword: "param", value: "num" },
  tokens: [
    { keyword: "type", value: "number" },
    { keyword: "text", value: "autoBattle" },
    { keyword: "default", value: "0" },
    { keyword: "min", value: "0" },
    { keyword: "max", value: "100" },
  ],
};

const mockCommandSave = {
  head: { keyword: "command", value: "save" },
  tokens: [
    { keyword: "text", value: "writeSave" },
    { keyword: "desc", value: "write Save File" },
    { keyword: "arg", value: "arg1" },
    { keyword: "type", value: "number" },
    { keyword: "default", value: "123" },
    { keyword: "arg", value: "arg2" },
    { keyword: "type", value: "string" },
    { keyword: "default", value: "abc" },
  ],
} as const satisfies ParsingContext;

test("sliceToken", () => {
  const expected: ParsingContext[] = [
    mockParamBool,
    mockParamNum,
    mockCommandSave,
  ];
  const src: Token[] = expected.flatMap((e) => [e.head, ...e.tokens]);

  const result: ParsingContext[] = sliceToken(src);
  expect(result).toEqual(expected);
});

test("pluginCommandContext", () => {
  const expected: PluginCommandTokens = {
    command: "save",
    desc: "write Save File",
    text: "writeSave",
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
  };
  const result: PluginCommandTokens = pluginCommandContext(mockCommandSave);
  expect(result).toEqual(expected);
});
