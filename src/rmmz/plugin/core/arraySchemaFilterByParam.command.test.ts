import { describe, expect, test, vi } from "vitest";
import { cmdEx } from "./arraySchemaFilterByParam";
import type {
  PluginCommandSchemaArrayEx,
  PluginParam,
} from "./arraySchemaTypes";

interface UseItem {
  itemId: number;
  targetId: number;
  message: string;
  a: object;
  b: object;
}
interface EmptyArg {}

const useItemSchema: PluginCommandSchemaArrayEx<UseItem> = {
  command: "UseItem",
  args: [
    { name: "itemId", attr: { kind: "number", default: 1 } },
    { name: "targetId", attr: { kind: "number", default: 0 } },
    { name: "message", attr: { kind: "string", default: "Used item." } },
    { name: "a", attr: { struct: "A", kind: "struct" } },
    { name: "b", attr: { struct: "B", kind: "struct" } },
  ],
};

const emptyArgSchema: PluginCommandSchemaArrayEx<EmptyArg> = {
  command: "EmptyArg",
  args: [],
};

const makeMockFn = (fn: (param: PluginParam) => boolean) => {
  return vi.fn((p): p is PluginParam => fn(p));
};

describe("cmdEx", () => {
  test("empty", () => {
    const mockFn = makeMockFn(() => true);
    const result = cmdEx([], new Set(), (p): p is PluginParam => mockFn(p));
    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(result).toEqual([]);
  });
  test("a", () => {
    const mockFn = makeMockFn((p) => p.attr.kind === "string");
    const result = cmdEx(
      [useItemSchema, emptyArgSchema],
      new Set(["A"]),
      (p): p is PluginParam => mockFn(p)
    );
    const expected: PluginCommandSchemaArrayEx<UseItem>[] = [
      {
        command: "UseItem",
        args: [
          { name: "message", attr: { kind: "string", default: "Used item." } },
          { name: "a", attr: { struct: "A", kind: "struct" } },
        ],
      },
    ];
    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn).toHaveBeenNthCalledWith(1, useItemSchema.args[0]);
    expect(mockFn).toHaveBeenNthCalledWith(2, useItemSchema.args[1]);
    expect(mockFn).toHaveBeenNthCalledWith(3, useItemSchema.args[2]);
    expect(result).toEqual(expected);
  });
  test("b", () => {
    const mockFn = makeMockFn((p) => p.attr.kind === "number");
    const result = cmdEx(
      [useItemSchema, emptyArgSchema],
      new Set(["B"]),
      (p): p is PluginParam => mockFn(p)
    );
    const expected: PluginCommandSchemaArrayEx<UseItem>[] = [
      {
        command: "UseItem",
        args: [
          { name: "itemId", attr: { kind: "number", default: 1 } },
          { name: "targetId", attr: { kind: "number", default: 0 } },
          { name: "b", attr: { struct: "B", kind: "struct" } },
        ],
      },
    ];
    expect(mockFn).toHaveBeenCalledTimes(3);
    expect(mockFn).toHaveBeenNthCalledWith(1, useItemSchema.args[0]);
    expect(mockFn).toHaveBeenNthCalledWith(2, useItemSchema.args[1]);
    expect(mockFn).toHaveBeenNthCalledWith(3, useItemSchema.args[2]);
    expect(result).toEqual(expected);
  });
});
