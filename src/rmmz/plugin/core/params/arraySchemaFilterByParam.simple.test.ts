import { describe, expect, test, vi } from "vitest";
import { filterPluginSchemaByParam } from "./arraySchemaFilterByParam";
import type {
  PluginCommandSchemaArray,
  PluginCommandSchemaArrayEx,
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArrayEx,
} from "./types";

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

interface MessagePair {
  message: string;
  speakerName: string;
}

const vector2Schema = {
  struct: "Vector2",
  params: [
    { name: "x", attr: { kind: "number", default: 0 } },
    { name: "y", attr: { kind: "number", default: 0 } },
  ],
} as const satisfies PluginStructSchemaArrayEx<Vector2>;

const messagePairSchema: PluginStructSchemaArrayEx<MessagePair> = {
  struct: "Message",
  params: [
    { name: "message", attr: { kind: "string", default: "" } },
    { name: "speakerName", attr: { kind: "string", default: "Narrator" } },
  ],
};

const commandShowText: PluginCommandSchemaArrayEx<ShowText> = {
  command: "ShowText",
  args: [{ name: "text", attr: { kind: "string", default: "Hello World!" } }],
};

const commandShowNumber: PluginCommandSchemaArrayEx<ShowNumber> = {
  command: "ShowNumber",
  args: [{ name: "value", attr: { kind: "number", default: 42 } }],
};

const commandSetPosition: PluginCommandSchemaArray = {
  command: "SetPosition",
  args: [
    { name: "target", attr: { kind: "number", default: 0 } },
    { name: "position", attr: { kind: "struct", struct: "Vector2" } },
  ],
};

const pluginSchemaNumberOnly: PluginSchemaArray = {
  commands: [commandShowNumber, commandSetPosition],
  structs: [vector2Schema],
  params: [
    { name: "gameId:", attr: { kind: "number", default: 1 } },
    { name: "position", attr: { kind: "struct", struct: "Vector2" } },
  ],
};
const pluginSchemaStringOnly: PluginSchemaArray = {
  commands: [commandShowText],
  structs: [messagePairSchema],
  params: [{ name: "greeting", attr: { kind: "string", default: "Hello" } }],
};

const isNumberParam = (p: PluginParam) => p.attr.kind === "number";
const isStringParam = (p: PluginParam) => p.attr.kind === "string";

describe("arraySchemaFilterByParam", () => {
  describe("filter by number param", () => {
    test("returns original schema when all params are number", () => {
      const mockFn = vi.fn((p: PluginParam): p is PluginParam =>
        isNumberParam(p)
      );
      const result = filterPluginSchemaByParam(
        pluginSchemaNumberOnly,
        (p): p is PluginParam => mockFn(p)
      );
      expect(result.commands).toEqual(pluginSchemaNumberOnly.commands);
      expect(result.structs).toEqual(pluginSchemaNumberOnly.structs);
      expect(result.params).toEqual(pluginSchemaNumberOnly.params);
      expect(result).toEqual(pluginSchemaNumberOnly);
    });
    test("returns empty schema when no params are number", () => {
      const mockFn = vi.fn((p: PluginParam) => isNumberParam(p));
      const result = filterPluginSchemaByParam(
        pluginSchemaStringOnly,
        (p): p is PluginParam => mockFn(p)
      );
      const expected: PluginSchemaArray = {
        commands: [],
        structs: [],
        params: [],
      };
      expect(result).toEqual(expected);
    });
  });
  describe("filter by string param", () => {
    test("returns original schema when all params are string", () => {
      const mockFn = vi.fn((p: PluginParam): p is PluginParam =>
        isStringParam(p)
      );
      const result = filterPluginSchemaByParam(
        pluginSchemaStringOnly,
        (p): p is PluginParam => mockFn(p)
      );
      expect(result.commands).toEqual(pluginSchemaStringOnly.commands);
      expect(result.structs).toEqual(pluginSchemaStringOnly.structs);
      expect(result.params).toEqual(pluginSchemaStringOnly.params);
      expect(result).toEqual(pluginSchemaStringOnly);
    });
    test("returns empty schema when no params are string", () => {
      const mockFn = vi.fn((p: PluginParam) => isStringParam(p));
      const result = filterPluginSchemaByParam(
        pluginSchemaNumberOnly,
        (p): p is PluginParam => mockFn(p)
      );
      const expected: PluginSchemaArray = {
        commands: [],
        structs: [],
        params: [],
      };
      expect(result).toEqual(expected);
    });
  });
});
