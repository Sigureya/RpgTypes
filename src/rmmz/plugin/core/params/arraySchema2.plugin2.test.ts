import { describe, expect, test, vi } from "vitest";
import { filterPluginSchemaByParam } from "./arraySchemaFilterByParam";
import type {
  PluginCommandSchemaArray,
  PluginCommandSchemaArrayEx,
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray,
  PluginStructSchemaArrayEx,
} from "./types";

interface ItemEffect {
  code: number;
  dataId: number;
  value1: number;
  value2: number;
}

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

interface Vector2 {
  x: number;
  y: number;
}

const emptyStructSchema = {
  struct: "Empty",
  params: [],
} as const satisfies PluginStructSchemaArray;

const emptyCommandSchema: PluginCommandSchemaArray = {
  command: "EmptyCommand",
  args: [],
};

const itemSchema: PluginStructSchemaArrayEx<Item> = {
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

const effectSchema: PluginStructSchemaArrayEx<ItemEffect> = {
  struct: "ItemEffect",
  params: [
    { name: "code", attr: { kind: "number", default: 0 } },
    { name: "dataId", attr: { kind: "number", default: 0 } },
    { name: "value1", attr: { kind: "number", default: 0 } },
    { name: "value2", attr: { kind: "number", default: 0 } },
  ],
};

const vector2Schema = {
  struct: "Vector2",
  params: [
    { name: "x", attr: { kind: "number", default: 0 } },
    { name: "y", attr: { kind: "number", default: 0 } },
  ],
} as const satisfies PluginStructSchemaArrayEx<Vector2>;

const showTextSchema: PluginCommandSchemaArrayEx<ShowText> = {
  command: "ShowText",
  args: [{ name: "text", attr: { kind: "string", default: "Hello World!" } }],
};

const showNumberSchema: PluginCommandSchemaArrayEx<ShowNumber> = {
  command: "ShowNumber",
  args: [{ name: "value", attr: { kind: "number", default: 42 } }],
};

describe("filterPluginSchemaByParam", () => {
  describe("predicate type guard:number", () => {
    const isNumberParam = (p: PluginParam) => p.attr.kind === "number";
    test("keep number param", () => {
      const mockFn = vi.fn((p: PluginParam): p is PluginParam =>
        isNumberParam(p)
      );
      const plugin: PluginSchemaArray = {
        commands: [
          showNumberSchema,
          {
            command: "ExcuteEffect",
            args: [
              { name: "target", attr: { kind: "number", default: 0 } },
              {
                name: "effect",
                attr: { kind: "struct", struct: "ItemEffect" },
              },
            ],
          },
        ],
        structs: [vector2Schema, effectSchema],
        params: [
          { name: "gameId:", attr: { kind: "number", default: 1 } },
          { name: "position", attr: { kind: "struct", struct: "Vector2" } },
        ],
      };
      const result = filterPluginSchemaByParam(plugin, (p): p is PluginParam =>
        mockFn(p)
      );
      expect(result.commands).toEqual(plugin.commands);
      expect(result.structs).toEqual(plugin.structs);
      expect(result.params).toEqual(plugin.params);
    });
    test("", () => {
      const mockFn = vi.fn((p: PluginParam) => isNumberParam(p));
      const plugin: PluginSchemaArray = {
        commands: [showTextSchema, emptyCommandSchema],
        structs: [emptyStructSchema],
        params: [
          { name: "username", attr: { kind: "string", default: "Player1" } },
          { name: "bool", attr: { kind: "boolean", default: true } },
        ],
      };
      const result = filterPluginSchemaByParam(plugin, (p): p is PluginParam =>
        mockFn(p)
      );
      expect(result.commands).toEqual([]);
      expect(result.params).toEqual([]);
      expect(result.structs).toEqual([]);
      expect(mockFn).toHaveBeenCalledWith(showTextSchema.args[0]);
    });
  });
  test("predicate type guard:string", () => {
    const mockFn = vi.fn((p: PluginParam) => p.attr.kind === "string");
    const plugin: PluginSchemaArray = {
      commands: [showTextSchema, showNumberSchema, emptyCommandSchema],
      structs: [itemSchema, effectSchema, emptyStructSchema],
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
        } satisfies PluginStructSchemaArrayEx<Item>,
      ],
      params: [{ name: "items", attr: { kind: "struct[]", struct: "Item" } }],
    };
    const result = filterPluginSchemaByParam(plugin, (p): p is PluginParam =>
      mockFn(p)
    );
    expect(result.commands).toEqual(expected.commands);
    expect(result.params).toEqual(expected.params);
    expect(result.structs).toEqual(expected.structs);
  });
});
