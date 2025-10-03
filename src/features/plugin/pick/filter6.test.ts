import { describe, test, expect } from "vitest";
import type { ParamKinds } from "@RpgTypes/rmmz/plugin";
import type { PluginStructSchemaArray } from "@RpgTypes/rmmz/plugin";
import type { RRR } from "./filter6";
import { stst } from "./filter6";

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

interface TestCase {
  caseName: string;
  input: ParamKinds[];
  expected: Record<keyof RRR, string[]>;
}

const runTestCase = (
  structs: PluginStructSchemaArray[],
  { caseName, expected, input }: TestCase
) => {
  test(caseName, () => {
    const result = stst(structs, input);
    expect(result.singleKinds).toEqual(new Set(expected.singleKinds));
    expect(result.arrayKinds).toEqual(new Set(expected.arrayKinds));
    expect(result.structNames).toEqual(new Set(expected.structNames));
  });
};

const testCases: TestCase[] = [
  {
    caseName: "empty",
    input: [],
    expected: {
      structNames: [],
      structNests: [],
      arrayKinds: [],
      singleKinds: [],
    },
  },

  {
    caseName: "item",
    input: ["item"],
    expected: {
      structNames: ["I"],
      structNests: [],
      arrayKinds: ["item[]"],
      singleKinds: ["item"],
    },
  },
  {
    caseName: "boolean",
    input: ["boolean"],
    expected: {
      structNames: ["B"],
      structNests: ["A"],

      singleKinds: ["boolean"],
      arrayKinds: ["boolean[]"],
    },
  },
  {
    caseName: "boolean + item",
    input: ["boolean", "item"],
    expected: {
      structNames: ["B", "I"],
      structNests: ["A", "B"],
      singleKinds: ["boolean", "item"],
      arrayKinds: ["boolean[]", "item[]"],
    },
  },

  {
    caseName: "number",
    input: ["number"],
    expected: {
      structNames: ["C", "X", "Z"],
      structNests: ["A", "B", "X", "Y"],
      singleKinds: ["number"],
      arrayKinds: ["number[]"],
    },
  },
  {
    caseName: "string",
    input: ["string"],
    expected: {
      structNames: ["Y"],
      structNests: ["X"],
      singleKinds: ["string"],
      arrayKinds: ["string[]"],
    },
  },
  //   {
  //     caseName: "variable",
  //     input: ["variable"],
  //     expected: {
  //       structs: ["V", "W"],
  //       singleKinds: ["variable"],
  //       arrayKinds: ["variable[]"],
  //     },
  //   },
];

describe("stst", () => {
  testCases.forEach((t) => {
    runTestCase(mockStructs, t);
  });
});
