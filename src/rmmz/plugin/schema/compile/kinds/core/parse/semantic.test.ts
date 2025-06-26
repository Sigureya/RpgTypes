import { test, expect, describe } from "vitest";
import { parseTokenBlocks, type SliceResult } from "./semantic";
import type { ParsingContext, Token } from "./types/token";

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
const mockCommandLoad = {
  head: { keyword: "command", value: "load" },
  tokens: [
    { keyword: "arg", value: "arg1" },
    { keyword: "text", value: "arg1 text" },
    { keyword: "desc", value: "load Save File" },
    { keyword: "type", value: "number" },
    { keyword: "default", value: "123" },
    { keyword: "arg", value: "arg2" },
    { keyword: "type", value: "string" },
    { keyword: "default", value: "abc" },
  ],
} as const satisfies ParsingContext;

describe("parseTokenBlocks", () => {
  test("valid token parsing", () => {
    const src: Token[] = [
      mockCommandSave.head,
      ...mockCommandSave.tokens,
      mockCommandLoad.head,
      ...mockCommandLoad.tokens,
    ];
    const result: SliceResult = parseTokenBlocks(src);
    expect(result.commands).toEqual([mockCommandSave, mockCommandLoad]);
  });
  test("valid param parsing", () => {
    const src: Token[] = [
      mockParamBool.head,
      ...mockParamBool.tokens,
      mockParamNum.head,
      ...mockParamNum.tokens,
    ];
    const result: SliceResult = parseTokenBlocks(src);
    const expected = [mockParamBool, mockParamNum];
    expect(result.params).toEqual(expected satisfies typeof result.params);
  });
  test("mixed command and param parsing", () => {
    const src: Token[] = [
      mockCommandSave.head,
      ...mockCommandSave.tokens,
      mockParamBool.head,
      ...mockParamBool.tokens,
      mockCommandLoad.head,
      ...mockCommandLoad.tokens,
      mockParamNum.head,
      ...mockParamNum.tokens,
    ];
    const result: SliceResult = parseTokenBlocks(src);

    expect(result.commands).toEqual([
      mockCommandSave,
      mockCommandLoad,
    ] satisfies typeof result.commands);
    expect(result.params).toEqual([
      mockParamBool,
      mockParamNum,
    ] satisfies typeof result.params);
  });
});
