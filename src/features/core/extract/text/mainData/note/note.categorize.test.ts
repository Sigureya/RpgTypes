import { test, expect, describe } from "vitest";
import { categorizeNote } from "./note";
import type { XX } from "./types";

interface TestCase {
  name: string;
  input: XX[];
  expected: Map<string, XX[]>;
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
      { key: "category1", text: "value1" },
      { key: "category1", text: "value2" },
    ],
    expected: new Map<string, XX[]>([
      [
        "category1",
        [
          { key: "category1", text: "value1" },
          { key: "category1", text: "value2" },
        ],
      ],
    ]),
  },
];

describe("categorizeNote", () => {
  testCases.forEach(runTestCases);
});
