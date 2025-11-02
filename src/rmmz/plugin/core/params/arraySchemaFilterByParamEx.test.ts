import { describe, expect, test } from "vitest";
import { filterPluginSchemaByStringParam } from "./arraySchemaFilterByParamEx";
import type { PluginSchemaArray, PluginStructSchemaArrayEx } from "./types";

interface MockData {
  message: string;
  select: string;
  combo: string;
  multiline: string;
  messageArray: string[];
  multilineArray: string[];
  items: Item[];
  numberArray: number[];
}

interface Item {
  name: string;
  price: number;
}

const itemSchema: PluginStructSchemaArrayEx<Item> = {
  struct: "Item",
  params: [
    { name: "name", attr: { kind: "string", default: "" } },
    { name: "price", attr: { kind: "number", default: 0 } },
  ],
};

const structSchema: PluginStructSchemaArrayEx<MockData> = {
  struct: "MockData",
  params: [
    { name: "message", attr: { kind: "string", default: "" } },
    {
      name: "select",
      attr: { kind: "select", default: "option1", options: [] },
    },
    { name: "combo", attr: { kind: "combo", default: "choice1", options: [] } },
    { name: "multiline", attr: { kind: "multiline_string", default: "" } },
    { name: "messageArray", attr: { kind: "string[]", default: [] } },
    {
      name: "multilineArray",
      attr: { kind: "multiline_string[]", default: [] },
    },
    { name: "items", attr: { kind: "struct[]", struct: "Item" } },
  ],
};

describe("filterPluginSchemaByStringParam", () => {
  test("", () => {
    const schema: PluginSchemaArray = {
      structs: [structSchema, itemSchema],
      commands: [],
      params: [],
    };
    const result = filterPluginSchemaByStringParam(schema);
    const expected: PluginSchemaArray = {
      structs: [
        structSchema,
        {
          struct: "Item",
          params: [{ name: "name", attr: { kind: "string", default: "" } }],
        },
      ],
      commands: [],
      params: [],
    };
    expect(result).toEqual(expected);
  });
  test("", () => {
    const schema: PluginSchemaArray = {
      structs: [
        {
          struct: "Item",
          params: [
            { name: "name", attr: { kind: "string", default: "" } },
            { name: "price", attr: { kind: "number", default: 0 } },
          ],
        },
      ],
      commands: [
        {
          command: "DefineItem",
          args: [
            { name: "item", attr: { kind: "struct", struct: "Item" } },
            { name: "dummy", attr: { kind: "number", default: 0 } },
          ],
        },
      ],
      params: [
        { name: "gameId", attr: { kind: "number", default: 1 } },
        { name: "title", attr: { kind: "string", default: "My Game" } },
      ],
    };
    const result = filterPluginSchemaByStringParam(schema);
    const expected: PluginSchemaArray = {
      structs: [
        {
          struct: "Item",
          params: [{ name: "name", attr: { kind: "string", default: "" } }],
        },
      ],
      commands: [
        {
          command: "DefineItem",
          args: [{ name: "item", attr: { kind: "struct", struct: "Item" } }],
        },
      ],
      params: [{ name: "title", attr: { kind: "string", default: "My Game" } }],
    };
    expect(result).toEqual(expected);
  });
  test("file", () => {
    const schema: PluginSchemaArray = {
      structs: [
        {
          struct: "Item",
          params: [
            { name: "name", attr: { kind: "string", default: "" } },
            { name: "price", attr: { kind: "number", default: 0 } },
          ],
        },
        {
          struct: "Banner",
          params: [
            {
              name: "image",
              attr: { kind: "file", default: "", dir: "img/banners" },
            },
            { name: "text", attr: { kind: "string", default: "" } },
          ],
        },
      ],
      commands: [
        {
          command: "ShowPicture",
          args: [
            {
              name: "fileName",
              attr: { kind: "file", default: "", dir: "img/pictures" },
            },
            { name: "id", attr: { kind: "number", default: 1 } },
          ],
        },
      ],
      params: [
        { name: "gameId", attr: { kind: "number", default: 1 } },
        { name: "title", attr: { kind: "string", default: "My Game" } },
      ],
    };
    const expected: PluginSchemaArray = {
      structs: [
        {
          struct: "Item",
          params: [{ name: "name", attr: { kind: "string", default: "" } }],
        },
        {
          struct: "Banner",
          params: [{ name: "text", attr: { kind: "string", default: "" } }],
        },
      ],
      commands: [],
      params: [{ name: "title", attr: { kind: "string", default: "My Game" } }],
    };
    const result = filterPluginSchemaByStringParam(schema);
    expect(result.structs).toEqual(expected.structs);
    expect(result.params).toEqual(expected.params);
    expect(result.commands).toEqual(expected.commands);
    expect(result).toEqual(expected);
  });
});
