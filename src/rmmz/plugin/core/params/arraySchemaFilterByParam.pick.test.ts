import { describe, expect, test } from "vitest";
import { filterPluginSchemaByParam } from "./arraySchemaFilterByParam";
import type {
  NumberArrayParam,
  NumberParam,
  PluginCommandSchemaArrayEx,
  PluginParam,
  PluginParamEx,
  PluginSchemaArray,
  PluginStructSchemaArrayEx,
} from "./types";
interface Shop {
  items: number[];
  name: string;
  cashVariable: number;
}

interface Vector2 {
  x: number;
  y: number;
}

interface ShowMessage {
  text: string;
  position: Vector2;
}

const shppSchema: PluginStructSchemaArrayEx<Shop> = {
  struct: "Shop",
  params: [
    { name: "items", attr: { kind: "number[]", default: [] } },
    { name: "name", attr: { kind: "string", default: "My Shop" } },
    { name: "cashVariable", attr: { kind: "number", default: 0 } },
  ],
};

const vec2Schema: PluginStructSchemaArrayEx<Vector2> = {
  struct: "Vector2",
  params: [
    { name: "x", attr: { kind: "number", default: 0 } },
    { name: "y", attr: { kind: "number", default: 0 } },
  ],
};

const commndShowMessage: PluginCommandSchemaArrayEx<ShowMessage> = {
  command: "ShowMessage",
  args: [
    { name: "text", attr: { kind: "string", default: "" } },
    { name: "position", attr: { kind: "struct", struct: "Vector2" } },
  ],
};

const pluginSchema: PluginSchemaArray = {
  structs: [shppSchema, vec2Schema],
  commands: [commndShowMessage],
  params: [],
};

const isNumberParam = (
  param: PluginParam
): param is PluginParamEx<NumberParam | NumberArrayParam> => {
  return param.attr.kind === "number" || param.attr.kind === "number[]";
};

describe("filterPluginSchemaByParam", () => {
  test("", () => {
    const result = filterPluginSchemaByParam(pluginSchema, isNumberParam);
    const expected: PluginSchemaArray = {
      structs: [
        {
          struct: "Shop",
          params: [
            { name: "items", attr: { kind: "number[]", default: [] } },
            { name: "cashVariable", attr: { kind: "number", default: 0 } },
          ],
        },
        {
          struct: "Vector2",
          params: [
            { name: "x", attr: { kind: "number", default: 0 } },
            { name: "y", attr: { kind: "number", default: 0 } },
          ],
        },
      ],
      commands: [
        {
          command: "ShowMessage",
          args: [
            { name: "position", attr: { kind: "struct", struct: "Vector2" } },
          ],
        },
      ],
      params: [],
    };
    expect(result.structs).toEqual(expected.structs);
    expect(result.commands).toEqual(expected.commands);
    expect(result.params).toEqual(expected.params);
  });
});
