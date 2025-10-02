import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { PluginParamGroups } from "./filter2Type2";
import { filterParams } from "./filterParamArray";
import type { PrimitiveParam } from "./kinds";
import type { PluginParam } from "./kinds/core/types";

type MockedSet = MockedObject<Pick<ReadonlySet<string>, "has">>;

const makeMockedSet = (items: ReadonlyArray<string>): MockedSet => {
  const set: Set<string> = new Set(items);
  return {
    has: vi.fn((item: string) => set.has(item)),
  };
};

interface TestCase {
  caseName: string;
  input: {
    params: PluginParam<PrimitiveParam>[];
    setItems: ReadonlyArray<string>;
    fn: (param: PrimitiveParam) => boolean;
  };
  expected: PluginParamGroups<PrimitiveParam>;
  setCallArg: string[];
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.caseName, () => {
    test("result", () => {
      const mockedSet = makeMockedSet(testCase.input.setItems);
      const result = filterParams(testCase.input.params, mockedSet, (p) =>
        testCase.input.fn(p)
      );
      expect(result.array).toEqual(testCase.expected.array);
      expect(result.single).toEqual(testCase.expected.single);
      expect(result.struct).toEqual(testCase.expected.struct);
      expect(result.structArray).toEqual(testCase.expected.structArray);
    });
    test("set calls", () => {
      const mockedSet = makeMockedSet(testCase.input.setItems);
      filterParams(testCase.input.params, mockedSet, (p) =>
        testCase.input.fn(p)
      );
      testCase.setCallArg.forEach((key) => {
        expect(mockedSet.has).toHaveBeenCalledWith(key);
      });
      const callLog: Set<string> = new Set(
        mockedSet.has.mock.calls.map((a) => a[0])
      );
      expect(callLog).toEqual(new Set(testCase.setCallArg));
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "すべてtrue",
    input: {
      params: [
        { name: "singleParam", attr: { kind: "number", default: 9 } },
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
        { name: "structParam", attr: { kind: "struct", struct: "MyStruct" } },
      ],
      fn: () => true,
      setItems: [],
    },
    setCallArg: ["MyStruct"],
    expected: {
      single: [{ name: "singleParam", attr: { kind: "number", default: 9 } }],
      array: [
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
      ],
      structArray: [],
      struct: [],
    },
  },
  {
    caseName: "すべてfalse",
    input: {
      params: [
        { name: "singleParam", attr: { kind: "number", default: 9 } },
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
        { name: "structParam", attr: { kind: "struct", struct: "MyStruct" } },
      ],
      fn: () => false,
      setItems: ["MyStruct"],
    },
    setCallArg: ["MyStruct"],
    expected: {
      array: [
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
      ],
      single: [],
      struct: [
        { name: "structParam", attr: { kind: "struct", struct: "MyStruct" } },
      ],
      structArray: [],
    },
  },
  {
    caseName: "numberだけtrue",
    input: {
      params: [
        { name: "singleParam", attr: { kind: "number", default: 9 } },
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
      ],
      fn: (p) => p.kind === "number",
      setItems: [],
    },
    setCallArg: [],
    expected: {
      single: [{ name: "singleParam", attr: { kind: "number", default: 9 } }],
      array: [
        { name: "arrayParam", attr: { kind: "number[]", default: [1, 2, 3] } },
      ],
      struct: [],
      structArray: [],
    },
  },
];

describe("filterParams", () => {
  testCases.forEach(runTestCase);
});
