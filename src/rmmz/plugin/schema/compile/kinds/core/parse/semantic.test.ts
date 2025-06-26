import { test, expect, describe } from "vitest";
import {
  parsePluginCommand,
  parseTokenBlocks,
  parsePluginParam,
  type SliceResult,
} from "./semantic";
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
    expect(result.commands).toEqual([
      parsePluginCommand(mockCommandSave),
      parsePluginCommand(mockCommandLoad),
    ]);
  });
  test("valid param parsing", () => {
    const src: Token[] = [
      mockParamBool.head,
      ...mockParamBool.tokens,
      mockParamNum.head,
      ...mockParamNum.tokens,
    ];
    const result: SliceResult = parseTokenBlocks(src);
    expect(result.params).toEqual([
      parsePluginParam(mockParamBool),
      parsePluginParam(mockParamNum),
    ]);
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
      parsePluginCommand(mockCommandSave),
      parsePluginCommand(mockCommandLoad),
    ]);
    expect(result.params).toEqual([
      parsePluginParam(mockParamBool),
      parsePluginParam(mockParamNum),
    ]);
  });
});

describe("parsePluginCommand", () => {
  test("valid context", () => {
    const expectedCommand: PluginCommandTokens = {
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
    const result: PluginCommandTokens = parsePluginCommand(mockCommandSave);
    expect(result).toEqual(expectedCommand);
  });
  test("valid context without desc and text", () => {
    const expectedCommand: PluginCommandTokens = {
      command: "load",
      args: [
        {
          arg: "arg1",
          attributes: [
            { keyword: "text", value: "arg1 text" },
            { keyword: "desc", value: "load Save File" },
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
    const result: PluginCommandTokens = parsePluginCommand(mockCommandLoad);
    expect(result).toEqual(expectedCommand);
  });
});
