import { describe, expect, test, vi } from "vitest";
import type { JSONValue } from "@sigureya/rmmz-plugin-schema";
import { replacePluginValue } from "@sigureya/rmmz-plugin-schema";

const OLD_TEXT_A = "oldTextA";
const NEW_TEXT_A = "newTextA";
const OLD_TEXT_B = "oldTextB";
const NEW_TEXT_B = "newTextB";
const OLD_TEXT_C = "oldTextC";
const NEW_TEXT_C = "newTextC";

const IGNORE_TEXT = "ignoreText";

const NON_REPLACE_TEXT = "nonReplaceText";

const dic = new Map<string, string>([
  [OLD_TEXT_A, NEW_TEXT_A],
  [OLD_TEXT_B, NEW_TEXT_B],
  [OLD_TEXT_C, NEW_TEXT_C],
]);

interface TestCase {
  name: string;
  input: Record<string, JSONValue>;
  expected: Record<string, JSONValue>;
  numCalls?: number;
  paths: string[][];
  oldValues: string[];
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    test("replaceParamV4", () => {
      const result = replacePluginValue(
        testCase.input,
        testCase.paths,
        (value) => {
          return dic.get(value);
        },
      );
      expect(result).toEqual(testCase.expected);
    });
    test("replaceParamV4", () => {
      const fn = vi.fn((value: string) => {
        return dic.get(value);
      });
      replacePluginValue(testCase.input, testCase.paths, fn);
      expect(fn).not.toHaveBeenCalledWith(IGNORE_TEXT);
      testCase.oldValues.forEach((oldValue) => {
        expect(fn).toHaveBeenCalledWith(oldValue);
      });
      expect(fn).toHaveBeenCalledTimes(
        testCase.numCalls ?? testCase.oldValues.length,
      );
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "Test case 1",
    input: {
      param1: OLD_TEXT_A,
      param2: OLD_TEXT_B,
    },
    expected: {
      param1: NEW_TEXT_A,
      param2: NEW_TEXT_B,
    },
    oldValues: [OLD_TEXT_A, OLD_TEXT_B],
    numCalls: 2,
    paths: [["param1"], ["param2"]],
  },
  {
    name: "Test case 2",
    input: {
      image: IGNORE_TEXT,
      text: OLD_TEXT_B,
    },
    expected: {
      image: IGNORE_TEXT,
      text: NEW_TEXT_B,
    },
    oldValues: [OLD_TEXT_B],
    paths: [["text"]],
  },
  {
    name: "Test case 3",
    oldValues: [OLD_TEXT_A],
    paths: [["enemy", "name"]],
    input: {
      enemy: {
        name: OLD_TEXT_A,
        image: IGNORE_TEXT,
      },
    },
    expected: {
      enemy: {
        name: NEW_TEXT_A,
        image: IGNORE_TEXT,
      },
    },
  },
  {
    name: "Test case 4",
    oldValues: [NON_REPLACE_TEXT, NON_REPLACE_TEXT, OLD_TEXT_A],
    paths: [["names", "[]"]],
    input: {
      names: [NON_REPLACE_TEXT, NON_REPLACE_TEXT, OLD_TEXT_A],
    },
    expected: {
      names: [NON_REPLACE_TEXT, NON_REPLACE_TEXT, NEW_TEXT_A],
    },
  },
  {
    name: "Test case 5",
    numCalls: 5,
    oldValues: [OLD_TEXT_A, OLD_TEXT_B, NON_REPLACE_TEXT, OLD_TEXT_C],

    paths: [
      ["nameTables", "[]", "names", "[]"],
      ["nameTables", "[]", "listName"],
    ],
    input: {
      nameTables: [
        {
          listName: OLD_TEXT_A,
          variableId: 1,
          names: [OLD_TEXT_A, OLD_TEXT_B],
        },
        {
          listName: NON_REPLACE_TEXT,
          variableId: 2,
          names: [OLD_TEXT_C],
        },
      ],
    },
    expected: {
      nameTables: [
        {
          listName: NEW_TEXT_A,
          variableId: 1,
          names: [NEW_TEXT_A, NEW_TEXT_B],
        },
        {
          listName: NON_REPLACE_TEXT,
          variableId: 2,
          names: [NEW_TEXT_C],
        },
      ],
    },
  },
];

testCases.forEach(runTestCase);
