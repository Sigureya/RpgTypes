import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Command_ControlVariables_FromVariable } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromVariable,
  OPERATION_ADD,
  OPERATION_DIVIDE,
  OPERATION_MOD,
  OPERATION_MULTIPLY,
  OPERATION_SET,
  OPERATION_SUBTRACT,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_VARIABLE_VALUE = 60;
const TARGET_ID = 33;
const SOURCE_ID = 36;

interface FakeMap {
  mapId(): number;
}

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_VARIABLE_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

const createMockedMap = (): FakeMap => ({
  mapId: () => 1,
});

interface TestCase {
  description: string;
  command: Command_ControlVariables_FromVariable;
  commandLiteral: Command_ControlVariables_FromVariable;
  expectedValue: number;
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

      expect(mockedVariables.value).toHaveBeenCalledWith(TARGET_ID);
      expect(mockedVariables.value).toHaveBeenCalledWith(SOURCE_ID);
      expect(mockedVariables.value).toHaveBeenCalledTimes(2);

      expect(mockedVariables.setValue).toHaveBeenCalledWith(
        TARGET_ID,
        testCase.expectedValue,
      );
      expect(mockedVariables.setValue).toHaveBeenCalledTimes(1);

      expect(randomInt).toHaveBeenCalledTimes(1);
    });
  });
};

const testCases: TestCase[] = [
  {
    description: "variable operand set",
    command: makeCommandVariableFromVariable({
      startId: TARGET_ID,
      variableId: SOURCE_ID,
      operation: OPERATION_SET,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_SET, 1, SOURCE_ID],
    },
    expectedValue: MOCK_VARIABLE_VALUE,
  },
  {
    description: "variable operand add",
    command: makeCommandVariableFromVariable({
      startId: TARGET_ID,
      variableId: SOURCE_ID,
      operation: OPERATION_ADD,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_ADD, 1, SOURCE_ID],
    },
    expectedValue: MOCK_VARIABLE_VALUE + MOCK_VARIABLE_VALUE,
  },
  {
    description: "variable operand subtract",
    command: makeCommandVariableFromVariable({
      startId: TARGET_ID,
      variableId: SOURCE_ID,
      operation: OPERATION_SUBTRACT,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_SUBTRACT, 1, SOURCE_ID],
    },
    expectedValue: MOCK_VARIABLE_VALUE - MOCK_VARIABLE_VALUE,
  },
  {
    description: "variable operand multiply",
    command: makeCommandVariableFromVariable({
      startId: TARGET_ID,
      variableId: SOURCE_ID,
      operation: OPERATION_MULTIPLY,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_MULTIPLY, 1, SOURCE_ID],
    },
    expectedValue: MOCK_VARIABLE_VALUE * MOCK_VARIABLE_VALUE,
  },
  {
    description: "variable operand divide",
    command: makeCommandVariableFromVariable({
      startId: TARGET_ID,
      variableId: SOURCE_ID,
      operation: OPERATION_DIVIDE,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_DIVIDE, 1, SOURCE_ID],
    },
    expectedValue: Math.floor(MOCK_VARIABLE_VALUE / MOCK_VARIABLE_VALUE),
  },
  {
    description: "variable operand mod",
    command: makeCommandVariableFromVariable({
      startId: TARGET_ID,
      variableId: SOURCE_ID,
      operation: OPERATION_MOD,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [TARGET_ID, TARGET_ID, OPERATION_MOD, 1, SOURCE_ID],
    },
    expectedValue: MOCK_VARIABLE_VALUE % MOCK_VARIABLE_VALUE,
  },
];

describe("operateValue - variable", () => {
  testCases.forEach(runTestCase);
});
