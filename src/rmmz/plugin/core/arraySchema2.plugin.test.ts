import { describe, expect, test, vi } from "vitest";
import type { ItemEffect } from "@RpgTypes/rmmz/rpg";
import { cccc } from "./arraySchema2";
import type {
  PluginCommandSchemaArrayEx,
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

interface ShowText {
  text: string;
}

interface ShowNumber {
  value: number;
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

const showTextSchema: PluginCommandSchemaArrayEx<ShowText> = {
  command: "ShowText",
  args: [{ name: "text", attr: { kind: "string", default: "Hello World!" } }],
};

const showNumberSchema: PluginCommandSchemaArrayEx<ShowNumber> = {
  command: "ShowNumber",
  args: [{ name: "value", attr: { kind: "number", default: 42 } }],
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
  describe("", () => {
    const isNumberParam = (p: PluginParam) => p.attr.kind === "number";
    test("", () => {
      const mockFn = vi.fn((p: PluginParam): p is PluginParam =>
        isNumberParam(p)
      );
      const plugin: PluginSchemaArray = {
        commands: [showNumberSchema],
        structs: [],
        params: [],
      };
      const result = cccc(plugin, (p): p is PluginParam => mockFn(p));
      expect(result.commands).toEqual(plugin.commands);
      expect(result.params).toEqual(plugin.params);
      expect(result.structs).toEqual(plugin.structs);
    });
  });
  test("a", () => {
    const mockFn = vi.fn((p: PluginParam) => p.attr.kind === "string");
    const plugin: PluginSchemaArray = {
      commands: [showTextSchema, showNumberSchema],
      structs: [itemSchema, effectSchema],
      params: [{ name: "items", attr: { kind: "struct[]", struct: "Item" } }],
    };
    const expected: PluginSchemaArray = {
      commands: [showTextSchema],
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
