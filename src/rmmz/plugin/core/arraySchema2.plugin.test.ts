import { describe, expect, test, vi } from "vitest";
import type { ItemEffect } from "@RpgTypes/rmmz/rpg";
import { cccc } from "./arraySchema2";
import type {
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray3,
} from "./arraySchemaTypes";

interface Item {
  id: number;
  name: string;
  description: string;
  effects: ItemEffect[];
}

const itemSchema: PluginStructSchemaArray3<Item> = {
  struct: "Item",
  params: [
    { name: "id", attr: { kind: "number", default: 1 } },
    { name: "name", attr: { kind: "string", default: "New Item" } },
    {
      name: "description",
      attr: { kind: "string", default: "item description" },
    },
    { name: "effects", attr: { kind: "struct[]", struct: "ItemEffect" } },
  ],
};

const effectSchema: PluginStructSchemaArray3<ItemEffect> = {
  struct: "ItemEffect",
  params: [
    { name: "code", attr: { kind: "number", default: 0 } },
    { name: "dataId", attr: { kind: "number", default: 0 } },
    { name: "value1", attr: { kind: "number", default: 0 } },
    { name: "value2", attr: { kind: "number", default: 0 } },
  ],
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
  test("a", () => {
    const mockFn = vi.fn((p: PluginParam) => p.attr.kind === "string");
    const plugin: PluginSchemaArray = {
      commands: [],
      structs: [itemSchema, effectSchema],
      params: [{ name: "items", attr: { kind: "struct[]", struct: "Item" } }],
    };
    const expected: PluginSchemaArray = {
      commands: [],
      structs: [
        {
          struct: "Item",
          params: [
            { name: "name", attr: { kind: "string", default: "New Item" } },
            {
              name: "description",
              attr: { kind: "string", default: "item description" },
            },
          ],
        } satisfies PluginStructSchemaArray3<Item>,
      ],
      params: [{ name: "items", attr: { kind: "struct[]", struct: "Item" } }],
    };
    const result = cccc(plugin, (p): p is PluginParam => mockFn(p));
    expect(result.commands).toEqual(expected.commands);
    expect(result.params).toEqual(expected.params);
    expect(result.structs).toEqual(expected.structs);
  });
});
