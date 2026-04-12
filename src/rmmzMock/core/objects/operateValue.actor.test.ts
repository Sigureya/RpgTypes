import type { MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";
import {
  OPERATION_SET,
  OPERATION_ADD,
  OPERATION_SUBTRACT,
  OPERATION_MULTIPLY,
} from "@RpgTypes/libs";
import type {
  Command_ControlVariables,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromActorAgi,
  makeCommandVariableFromActorAtk,
  makeCommandVariableFromActorCurrentExp,
  makeCommandVariableFromActorCurrentHp,
  makeCommandVariableFromActorCurrentLevel,
  makeCommandVariableFromActorCurrentMp,
  makeCommandVariableFromActorCurrentTp,
  makeCommandVariableFromActorDef,
  makeCommandVariableFromActorLuk,
  makeCommandVariableFromActorMat,
  makeCommandVariableFromActorMaxHp,
  makeCommandVariableFromActorMaxMp,
  makeCommandVariableFromActorMdf,
} from "@RpgTypes/rmmz/eventCommand";
import type { Command_ControlVariables_FromActor } from "@RpgTypes/rmmz/eventCommand/commands/variable/actor/types";
import { STATUS } from "@RpgTypes/rmmz/eventCommand/commands/variable/types/actor/dataSource";
import type { Rmmz_Actor } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

const ACTOR_ID = 7;
const VAR_ID = 10;

const MOCK_ACTOR_HP = 2000;
const MOCK_ACTOR_MP = 1000;
const MOCK_ACTOR_TP = 500;
const MOCK_ACTOR_LEVEL = 10;
const MOCK_ACTOR_EXP = 16000;
const MOCK_ACTOR_PARAM_VALUE = 30;

const MOCK_OLD_VALUE = 24;

type FakeActor = Pick<
  Rmmz_Actor,
  "currentExp" | "param" | "level" | "hp" | "mp" | "tp"
>;

interface FakeActors {
  actor(actorId: number): FakeActor | null;
}

const createFakeMap = (): FakeMap => ({
  mapId: () => 1,
});
const createMockedActors = (
  actor: FakeActor | null,
): MockedObject<FakeActors> => ({
  actor: vi.fn().mockReturnValue(actor),
});

const createMockedActor = (): MockedObject<FakeActor> => ({
  hp: MOCK_ACTOR_HP,
  mp: MOCK_ACTOR_MP,
  tp: MOCK_ACTOR_TP,
  level: MOCK_ACTOR_LEVEL,
  currentExp: vi.fn().mockReturnValue(MOCK_ACTOR_EXP),
  param: vi.fn().mockReturnValue(MOCK_ACTOR_PARAM_VALUE),
});

const createMockedVariable = (): MockedObject<Rmmz_Variables> => ({
  clear: vi.fn(),
  value: vi.fn().mockReturnValue(MOCK_OLD_VALUE),
  setValue: vi.fn(),
  onChange: vi.fn(),
});

interface TestCase {
  actorId: number;
  description: string;
  paramIndex?: number;
  whenActorNullValue: number;
  command: Command_ControlVariables | Command_ControlVariables_FromActor;
  commandLiteral: Command_ControlVariables | Command_ControlVariables_FromActor;
  setValues: { id: number; value: number }[];
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.description, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });

    test("actor null", () => {
      const mockedActors = createMockedActors(null);
      const mockedVariables = createMockedVariable();
      vi.stubGlobal("$gameActors", mockedActors);
      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameMap", createFakeMap());

      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral as EventCommand], 0);
      interpreter.executeCommand();
      expect(mockedVariables.setValue).toHaveBeenCalledTimes(
        testCase.setValues.length,
      );
      testCase.setValues.forEach((entry) => {
        expect(mockedVariables.setValue).toHaveBeenCalledWith(
          entry.id,
          testCase.whenActorNullValue,
        );
      });
    });

    test("call test", () => {
      const mockBattler = createMockedActor();
      const mockedActors = createMockedActors(mockBattler);
      const mockedVariables = createMockedVariable();
      vi.stubGlobal("$gameActors", mockedActors);
      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameMap", createFakeMap());

      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral as EventCommand], 0);
      interpreter.executeCommand();
      expect(mockedActors.actor).toHaveBeenCalledWith(testCase.actorId);
      if (testCase.paramIndex === undefined) {
        expect(mockBattler.param).not.toHaveBeenCalled();
      } else {
        expect(mockBattler.param).toHaveBeenCalledOnce();
        expect(mockBattler.param).toHaveBeenCalledWith(testCase.paramIndex);
      }
    });

    test("set variable value", () => {
      const mockedActors = createMockedActors(createMockedActor());
      const mockedVariables = createMockedVariable();
      vi.stubGlobal("$gameActors", mockedActors);
      vi.stubGlobal("$gameVariables", mockedVariables);
      vi.stubGlobal("$gameMap", createFakeMap());

      const randomInt: MockedObject<(max: number) => number> = vi.fn(() => 0);
      // @ts-ignore
      Math.randomInt = randomInt;

      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral as EventCommand], 0);
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
    actorId: ACTOR_ID,
    description: "Actor Level",
    command: makeCommandVariableFromActorCurrentLevel({
      actorId: ACTOR_ID,
      startId: VAR_ID,
    }),
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_LEVEL }],
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, OPERATION_SET, 3, 3, ACTOR_ID, STATUS.LEVEL],
    },
    whenActorNullValue: 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor EXP",
    command: makeCommandVariableFromActorCurrentExp(
      { actorId: ACTOR_ID, startId: VAR_ID, operation: OPERATION_ADD },
      2,
    ),
    commandLiteral: {
      code: 122,
      indent: 2,
      parameters: [VAR_ID, VAR_ID, OPERATION_ADD, 3, 3, ACTOR_ID, STATUS.EXP],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_EXP + MOCK_OLD_VALUE }],
    whenActorNullValue: 0 + MOCK_OLD_VALUE,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor HP",
    command: makeCommandVariableFromActorCurrentHp({
      actorId: ACTOR_ID,
      startId: VAR_ID,
      operation: OPERATION_SUBTRACT,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [
        VAR_ID,
        VAR_ID,
        OPERATION_SUBTRACT,
        3,
        3,
        ACTOR_ID,
        STATUS.HP,
      ],
    },
    setValues: [{ id: VAR_ID, value: MOCK_OLD_VALUE - MOCK_ACTOR_HP }],
    whenActorNullValue: MOCK_OLD_VALUE - 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor MP",
    command: makeCommandVariableFromActorCurrentMp({
      startId: VAR_ID,
      actorId: ACTOR_ID,
      operation: OPERATION_MULTIPLY,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [
        VAR_ID,
        VAR_ID,
        OPERATION_MULTIPLY,
        3,
        3,
        ACTOR_ID,
        STATUS.MP,
      ],
    },
    setValues: [{ id: VAR_ID, value: MOCK_OLD_VALUE * MOCK_ACTOR_MP }],
    whenActorNullValue: MOCK_OLD_VALUE * 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor TP",
    command: makeCommandVariableFromActorCurrentTp({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.TP],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_TP }],
    whenActorNullValue: 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor MAX_HP (param 0)",
    paramIndex: 0,
    command: makeCommandVariableFromActorMaxHp({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.MAX_HP],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_PARAM_VALUE }],
    whenActorNullValue: 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor MAX_MP (param 1)",
    paramIndex: 1,
    command: makeCommandVariableFromActorMaxMp({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.MAX_MP],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_PARAM_VALUE }],
    whenActorNullValue: 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor ATK (param 2)",
    paramIndex: 2,
    command: makeCommandVariableFromActorAtk({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.ATK],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_PARAM_VALUE }],
    whenActorNullValue: 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor DEF (param 3)",
    paramIndex: 3,
    command: makeCommandVariableFromActorDef({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.DEF],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_PARAM_VALUE }],
    whenActorNullValue: 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor MAT (param 4)",
    paramIndex: 4,
    command: makeCommandVariableFromActorMat({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.MAT],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_PARAM_VALUE }],
    whenActorNullValue: 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor MDF (param 5)",
    paramIndex: 5,
    command: makeCommandVariableFromActorMdf({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.MDF],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_PARAM_VALUE }],
    whenActorNullValue: 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor AGI (param 6)",
    paramIndex: 6,
    command: makeCommandVariableFromActorAgi({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.AGI],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_PARAM_VALUE }],
    whenActorNullValue: 0,
  },
  {
    actorId: ACTOR_ID,
    description: "Actor LUK (param 7)",
    paramIndex: 7,
    command: makeCommandVariableFromActorLuk({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.LUK],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_PARAM_VALUE }],
    whenActorNullValue: 0,
  },
];

testCases.forEach(runTestCase);
