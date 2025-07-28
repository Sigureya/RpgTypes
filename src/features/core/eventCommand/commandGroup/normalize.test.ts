import { describe, test, expect } from "vitest";
import type { EventCommand } from "@RpgTypes/rmmz";
import {
  COMMENT_HEAD,
  SCRIPT_EVAL,
  makeCommandShowMessage,
  makeCommandShowMessageBody,
} from "@RpgTypes/rmmz";
import { normalizeCommands } from "./normalize";

interface TestCase {
  caseName: string;
  input: EventCommand[];
  expected: EventCommand[];
}

const testCaseEmpty: TestCase[] = [
  {
    caseName: "empty",
    input: [],
    expected: [],
  },
];

const testCasesMessage: TestCase[] = [
  {
    caseName: "single showMessage",
    input: [
      makeCommandShowMessage({
        speakerName: "spkeaker",
      }),
      makeCommandShowMessageBody("message"),
    ],
    expected: [
      makeCommandShowMessage({
        speakerName: "spkeaker",
      }),
      makeCommandShowMessageBody("message"),
    ],
  },
  {
    caseName: "single scriptEval",
    input: [
      {
        code: SCRIPT_EVAL,
        indent: 0,
        parameters: ["script"],
      },
    ],
    expected: [
      {
        code: SCRIPT_EVAL,
        indent: 0,
        parameters: ["script"],
      },
    ],
  },
];

const testCasesComment: TestCase[] = [
  {
    caseName: "single comment",
    input: [
      {
        code: COMMENT_HEAD,
        indent: 0,
        parameters: ["comment"],
      },
    ],
    expected: [
      {
        code: COMMENT_HEAD,
        indent: 0,
        parameters: ["comment"],
      },
    ],
  },
  {
    caseName: "comment with empty body",
    input: [
      {
        code: COMMENT_HEAD,
        indent: 0,
        parameters: ["it is comment"],
      },
    ],
    expected: [
      {
        code: COMMENT_HEAD,
        indent: 0,
        parameters: ["it is comment"],
      },
    ],
  },
];

const testCaseScript: TestCase[] = [
  {
    caseName: "script with empty body",
    input: [
      {
        code: SCRIPT_EVAL,
        indent: 0,
        parameters: [""],
      },
    ],
    expected: [
      {
        code: SCRIPT_EVAL,
        indent: 0,
        parameters: [""],
      },
    ],
  },
];

const runTestCases = (caseGroup: string, list: TestCase[]) => {
  describe(caseGroup, () => {
    list.forEach(({ caseName, input, expected }) => {
      test(caseName, () => {
        const result = normalizeCommands(input);
        expect(result).toEqual(expected);
      });
    });
  });
};

runTestCases("Empty Commands", testCaseEmpty);
runTestCases("Message Commands", testCasesMessage);
runTestCases("Comment Commands", testCasesComment);
runTestCases("Script Commands", testCaseScript);
