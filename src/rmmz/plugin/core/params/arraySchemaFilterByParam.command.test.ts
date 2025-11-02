import { describe, expect, test, vi } from "vitest";
import { rebuildCommands } from "./arraySchemaFilterByParam";
import type { PluginCommandSchemaArrayEx, PluginParam } from "./types";

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

describe("rebuildCommands filtering behavior", () => {
  test("returns empty array when input is empty", () => {
    const mockFn = makeMockFn(() => true);
    const result = rebuildCommands([], new Set(), (p): p is PluginParam =>
      mockFn(p)
    );
    expect(mockFn).toHaveBeenCalledTimes(0);
    expect(result).toEqual([]);
  });
  test("filters string kind and struct A", () => {
    const mockFn = makeMockFn((p) => p.attr.kind === "string");
    const result = rebuildCommands(
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
  test("filters number kind and struct B", () => {
    const mockFn = makeMockFn((p) => p.attr.kind === "number");
    const result = rebuildCommands(
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
