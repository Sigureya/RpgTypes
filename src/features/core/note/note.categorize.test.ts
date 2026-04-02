import { test, expect, describe } from "vitest";
import type { NoteReadResult } from "@RpgTypes/rmmz";
import { categorizeNote } from "./note";

interface TestCase {
  name: string;
  input: NoteReadResult[];
  expected: Map<string, NoteReadResult[]>;
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
    expected: new Map([
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
