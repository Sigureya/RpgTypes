import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Command_ControlVariables_FromRandom } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromRandom,
  OPERATION_ADD,
  OPERATION_DIVIDE,
  OPERATION_MOD,
  OPERATION_MULTIPLY,
  OPERATION_SET,
  OPERATION_SUBTRACT,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_OLD_VALUE = 60;
const TARGET_ID = 34;

interface FakeMap {
  mapId(): number;
}

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

const createMockedMap = (): FakeMap => ({
  mapId: () => 1,
});

interface TestCase {
  description: string;
  command: Command_ControlVariables_FromRandom;
  commandLiteral: Command_ControlVariables_FromRandom;
  setValues: { id: number; value: number }[];
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.description, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });

    test("set variable value", () => {
      const mockedVariables = createMockedVariable();
      const mockedMap = createMockedMap();
      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameMap", mockedMap);

      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], 0);
      interpreter.executeCommand();

      testCase.setValues.forEach((entry) => {
        expect(mockedVariables.value).toHaveBeenCalledWith(entry.id);
        expect(mockedVariables.setValue).toHaveBeenCalledWith(
          entry.id,
          entry.value,
        );
      });
      expect(mockedVariables.value).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      expect(mockedVariables.setValue).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      expect(randomInt).toHaveBeenCalledTimes(testCase.setValues.length);
    });
  });
};

const testCases: TestCase[] = [
  {
    description: "random set",
    command: makeCommandVariableFromRandom({
      startId: TARGET_ID,
      min: 11,
      max: 14,
      operation: OPERATION_SET,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_SET, 2, 11, 14],
    },
    setValues: [{ id: TARGET_ID, value: 11 }],
  },
  {
    description: "random add",
    command: makeCommandVariableFromRandom({
      startId: TARGET_ID,
      min: 3,
      max: 7,
      operation: OPERATION_ADD,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_ADD, 2, 3, 7],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_OLD_VALUE + 3 }],
  },
  {
    description: "random subtract",
    command: makeCommandVariableFromRandom({
      startId: TARGET_ID,
      min: 4,
      max: 9,
      operation: OPERATION_SUBTRACT,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_SUBTRACT, 2, 4, 9],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_OLD_VALUE - 4 }],
  },
  {
    description: "random multiply",
    command: makeCommandVariableFromRandom({
      startId: TARGET_ID,
      min: 4,
      max: 9,
      operation: OPERATION_MULTIPLY,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_MULTIPLY, 2, 4, 9],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_OLD_VALUE * 4 }],
  },
  {
    description: "random divide",
    command: makeCommandVariableFromRandom({
      startId: TARGET_ID,
      min: 4,
      max: 9,
      operation: OPERATION_DIVIDE,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_DIVIDE, 2, 4, 9],
    },
    setValues: [{ id: TARGET_ID, value: Math.floor(MOCK_OLD_VALUE / 4) }],
  },
  {
    description: "random mod",
    command: makeCommandVariableFromRandom({
      startId: TARGET_ID,
      min: 4,
      max: 9,
      operation: OPERATION_MOD,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_MOD, 2, 4, 9],
    },
    setValues: [{ id: TARGET_ID, value: MOCK_OLD_VALUE % 4 }],
  },
];

describe("operateValue - random", () => {
  testCases.forEach(runTestCase);
});
