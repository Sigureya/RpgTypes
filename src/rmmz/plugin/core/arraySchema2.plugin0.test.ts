import { describe, expect, test, vi } from "vitest";
import { cccc } from "./arraySchema2";
import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray,
} from "./arraySchemaTypes";

const emptyStructSchema = {
  struct: "Empty",
  params: [],
} as const satisfies PluginStructSchemaArray;

const emptyCommandSchema: PluginCommandSchemaArray = {
  command: "EmptyCommand",
  args: [],
};

describe("cccc", () => {
  test("empty", () => {
    const mockFn = vi.fn((p): p is PluginParam => true);
    const plugin: PluginSchemaArray = {
      commands: [],
      structs: [],
      params: [],
    };
    const result = cccc(plugin, mockFn);
    const expected: PluginSchemaArray = {
      commands: [],
      structs: [],
      params: [],
    };
    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(result).toEqual(expected);
  });
  test("empty2", () => {
    const mockFn = vi.fn((p): p is PluginParam => true);
    const plugin: PluginSchemaArray = {
      commands: [emptyCommandSchema],
      structs: [emptyStructSchema],
      params: [
        { name: "dummy", attr: { kind: "struct", struct: "Empty" } },
        { name: "dummyArray", attr: { kind: "struct[]", struct: "Empty" } },
      ],
    };
    const result = cccc(plugin, mockFn);
    const expected: PluginSchemaArray = {
      commands: [],
      structs: [],
      params: [],
    };
    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(result).toEqual(expected);
  });
});
