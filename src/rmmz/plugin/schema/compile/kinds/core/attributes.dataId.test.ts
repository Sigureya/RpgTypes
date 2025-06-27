import { describe, expect, test } from "vitest";
import { compileAttributes } from "./attributes";
import type { Token } from "./parse/types/token";
import type { StructParamPrimitive } from "./primitiveParams";

interface TestCase {
  caseName: string;
  input: Token[];
  expected: Extract<StructParamPrimitive, { default: number[] }>;
}

const runTestCases = (groupName: string, testCases: TestCase[]) => {
  describe(`compileAttributes - ${groupName}`, () => {
    testCases.forEach(({ caseName, input, expected }) => {
      test(`${caseName} - ${expected.kind}`, () => {
        const result = compileAttributes(input);
        expect(result).toEqual(expected);
      });
    });
  });
};
runTestCases("numberArray", [
  {
    caseName: "最小セット(actor[])",
    input: [
      { keyword: "type", value: "actor[]" },
      { keyword: "default", value: `["1", "2", "3"]` },
    ],
    expected: {
      kind: "actor[]",
      default: [1, 2, 3],
    },
  },
  {
    caseName: "空の配列(actor[])",
    input: [
      { keyword: "type", value: "actor[]" },
      { keyword: "default", value: `[]` },
    ],
    expected: {
      kind: "actor[]",
      default: [],
    },
  },
  {
    caseName: "最小セット(number[])",
    input: [
      { keyword: "type", value: "number[]" },
      { keyword: "default", value: `["1", "2", "3"]` },
    ],
    expected: {
      kind: "number[]",
      default: [1, 2, 3],
    },
  },
  {
    caseName: "空の配列(number[])",
    input: [
      { keyword: "type", value: "number[]" },
      { keyword: "default", value: `[]` },
    ],
    expected: {
      kind: "number[]",
      default: [],
    },
  },
]);
