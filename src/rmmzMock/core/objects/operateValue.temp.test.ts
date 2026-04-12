import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ControlVariables,
  Command_ControlVariables_FromLastData,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableDataLastActorId,
  makeCommandVariableFromLastEnemyIndex,
  makeCommandVariableFromLastTargetActorId,
  makeCommandVariableFromLastTargetEnemyIndex,
  makeCommandVariableFromLastUsedItemId,
  makeCommandVariableFromLastUsedSkillId,
} from "@RpgTypes/rmmz/eventCommand";
import { VARIABLE_SRC_LAST } from "@RpgTypes/rmmz/eventCommand/commands/variable/types/last/dataSource";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import { Game_Interpreter } from "./rmmz_objects";

const MOCK_LAST_VALUE = 789;
const MOCK_OLD_VALUE = 60;

interface FakeTemp {
  lastActionData(dataType: number): number;
}

interface FakeMap {
  mapId(): number;
}

const createMockTemp = (): MockedObject<FakeTemp> => ({
  lastActionData: vi.fn().mockReturnValue(MOCK_LAST_VALUE),
});

const createMockMap = (): FakeMap => ({
  mapId: () => 1,
});

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

const createMockedInterpreter = () => {
  return new Game_Interpreter();
};

const createMockedObjects = () => {
  return {
    mockedMap: createMockMap(),
    mockedVariables: createMockedVariable(),
    mockTemp: createMockTemp(),
  };
};

const stubGlobal = (mocks: ReturnType<typeof createMockedObjects>) => {
  vi.stubGlobal("$gameMap", mocks.mockedMap);
  vi.stubGlobal("$gameVariables", mocks.mockedVariables);
  vi.stubGlobal("$gameTemp", mocks.mockTemp);
};

interface TestCase {
  description: string;
  // 変数操作コマンド。ここには生成関数の戻り値を置く
  command: Command_ControlVariables | Command_ControlVariables_FromLastData;
  // 数値直書き。生成関数のバグと値のバグを切り分けるためにある
  commandLiteral:
    | Command_ControlVariables
    | Command_ControlVariables_FromLastData;
  setValues: {
    value: number;
    id: number;
  }[];
  lastDataParam: number;
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.description, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });

    test("set variable value", () => {
      const mocks = createMockedObjects();
      stubGlobal(mocks);

      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = createMockedInterpreter();
      interpreter.setup([testCase.commandLiteral as EventCommand], 0);
      interpreter.executeCommand();

      testCase.setValues.forEach((entry) => {
        expect(mocks.mockedVariables.value).toHaveBeenCalledWith(entry.id);
        expect(mocks.mockedVariables.setValue).toHaveBeenCalledWith(
          entry.id,
          entry.value,
        );
      });
      expect(mocks.mockedVariables.value).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      expect(mocks.mockedVariables.setValue).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      expect(randomInt).toHaveBeenCalledTimes(testCase.setValues.length);
    });

    test("temp access", () => {
      const mocks = createMockedObjects();
      stubGlobal(mocks);

      const interpreter = createMockedInterpreter();
      interpreter.setup([testCase.command as EventCommand], 0);
      interpreter.executeCommand();

      expect(mocks.mockTemp.lastActionData).toHaveBeenCalledWith(
        testCase.lastDataParam,
      );
      expect(mocks.mockTemp.lastActionData).toHaveBeenCalledOnce();
    });
  });
};

const testCases: TestCase[] = [
  {
    description: "USED_SKILL_ID",
    command: makeCommandVariableFromLastUsedSkillId({ startId: 11 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [11, 11, 0, 3, 8, 0],
    },
    setValues: [{ id: 11, value: MOCK_LAST_VALUE }],
    lastDataParam: VARIABLE_SRC_LAST.USED_SKILL_ID,
  },
  {
    description: "USED_ITEM_ID",
    command: makeCommandVariableFromLastUsedItemId({ startId: 12 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [12, 12, 0, 3, 8, 1],
    },
    setValues: [{ id: 12, value: MOCK_LAST_VALUE }],
    lastDataParam: VARIABLE_SRC_LAST.USED_ITEM_ID,
  },
  {
    description: "ACTION_ACTOR_ID",
    command: makeCommandVariableDataLastActorId({ startId: 13 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [13, 13, 0, 3, 8, 2],
    },
    setValues: [{ id: 13, value: MOCK_LAST_VALUE }],
    lastDataParam: VARIABLE_SRC_LAST.ACTION_ACTOR_ID,
  },
  {
    description: "ACTION_ENEMY_INDEX",
    command: makeCommandVariableFromLastEnemyIndex({ startId: 14 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [14, 14, 0, 3, 8, 3],
    },
    setValues: [{ id: 14, value: MOCK_LAST_VALUE }],
    lastDataParam: VARIABLE_SRC_LAST.ACTION_ENEMY_INDEX,
  },
  {
    description: "TARGET_ACTOR_ID",
    command: makeCommandVariableFromLastTargetActorId({ startId: 15 }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [15, 15, 0, 3, 8, 4],
    },
    setValues: [{ id: 15, value: MOCK_LAST_VALUE }],
    lastDataParam: VARIABLE_SRC_LAST.TARGET_ACTOR_ID,
  },
  {
    description: "TARGET_ENEMY_INDEX",
    command: makeCommandVariableFromLastTargetEnemyIndex({
      startId: 16,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [16, 16, 0, 3, 8, 5],
    },
    setValues: [{ id: 16, value: MOCK_LAST_VALUE }],
    lastDataParam: VARIABLE_SRC_LAST.TARGET_ENEMY_INDEX,
  },
  {
    description: "range write for ACTION_ACTOR_ID",
    command: makeCommandVariableDataLastActorId({
      startId: 20,
      endId: 22,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [20, 22, 0, 3, 8, 2],
    },
    setValues: [
      { id: 20, value: MOCK_LAST_VALUE },
      { id: 21, value: MOCK_LAST_VALUE },
      { id: 22, value: MOCK_LAST_VALUE },
    ],
    lastDataParam: VARIABLE_SRC_LAST.ACTION_ACTOR_ID,
  },
];

describe("operateValue - gameTemp", () => {
  testCases.forEach(runTestCase);
});
