import { describe, expect, test, vi } from "vitest";
import { filterPluginSchemaByParam } from "./arraySchemaFilterByParam";
import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray,
} from "./types";

const emptyStructSchema = {
  struct: "Empty",
  params: [],
} as const satisfies PluginStructSchemaArray;

const emptyCommandSchema: PluginCommandSchemaArray = {
  command: "EmptyCommand",
  args: [],
};

describe("filterPluginSchemaByParam - returns empty schema", () => {
  test("when input is empty", () => {
    const mockFn = vi.fn((p): p is PluginParam => true);
    const plugin: PluginSchemaArray = {
      commands: [],
      structs: [],
      params: [],
    };
    const result = filterPluginSchemaByParam(plugin, (p): p is PluginParam =>
      mockFn(p)
    );
    const expected: PluginSchemaArray = {
      commands: [],
      structs: [],
      params: [],
    };
    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(result).toEqual(expected);
  });
  test("when only empty commands and structs are present", () => {
    const mockFn = vi.fn((p): p is PluginParam => false);
    const plugin: PluginSchemaArray = {
      commands: [emptyCommandSchema],
      structs: [emptyStructSchema],
      params: [],
    };
    const result = filterPluginSchemaByParam(plugin, (p): p is PluginParam =>
      mockFn(p)
    );
    const expected: PluginSchemaArray = {
      commands: [],
      structs: [],
      params: [],
    };
    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(result).toEqual(expected);
  });
  test("when all params are struct type and predicate is always false", () => {
    const mockFn = vi.fn((p): p is PluginParam => false);
    const plugin: PluginSchemaArray = {
      commands: [emptyCommandSchema],
      structs: [emptyStructSchema],
      params: [
        { name: "dummy", attr: { kind: "struct", struct: "Empty" } },
        { name: "dummyArray", attr: { kind: "struct[]", struct: "Empty" } },
      ],
    };
    const result = filterPluginSchemaByParam(plugin, (p): p is PluginParam =>
      mockFn(p)
    );
    const expected: PluginSchemaArray = {
      commands: [],
      structs: [],
      params: [],
    };
    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(result).toEqual(expected);
  });
});
