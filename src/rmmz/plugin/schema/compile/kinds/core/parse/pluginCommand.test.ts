import { describe, test, expect } from "vitest";
import { parsePluginCommand } from "./pluginCommand";
import type { ParsingContext, PluginCommandTokens } from "./types/token";

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
