import { describe, expect, test } from "vitest";
import type {
  Command_ControlVariables,
  Operand_Constatant,
  Operand_EnemyStatus,
  Operand_ItemData,
} from "@RpgTypes/rmmz";
import {
  makeCommandVariableFromEnemyData,
  makeCommandVariableFromItemData,
} from "@RpgTypes/rmmz";
import { makeCommandVariableFromConstant } from "@RpgTypes/rmmz/eventCommand/commands/variable/make";
import { ENEMY_PARAM_INDEX } from "@RpgTypes/rmmz/eventCommand/commands/variable/types/enemy/dataSource";
import type { VVV } from "./types";
import { extractVariableFromControlVariables } from "./variableControle";

interface TestCase {
  caseName: string;
  command: {
    input: Command_ControlVariables;
    expected: Command_ControlVariables;
  };
  expectedResult: VVV;
}

const runTestCase = ({ caseName, expectedResult, command }: TestCase) => {
  describe(caseName, () => {
    test("", () => {
      expect(command.input).toEqual(command.expected);
    });
    test("range", () => {
      const result: VVV = extractVariableFromControlVariables(command.input);
      expect(result).toEqual(expectedResult);
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "fromConstant",
    command: {
      input: makeCommandVariableFromConstant(
        {
          startId: 1,
        },
        { value: 5 }
      ) satisfies Command_ControlVariables<Operand_Constatant>,
      expected: {
        code: 122,
        indent: 0,
        parameters: [1, 1, 0, 0, 5],
      } satisfies Command_ControlVariables<Operand_Constatant>,
    },
    expectedResult: { read: [], write: [{ code: 122, variableId: 1 }] },
  },
  {
    caseName: "fromEnemy",
    command: {
      input: makeCommandVariableFromEnemyData(
        { startId: 46, endId: 48 },
        { index: 22, param: "ATK" }
      ),
      expected: {
        code: 122,
        indent: 0,
        parameters: [46, 48, 0, 3, 4, 22, ENEMY_PARAM_INDEX.ATK],
      } satisfies Command_ControlVariables<Operand_EnemyStatus>,
    },
    expectedResult: {
      read: [],
      write: [
        { code: 122, variableId: 46 },
        { code: 122, variableId: 47 },
        { code: 122, variableId: 48 },
      ],
    },
  },
  {
    caseName: "fromItem",
    command: {
      input: makeCommandVariableFromItemData(
        { startId: 10, endId: 10 },
        { itemId: 321 },
        { indent: 6 }
      ),
      expected: {
        code: 122,
        indent: 6,
        parameters: [10, 10, 0, 3, 0, 321] satisfies Operand_ItemData,
      },
    },
    expectedResult: {
      read: [],
      write: [{ code: 122, variableId: 10 }],
    },
  },
];

testCases.forEach(runTestCase);
