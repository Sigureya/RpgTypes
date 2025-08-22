import { describe, test, expect } from "vitest";
import { calculateRPN, buildExpr } from "./reversePolish";
import type { RpnCommand } from "./types";

interface TestCase {
  caseName: string;
  variables: Record<string, number>;
  commands: ReadonlyArray<RpnCommand>;
  expected: {
    value: number;
    expr: string;
  };
}

const runTestCase = ({ caseName, commands, expected, variables }: TestCase) => {
  describe(caseName, () => {
    test(`calculates RPN correctly`, () => {
      const result: number = calculateRPN(commands, variables);
      expect(result).toBe(expected.value);
    });
    test(`builds expression correctly`, () => {
      const expr: string = buildExpr(commands);
      expect(expr).toBe(expected.expr);
    });
  });
};

const testCase: TestCase[] = [
  {
    caseName: "Simple Add",
    variables: {
      a: 2,
      b: 3,
    },
    expected: {
      value: 5,
      expr: "a + b",
    },
    commands: [
      { rpn: "value", name: "a" },
      { rpn: "value", name: "b" },
      { rpn: "add" },
    ],
  },
  {
    caseName: "simple Subtract",
    variables: {
      a: 5,
      b: 3,
    },
    expected: {
      value: 2,
      expr: "a - b",
    },
    commands: [
      { rpn: "value", name: "a" },
      { rpn: "value", name: "b" },
      { rpn: "subtract" },
    ],
  },

  {
    caseName: "Simple Multiply",
    variables: {
      a: 2,
      b: 3,
    },
    expected: {
      value: 6,
      expr: "a * b",
    },
    commands: [
      { rpn: "value", name: "a" },
      { rpn: "value", name: "b" },
      { rpn: "multiply" },
    ],
  },
];

testCase.forEach((test) => {
  runTestCase(test);
});
