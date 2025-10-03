import { describe, test, expect } from "vitest";
import type { ParamKinds } from "@RpgTypes/rmmz/plugin";
import type { PluginStructSchemaArray } from "@RpgTypes/rmmz/plugin";
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
  expected: {
    structs: string[];
    singleKinds: ParamKinds[];
    arrayKinds: `${ParamKinds}[]`[];
  };
}

const runTestCase = ({ caseName, expected, input }: TestCase) => {
  test(caseName, () => {
    const result = stst(mockStructs, input);
    expect(result.structNames).toEqual(new Set(expected.structs));
    expect(result.singleKinds).toEqual(new Set(expected.singleKinds));
    expect(result.arrayKinds).toEqual(new Set(expected.arrayKinds));
  });
};

const testCases: TestCase[] = [
  {
    caseName: "boolean",
    input: ["boolean"],
    expected: {
      structs: ["A", "B"],
      singleKinds: ["boolean"],
      arrayKinds: ["boolean[]"],
    },
  },
  {
    caseName: "number",
    input: ["number"],
    expected: {
      structs: ["A", "B", "C", "X", "Y", "Z"],
      singleKinds: ["number"],
      arrayKinds: ["number[]"],
    },
  },
  {
    caseName: "string",
    input: ["string"],
    expected: {
      structs: ["X", "Y", "Z"],
      singleKinds: ["string"],
      arrayKinds: ["string[]"],
    },
  },
  {
    caseName: "variable",
    input: ["variable"],
    expected: {
      structs: ["V", "W"],
      singleKinds: ["variable"],
      arrayKinds: ["variable[]"],
    },
  },
  {
    caseName: "item",
    input: ["item"],
    expected: {
      structs: ["I"],
      arrayKinds: ["item[]"],
      singleKinds: ["item"],
    },
  },
];

describe("stst", () => {
  testCases.forEach(runTestCase);
});
