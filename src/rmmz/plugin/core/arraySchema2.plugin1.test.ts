import { describe, expect, test, vi } from "vitest";
import { cccc } from "./arraySchema2";
import type {
  PluginCommandSchemaArray,
  PluginCommandSchemaArrayEx,
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray,
  PluginStructSchemaArray3,
} from "./arraySchemaTypes";

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

const vector2Schema = {
  struct: "Vector2",
  params: [
    { name: "x", attr: { kind: "number", default: 0 } },
    { name: "y", attr: { kind: "number", default: 0 } },
  ],
} as const satisfies PluginStructSchemaArray3<Vector2>;

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
  test("empty2", () => {
    const mockFn = vi.fn((p): p is PluginParam => true);
    const plugin: PluginSchemaArray = {
      commands: [emptyCommandSchema],
      structs: [emptyStructSchema],
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
        structs: [vector2Schema],
        params: [
          { name: "gameId:", attr: { kind: "number", default: 1 } },
          { name: "position", attr: { kind: "struct", struct: "Vector2" } },
        ],
      };
      const result = cccc(plugin, (p): p is PluginParam => mockFn(p));
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
      const result = cccc(plugin, (p) => mockFn(p));
      expect(result.commands).toEqual([]);
      expect(result.params).toEqual([]);
      expect(result.structs).toEqual([]);
      expect(mockFn).toHaveBeenCalledWith(showTextSchema.args[0]);
    });
  });
});
