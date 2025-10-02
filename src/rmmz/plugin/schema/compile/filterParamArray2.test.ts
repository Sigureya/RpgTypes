import { describe, expect, test } from "vitest";
import type { PluginParamGroups } from "./filter2Type2";
import type { ParamFilterCriteria } from "./filterParamArray2";
import { filterParams2 } from "./filterParamArray2";
import type { PrimitiveParam } from "./kinds";
import type { ParamKinds } from "./kinds";
import type { PluginParam } from "./kinds/core/types";

interface TestCase {
  caseName: string;
  input: {
    params: PluginParam<PrimitiveParam>[];
    ppp: ParamFilterCriteria;
  };
  expected: PluginParamGroups<PrimitiveParam>;
}

const makePPP = (p: {
  single: ParamKinds[];
  array: `${ParamKinds}[]`[];
  struct: string[];
}): ParamFilterCriteria => ({
  singleKinds: new Set<ParamKinds>(p.single),
  arrayKinds: new Set<`${ParamKinds}[]`>(p.array),
  structNames: new Set<string>(p.struct),
});

const testCases: TestCase[] = [
  {
    caseName: "すべてsingleKindsで分類",
    input: {
      params: [
        { name: "singleParam", attr: { kind: "number", default: 9 } },
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
        { name: "structParam", attr: { kind: "struct", struct: "MyStruct" } },
      ],
      ppp: makePPP({ single: ["number"], array: [], struct: [] }),
    },
    expected: {
      single: [{ name: "singleParam", attr: { kind: "number", default: 9 } }],
      array: [],
      struct: [],
      structArray: [],
    },
  },
  {
    caseName: "arrayKindsで分類",
    input: {
      params: [
        { name: "singleParam", attr: { kind: "number", default: 9 } },
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
        { name: "structParam", attr: { kind: "struct", struct: "MyStruct" } },
      ],
      ppp: makePPP({ single: [], array: ["number[]"], struct: [] }),
    },
    expected: {
      single: [],
      array: [
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
      ],
      struct: [],
      structArray: [],
    },
  },
  {
    caseName: "structNamesで分類",
    input: {
      params: [
        { name: "singleParam", attr: { kind: "number", default: 9 } },
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
        { name: "structParam", attr: { kind: "struct", struct: "MyStruct" } },
        {
          name: "structArrayParam",
          attr: { kind: "struct[]", struct: "MyStruct" },
        },
      ],
      ppp: makePPP({ single: [], array: [], struct: ["MyStruct"] }),
    },
    expected: {
      single: [],
      array: [],
      struct: [
        { name: "structParam", attr: { kind: "struct", struct: "MyStruct" } },
      ],
      structArray: [
        {
          name: "structArrayParam",
          attr: { kind: "struct[]", struct: "MyStruct" },
        },
      ],
    },
  },
  {
    caseName: "複数分類",
    input: {
      params: [
        { name: "singleParam", attr: { kind: "number", default: 9 } },
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
        { name: "structParam", attr: { kind: "struct", struct: "MyStruct" } },
        {
          name: "structArrayParam",
          attr: { kind: "struct[]", struct: "MyStruct" },
        },
      ],
      ppp: makePPP({
        single: ["number"],
        array: ["number[]"],
        struct: ["MyStruct"],
      }),
    },
    expected: {
      single: [{ name: "singleParam", attr: { kind: "number", default: 9 } }],
      array: [
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
      ],
      struct: [
        { name: "structParam", attr: { kind: "struct", struct: "MyStruct" } },
      ],
      structArray: [
        {
          name: "structArrayParam",
          attr: { kind: "struct[]", struct: "MyStruct" },
        },
      ],
    },
  },
];

describe("filterParams2", () => {
  testCases.forEach((testCase) => {
    test(testCase.caseName, () => {
      const result = filterParams2(testCase.input.params, testCase.input.ppp);
      expect(result).toEqual(testCase.expected);
    });
  });
});
