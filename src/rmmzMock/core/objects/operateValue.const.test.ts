import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Command_ControlVariables_FromConstant } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromConstant,
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
  command: Command_ControlVariables_FromConstant;
  commandLiteral: Command_ControlVariables_FromConstant;
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
    description: "constant set single variable",
    command: makeCommandVariableFromConstant(
      { startId: 1, value: 123, operation: OPERATION_SET },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [1, 1, OPERATION_SET, 0, 123],
    },
    setValues: [{ id: 1, value: 123 }],
  },
  {
    description: "constant set range [10, 12]",
    command: makeCommandVariableFromConstant(
      { startId: 10, endId: 12, value: 123 },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [10, 12, OPERATION_SET, 0, 123],
    },
    setValues: [
      { id: 10, value: 123 },
      { id: 11, value: 123 },
      { id: 12, value: 123 },
    ],
  },
  {
    description: "constant add single variable",
    command: makeCommandVariableFromConstant(
      { startId: 189, value: 123, operation: OPERATION_ADD },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, OPERATION_ADD, 0, 123],
    },
    setValues: [{ id: 189, value: MOCK_OLD_VALUE + 123 }],
  },
  {
    description: "constant add range [50, 52]",
    command: makeCommandVariableFromConstant(
      { startId: 50, endId: 52, value: 50, operation: OPERATION_ADD },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [50, 52, OPERATION_ADD, 0, 50],
    },
    setValues: [
      { id: 50, value: MOCK_OLD_VALUE + 50 },
      { id: 51, value: MOCK_OLD_VALUE + 50 },
      { id: 52, value: MOCK_OLD_VALUE + 50 },
    ],
  },
  {
    description: "constant subtract single variable",
    command: makeCommandVariableFromConstant(
      { startId: 189, value: 123, operation: OPERATION_SUBTRACT },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, OPERATION_SUBTRACT, 0, 123],
    },
    setValues: [{ id: 189, value: MOCK_OLD_VALUE - 123 }],
  },
  {
    description: "constant subtract range [60, 62]",
    command: makeCommandVariableFromConstant(
      { startId: 60, endId: 62, value: 10, operation: OPERATION_SUBTRACT },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [60, 62, OPERATION_SUBTRACT, 0, 10],
    },
    setValues: [
      { id: 60, value: MOCK_OLD_VALUE - 10 },
      { id: 61, value: MOCK_OLD_VALUE - 10 },
      { id: 62, value: MOCK_OLD_VALUE - 10 },
    ],
  },
  {
    description: "constant multiply single variable",
    command: makeCommandVariableFromConstant(
      { startId: 189, value: 12, operation: OPERATION_MULTIPLY },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, OPERATION_MULTIPLY, 0, 12],
    },
    setValues: [{ id: 189, value: MOCK_OLD_VALUE * 12 }],
  },
  {
    description: "constant multiply range [70, 72]",
    command: makeCommandVariableFromConstant(
      { startId: 70, endId: 72, value: 2, operation: OPERATION_MULTIPLY },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [70, 72, OPERATION_MULTIPLY, 0, 2],
    },
    setValues: [
      { id: 70, value: MOCK_OLD_VALUE * 2 },
      { id: 71, value: MOCK_OLD_VALUE * 2 },
      { id: 72, value: MOCK_OLD_VALUE * 2 },
    ],
  },
  {
    description: "constant divide single variable",
    command: makeCommandVariableFromConstant(
      { startId: 189, value: 15, operation: OPERATION_DIVIDE },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, OPERATION_DIVIDE, 0, 15],
    },
    setValues: [{ id: 189, value: Math.floor(MOCK_OLD_VALUE / 15) }],
  },
  {
    description: "constant divide range [80, 82]",
    command: makeCommandVariableFromConstant(
      { startId: 80, endId: 82, value: 6, operation: OPERATION_DIVIDE },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [80, 82, OPERATION_DIVIDE, 0, 6],
    },
    setValues: [
      { id: 80, value: Math.floor(MOCK_OLD_VALUE / 6) },
      { id: 81, value: Math.floor(MOCK_OLD_VALUE / 6) },
      { id: 82, value: Math.floor(MOCK_OLD_VALUE / 6) },
    ],
  },
  {
    description: "constant mod single variable",
    command: makeCommandVariableFromConstant(
      { startId: 189, value: 12, operation: OPERATION_MOD },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [189, 189, OPERATION_MOD, 0, 12],
    },
    setValues: [{ id: 189, value: MOCK_OLD_VALUE % 12 }],
  },
  {
    description: "constant mod range [90, 92]",
    command: makeCommandVariableFromConstant(
      { startId: 90, endId: 92, value: 7, operation: OPERATION_MOD },
      0,
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [90, 92, OPERATION_MOD, 0, 7],
    },
    setValues: [
      { id: 90, value: MOCK_OLD_VALUE % 7 },
      { id: 91, value: MOCK_OLD_VALUE % 7 },
      { id: 92, value: MOCK_OLD_VALUE % 7 },
    ],
  },
  {
    description: "constant set with indent level 2",
    command: makeCommandVariableFromConstant(
      { startId: 2, value: 999, operation: OPERATION_SET },
      2,
    ),
    commandLiteral: {
      code: 122,
      indent: 2,
      parameters: [2, 2, OPERATION_SET, 0, 999],
    },
    setValues: [{ id: 2, value: 999 }],
  },
  {
    description: "constant add with indent level 3",
    command: makeCommandVariableFromConstant(
      { startId: 100, value: 456, operation: OPERATION_ADD },
      3,
    ),
    commandLiteral: {
      code: 122,
      indent: 3,
      parameters: [100, 100, OPERATION_ADD, 0, 456],
    },
    setValues: [{ id: 100, value: MOCK_OLD_VALUE + 456 }],
  },
];

describe("operateValue - constant", () => {
  testCases.forEach(runTestCase);
});
