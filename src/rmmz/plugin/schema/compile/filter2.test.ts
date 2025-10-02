import { describe, expect, test } from "vitest";
import { rrr } from "./filter2";
import type { PluginParamGroups } from "./filter2Type2";
import type { PrimitiveParam } from "./kinds";
interface TestCase {
  input: Record<string, PrimitiveParam>;
  expected: PluginParamGroups;
}

const runTestCase = (testCase: TestCase) => {
  test("result", () => {
    const result = rrr(testCase.input);
    expect(result).toEqual(testCase.expected);
  });
};

const testCases: TestCase[] = [
  {
    input: {
      name: { kind: "string", default: "" },
      age: { kind: "number", default: 0 },
    },
    expected: {
      single: [
        { kind: "string", default: "" },
        { kind: "number", default: 0 },
      ],
      array: [],
      structs: [],
      structArray: [],
    },
  },
  {
    input: {
      names: { kind: "string[]", default: [] },
      id: { kind: "number", default: 0 },
    },
    expected: {
      single: [{ kind: "number", default: 0 }],
      array: [{ kind: "string[]", default: [] }],
      structs: [],
      structArray: [],
    },
  },
  {
    input: {
      singleParam: { kind: "boolean", default: false },
      structParam: { kind: "struct", default: {}, struct: "s" },
      arryaParam: { kind: "string[]", default: [] },
      structArrayParam: { kind: "struct[]", default: [], struct: "t" },
    },
    expected: {
      single: [{ kind: "boolean", default: false }],
      array: [{ kind: "string[]", default: [] }],
      structs: [{ kind: "struct", default: {}, struct: "s" }],
      structArray: [{ kind: "struct[]", default: [], struct: "t" }],
    },
  },
];

describe("rrr", () => {
  testCases.forEach(runTestCase);
});
