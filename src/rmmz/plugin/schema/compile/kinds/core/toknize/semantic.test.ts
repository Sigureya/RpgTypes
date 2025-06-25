import { describe, test, expect } from "vitest";
import { sliceToken, pluginCommandContext } from "./semantic";
import type { Context2, PluginCommandTokens, Token } from "./types";

const mockParamBool: Context2 = {
  head: { keyword: "param", value: "bool" },
  tokens: [
    { keyword: "type", value: "boolean" },
    { keyword: "text", value: "autoBattle" },
    { keyword: "default", value: "false" },
    { keyword: "on", value: "enabled" },
    { keyword: "off", value: "disabled" },
  ],
};

const mockParamNum: Context2 = {
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
  ],
} as const satisfies Context2;

describe("sliceToken", () => {
  test("", () => {
    const expected: Context2[] = [mockParamBool, mockParamNum, mockCommandSave];
    const src: Token[] = expected.flatMap((e) => [e.head, ...e.tokens]);

    const result: Context2[] = sliceToken(src);
    expect(result).toEqual(expected);
  });
});
describe("", () => {
  test("pluginCommandContext", () => {
    const expected: PluginCommandTokens = {
      command: "save",
      desc: "write Save File",
      text: "writeSave",
      args: [
        {
          arg: "arg1",
          token: [
            {
              keyword: "type",
              value: "number",
            },
            {
              keyword: "default",
              value: "123",
            },
          ],
        },
      ],
    };
    const result: PluginCommandTokens = pluginCommandContext(mockCommandSave);
    expect(result).toEqual(expected);
  });
});
