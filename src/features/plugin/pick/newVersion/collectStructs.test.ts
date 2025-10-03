import { describe, test, expect } from "vitest";
import type { ParamKinds } from "@RpgTypes/rmmz/plugin";
import type { PluginStructSchemaArray } from "@RpgTypes/rmmz/plugin";
import { collectStructsByKinds } from "./collectStructs";
import type { StructCollection } from "./types";

const mockStructs: PluginStructSchemaArray[] = [
  {
    struct: "A",
    params: [{ name: "b", attr: { kind: "struct", struct: "B" } }],
  },
  {
    struct: "B",
    params: [
      { name: "c", attr: { kind: "struct", struct: "C" } },
      { name: "bool", attr: { kind: "boolean", default: true } },
    ],
  },
  {
    struct: "C",
    params: [{ name: "num", attr: { kind: "number", default: 0 } }],
  },
  {
    struct: "V",
    params: [{ name: "v", attr: { kind: "variable", default: 0 } }],
  },
  {
    struct: "I",
    params: [{ name: "i", attr: { kind: "item", default: 0 } }],
  },
  {
    struct: "W",
    params: [
      { name: "w", attr: { kind: "weapon", default: 0 } },
      { name: "v", attr: { kind: "variable", default: 0 } },
    ],
  },
  {
    struct: "X",
    params: [
      { name: "numArray", attr: { kind: "number[]", default: [12] } },
      { name: "y", attr: { kind: "struct[]", struct: "Y", default: [] } },
      { name: "c", attr: { kind: "struct", struct: "C" } },
    ],
  },
  {
    struct: "Y",
    params: [
      { name: "str", attr: { kind: "string", default: "" } },
      { name: "z", attr: { kind: "struct", struct: "Z" } },
    ],
  },
  {
    struct: "Z",
    params: [{ name: "num", attr: { kind: "number", default: 0 } }],
  },
];

interface Expected extends Record<keyof StructCollection, string[]> {
  matchedStructs: string[];
  nestedStructs: string[];
  targetKinds: string[];
  targetArrayKinds: string[];
}

interface TestCase {
  caseName: string;
  input: ParamKinds[];
  expected: Expected;
}

const runTestCase = (
  structs: PluginStructSchemaArray[],
  { caseName, expected, input }: TestCase
) => {
  test(caseName, () => {
    const result = collectStructsByKinds(structs, input);
    expect(result.targetKinds).toEqual(new Set(expected.targetKinds));
    expect(result.targetArrayKinds).toEqual(new Set(expected.targetArrayKinds));
    expect(result.matchedStructs).toEqual(new Set(expected.matchedStructs));
  });
};

const testCases: TestCase[] = [
  {
    caseName: "empty",
    input: [],
    expected: {
      matchedStructs: [],
      nestedStructs: [],
      targetArrayKinds: [],
      targetKinds: [],
    },
  },

  {
    caseName: "item",
    input: ["item"],
    expected: {
      matchedStructs: ["I"],
      nestedStructs: [],
      targetArrayKinds: ["item[]"],
      targetKinds: ["item"],
    },
  },
  {
    caseName: "boolean",
    input: ["boolean"],
    expected: {
      matchedStructs: ["B"],
      nestedStructs: ["A"],

      targetKinds: ["boolean"],
      targetArrayKinds: ["boolean[]"],
    },
  },
  {
    caseName: "boolean + item",
    input: ["boolean", "item"],
    expected: {
      matchedStructs: ["B", "I"],
      nestedStructs: ["A", "B"],
      targetKinds: ["boolean", "item"],
      targetArrayKinds: ["boolean[]", "item[]"],
    },
  },

  {
    caseName: "number",
    input: ["number"],
    expected: {
      matchedStructs: ["C", "X", "Z"],
      nestedStructs: ["A", "B", "X", "Y"],
      targetKinds: ["number"],
      targetArrayKinds: ["number[]"],
    },
  },
  {
    caseName: "string",
    input: ["string"],
    expected: {
      matchedStructs: ["Y"],
      nestedStructs: ["X"],
      targetKinds: ["string"],
      targetArrayKinds: ["string[]"],
    },
  },
  {
    caseName: "variable",
    input: ["variable"],
    expected: {
      matchedStructs: ["V", "W"],
      nestedStructs: [],
      targetKinds: ["variable"],
      targetArrayKinds: ["variable[]"],
    },
  },
];

describe("stst", () => {
  testCases.forEach((t) => {
    runTestCase(mockStructs, t);
  });
});
