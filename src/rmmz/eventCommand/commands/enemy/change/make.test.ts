import { describe, expect, test } from "vitest";
import {
  makeCommandGainEnemyMP,
  makeCommandGainEnemyMP2,
  makeCommandGainEnemyMPDirect,
  makeCommandGainEnemyMPVV,
  makeCommandLoseEnemyMP,
  makeCommandLoseEnemyMPDirect,
  makeCommandLoseEnemyMPVV,
} from "./make";
import type {
  Command_ChangeEnemyMP,
  ParamObject_ChangeEnemyMp2,
} from "./types";

interface TestCase {
  name: string;
  expected: Command_ChangeEnemyMP;
  commands: Command_ChangeEnemyMP[];
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    testCase.commands.forEach((command, index) => {
      test(`should match expected command for command index ${index}`, () => {
        expect(command).toEqual(testCase.expected);
      });
    });
  });
};

const vvParam: ParamObject_ChangeEnemyMp2 = {
  enemyIndexVariableId: 9,
  operandVariableId: 12,
};

const testCases: TestCase[] = [
  {
    name: "makeCommandGainEnemyMP direct/variable operand",
    expected: {
      code: 332,
      indent: 0,
      parameters: [2, 0, 0, 155],
    },
    commands: [
      makeCommandGainEnemyMP({
        targetIndex: 2,
        operand: { mode: "direct", value: 155 },
      }),
    ],
  },
  {
    name: "makeCommandLoseEnemyMP each target variable operand",
    expected: {
      code: 332,
      indent: 0,
      parameters: [-1, 1, 1, 14],
    },
    commands: [
      makeCommandLoseEnemyMP({
        operand: { mode: "variable", value: 14 },
      }),
    ],
  },
  {
    name: "makeCommandGainEnemyMP2 and VV are same payload",
    expected: {
      code: 332,
      indent: 0,
      parameters: [9, 0, 1, 12],
    },
    commands: [
      makeCommandGainEnemyMP2(vvParam),
      makeCommandGainEnemyMPVV(vvParam),
    ],
  },
  {
    name: "makeCommandLoseEnemyMPVV",
    expected: {
      code: 332,
      indent: 0,
      parameters: [9, 1, 1, 12],
    },
    commands: [makeCommandLoseEnemyMPVV(vvParam)],
  },
  {
    name: "makeCommandGainEnemyMPDirect",
    expected: {
      code: 332,
      indent: 0,
      parameters: [4, 0, 0, 300],
    },
    commands: [
      makeCommandGainEnemyMPDirect({ enemyIndex: 4, operandValue: 300 }),
    ],
  },
  {
    name: "makeCommandLoseEnemyMPDirect",
    expected: {
      code: 332,
      indent: 0,
      parameters: [4, 1, 0, 300],
    },
    commands: [
      makeCommandLoseEnemyMPDirect({ enemyIndex: 4, operandValue: 300 }),
    ],
  },
  {
    name: "indent is reflected",
    expected: {
      code: 332,
      indent: 2,
      parameters: [1, 0, 0, 50],
    },
    commands: [
      makeCommandGainEnemyMP(
        {
          targetIndex: 1,
          operand: { mode: "direct", value: 50 },
        },
        2,
      ),
    ],
  },
];

testCases.forEach(runTestCase);
