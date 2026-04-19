import { test, expect, describe } from "vitest";
import { categorizeNote } from "./note";
import type { KeyValuePair } from "./types";

interface TestCase {
  name: string;
  input: KeyValuePair[];
  expected: Map<string, KeyValuePair[]>;
}

const runTestCases = (testCase: TestCase) => {
  test(testCase.name, () => {
    const result = categorizeNote(testCase.input);
    expect(result).toEqual(testCase.expected);
  });
};

const testCases: TestCase[] = [
  {
    name: "emptyInput",
    input: [],
    expected: new Map(),
  },
  {
    name: "singleCategory",
    input: [
      { key: "category1", value: "value1" },
      { key: "category1", value: "value2" },
    ],
    expected: new Map<string, KeyValuePair[]>([
      [
        "category1",
        [
          { key: "category1", value: "value1" },
          { key: "category1", value: "value2" },
        ],
      ],
    ]),
  },
];

describe("categorizeNote", () => {
  testCases.forEach(runTestCases);
});
