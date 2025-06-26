import { describe, expect, test } from "vitest";
import { compileAttributes } from "./attributes";
import type { Token } from "./parse/types/token";
import type { StructParamPrimitive } from "./primitiveParams";

interface TestCase {
  caseName: string;
  input: Token[];
  expected: StructParamPrimitive;
}

const runTestCases = (testCases: TestCase[]) => {
  testCases.forEach(({ caseName, input, expected }) => {
    test(`${caseName} - ${expected.kind}`, () => {
      const result = compileAttributes(input);
      expect(result).toEqual(expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "string",
    input: [
      { keyword: "type", value: "string" },
      { keyword: "default", value: "xyz" },
    ],
    expected: {
      kind: "string",
      default: "xyz",
    },
  },
  {
    caseName: "boolean",
    input: [
      { keyword: "type", value: "boolean" },
      { keyword: "default", value: "false" },
    ],
    expected: {
      kind: "boolean",
      default: false,
    },
  },
  {
    caseName: "number",
    input: [
      { keyword: "type", value: "number" },
      { keyword: "default", value: "0" },
    ],
    expected: {
      kind: "number",
      default: 0,
    },
  },
];

runTestCases(testCases);
