import { describe, test, expect } from "vitest";
import type { FilterdPlugin } from "./filter2Type2";
import { sss2 } from "./filter5";
import type { ParamKinds } from "./kinds";
import type { PluginSchemaArray } from "./kinds/core/types";

const mockInput: PluginSchemaArray = {
  params: [
    { name: "bool", attr: { kind: "boolean", default: true } },
    {
      name: "num",
      attr: { kind: "number", default: 9 },
    },
    {
      name: "numArray",
      attr: { kind: "number[]", default: [1, 2, 3] },
    },
    {
      name: "str",
      attr: { kind: "string", default: "hoge" },
    },
    {
      name: "strArray",
      attr: { kind: "string[]", default: ["a", "b", "c"] },
    },
  ],
  commands: [
    {
      command: "setValue",
      args: [
        { name: "value", attr: { kind: "number", default: 0 } },
        { name: "target", attr: { kind: "variable", default: 66 } },
      ],
    },
    {
      command: "setName",
      args: [
        { name: "name", attr: { kind: "string", default: "" } },
        { name: "target", attr: { kind: "variable", default: 88 } },
      ],
    },
  ],
  structs: [
    {
      struct: "Person",
      params: [
        { name: "name", attr: { kind: "string", default: "" } },
        { name: "age", attr: { kind: "number", default: 0 } },
      ],
    },
  ],
};

describe.skip("", () => {
  test("boolean", () => {
    const kinds: ParamKinds[] = ["boolean"];
    const result: FilterdPlugin = sss2(mockInput, kinds);
    const expected: FilterdPlugin = {
      params: {
        array: [],
        single: [{ name: "bool", attr: { kind: "boolean", default: true } }],
        struct: [],
        structArray: [],
      },
      commands: [],
      structs: [],
    };
    expect(result).toEqual(expected);
  });
  test.skip("number", () => {
    const kinds: ParamKinds[] = ["number"];
    const result: FilterdPlugin = sss2(mockInput, kinds);
    const expected: FilterdPlugin = {
      params: {
        single: [{ name: "num", attr: { kind: "number", default: 9 } }],
        array: [
          {
            name: "numArray",
            attr: { kind: "number[]", default: [1, 2, 3] },
          },
        ],
        struct: [],
        structArray: [],
      },
      commands: [
        {
          command: "setValue",
          args: {
            single: [{ name: "value", attr: { kind: "number", default: 0 } }],
            array: [],
            struct: [],
            structArray: [],
          },
        },
      ],
      structs: [
        {
          struct: "Person",
          params: [
            {
              name: "age",
              attr: { kind: "number", default: 0 },
            },
          ],
        },
      ],
    };
    expect(result).toEqual(expected);
  });
  test.skip("string", () => {
    const kinds: ParamKinds[] = ["string"];
    const result: FilterdPlugin = sss2(mockInput, kinds);
    const expected: FilterdPlugin = {
      params: {
        single: [{ name: "str", attr: { kind: "string", default: "hoge" } }],
        array: [
          {
            name: "strArray",
            attr: { kind: "string[]", default: ["a", "b", "c"] },
          },
        ],
        struct: [],
        structArray: [],
      },
      commands: [
        {
          command: "setName",
          args: {
            single: [{ name: "name", attr: { kind: "string", default: "" } }],
            array: [],
            struct: [],
            structArray: [],
          },
        },
      ],
      structs: [
        {
          struct: "Person",
          params: [{ name: "name", attr: { kind: "string", default: "" } }],
        },
      ],
    };
    expect(result).toEqual(expected);
  });
});
