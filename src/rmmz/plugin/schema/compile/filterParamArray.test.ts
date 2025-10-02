import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { PluginParamGroups } from "./filter2Type2";
import { filterParams } from "./filterParamArray";
import type { PrimitiveParam, ScalaParam } from "./kinds";
import type { PluginParam } from "./kinds/core/types";

type MockedSet = MockedObject<Pick<ReadonlySet<string>, "has">>;

const makeMockedSet = (items: ReadonlyArray<string>): MockedSet => {
  const set: Set<string> = new Set(items);
  return {
    has: vi.fn((item: string) => set.has(item)),
  };
};

interface TestCase {
  input: {
    params: PluginParam<PrimitiveParam>[];
    setItems: ReadonlyArray<string>;
    fn: (param: PrimitiveParam) => boolean;
  };
  expected: PluginParamGroups<PrimitiveParam>;
  setCallArg: string[];
}

const runTestCase = (testCase: TestCase) => {
  describe("result", () => {
    test("result", () => {
      const mockedSet = makeMockedSet(testCase.input.setItems);
      const result = filterParams(
        testCase.input.params,
        mockedSet,
        (p): p is ScalaParam => true
      );
      expect(result).toEqual(testCase.expected);
    });
    test("set calls", () => {
      const mockedSet = makeMockedSet(testCase.input.setItems);
      filterParams(
        testCase.input.params,
        mockedSet,
        (p): p is ScalaParam => true
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
      array: [],
      single: [],
      struct: [
        { name: "structParam", attr: { kind: "struct", struct: "MyStruct" } },
      ],
      structArray: [],
    },
  },
];

describe("filterParams", () => {
  testCases.forEach(runTestCase);
});
