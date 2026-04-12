import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ControlVariables,
  Command_ControlVariables_FromParty,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromMapId,
  makeCommandVariableFromRandom,
  makeCommandVariableFromVariable,
  OPERATION_SET,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_MAP_ID = 123456 as const;

const MOCK_OLD_VALUE = 60;

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

const makeMockMap = (): FakeMap => ({
  mapId: () => MOCK_MAP_ID,
});

const createMockedInterpreter = () => {
  const inter = new Game_Interpreter();
  const keys: (keyof Game_Interpreter)[] = ["gameDataOperand"];
  keys.forEach((key) => {
    vi.spyOn(inter, key);
  });
  return inter;
};

const createMockedObjects = () => {
  return {
    mockedMap: makeMockMap(),
    mockedVariables: createMockedVariable(),
  };
};

interface TestCase {
  testName: string;
  valueCallCount?: number;
  setValues: {
    value: number;
    id: number;
  }[];
  // 変数操作コマンド。ここには生成関数の戻り値を置く
  command: Command_ControlVariables | Command_ControlVariables_FromParty;
  // 数値直書き。生成関数のバグと値のバグを切り分けるためにある
  commandLiteral: Command_ControlVariables;
  additionalTests?: ((testCase: TestCase) => void)[];
}

const stubGlobal = (mocks: ReturnType<typeof createMockedObjects>) => {
  vi.stubGlobal("$gameMap", mocks.mockedMap);
  vi.stubGlobal("$gameVariables", mocks.mockedVariables);
};

const runTestCase = (testCase: TestCase) => {
  describe(`operateValue Test: ${testCase.testName}`, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
    test("value set", () => {
      const mocks = createMockedObjects();
      stubGlobal(mocks);

      const randmomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randmomInt;

      const interpreter = createMockedInterpreter();
      interpreter.setup([testCase.commandLiteral], 0);
      interpreter.executeCommand();
      testCase.setValues.forEach((entry) => {
        expect(mocks.mockedVariables.value).toHaveBeenCalledWith(entry.id);
      });
      expect(mocks.mockedVariables.value).toHaveBeenCalledTimes(
        testCase.valueCallCount ?? testCase.setValues.length,
      );
      expect(mocks.mockedVariables.setValue).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      testCase.setValues.forEach((entry) => {
        expect(mocks.mockedVariables.setValue).toHaveBeenCalledWith(
          entry.id,
          entry.value,
        );
      });
      const randCallCount: number =
        1 +
        testCase.commandLiteral.parameters[1] -
        testCase.commandLiteral.parameters[0];
      expect(randmomInt).toHaveBeenCalledTimes(randCallCount);
    });
    describe.each(testCase.additionalTests ?? [])(
      "additional tests",
      (additionalTest) => {
        additionalTest(testCase);
      },
    );
  });
};

const testCases: TestCase[] = [
  {
    testName: "variable operand set",
    valueCallCount: 2,
    setValues: [{ id: 33, value: MOCK_OLD_VALUE }],
    command: makeCommandVariableFromVariable({
      startId: 33,
      operation: OPERATION_SET,
      variableId: 36,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [33, 33, 0, 1, 36],
    },
  },
  {
    testName: "random operand set",
    setValues: [{ id: 34, value: 2 }],
    command: makeCommandVariableFromRandom(
      { startId: 34 },
      { min: 2, max: 5 },
      { operation: OPERATION_SET },
    ),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [34, 34, 0, 2, 2, 5],
    },
  },

  {
    testName: "mapId",
    setValues: [{ id: 201, value: MOCK_MAP_ID }],
    command: makeCommandVariableFromMapId({ startId: 201 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [201, 201, 0, 3, 7, 0],
    },
  },
];
describe("operateValue Tests", () => {
  testCases.forEach(runTestCase);
});
