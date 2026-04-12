import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  Command_ControlVariables,
  Command_ControlVariables_FromActor,
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
  makeCommandVariableFromActorMaxHp4,
  makeCommandVariableFromActorMaxMp,
  makeCommandVariableFromActorMdf,
  OPERATION_ADD,
  OPERATION_SET,
} from "@RpgTypes/rmmz/eventCommand";
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
  command: Command_ControlVariables | Command_ControlVariables_FromActor;
  commandLiteral: Command_ControlVariables | Command_ControlVariables_FromActor;
  setValues: { id: number; value: number }[];
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.description, () => {
    test("literal equality", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
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

      expect(mockedActors.actor).toHaveBeenCalledWith(testCase.actorId);
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
  },
  {
    actorId: ACTOR_ID,
    description: "Actor EXP",
    command: makeCommandVariableFromActorCurrentExp({
      actorId: ACTOR_ID,
      startId: VAR_ID,
      operation: OPERATION_ADD,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, OPERATION_ADD, 3, 3, ACTOR_ID, STATUS.EXP],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_EXP + MOCK_OLD_VALUE }],
  },
  {
    actorId: ACTOR_ID,
    description: "Actor HP",
    command: makeCommandVariableFromActorCurrentHp({
      actorId: ACTOR_ID,
      startId: VAR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.HP],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_HP }],
  },
  {
    actorId: ACTOR_ID,
    description: "Actor MP",
    command: makeCommandVariableFromActorCurrentMp({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.MP],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_MP }],
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
  },
  {
    actorId: ACTOR_ID,
    description: "Actor MAX_HP (param 0)",
    command: makeCommandVariableFromActorMaxHp4({
      startId: VAR_ID,
      actorId: ACTOR_ID,
    }),
    commandLiteral: {
      code: 122,
      indent: 0,
      parameters: [VAR_ID, VAR_ID, 0, 3, 3, ACTOR_ID, STATUS.MAX_HP],
    },
    setValues: [{ id: VAR_ID, value: MOCK_ACTOR_PARAM_VALUE }],
  },
  {
    actorId: ACTOR_ID,
    description: "Actor MAX_MP (param 1)",
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
  },
  {
    actorId: ACTOR_ID,
    description: "Actor ATK (param 2)",
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
  },
  {
    actorId: ACTOR_ID,
    description: "Actor DEF (param 3)",
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
  },
  {
    actorId: ACTOR_ID,
    description: "Actor MAT (param 4)",
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
  },
  {
    actorId: ACTOR_ID,
    description: "Actor MDF (param 5)",
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
  },
  {
    actorId: ACTOR_ID,
    description: "Actor AGI (param 6)",
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
  },
  {
    actorId: ACTOR_ID,
    description: "Actor LUK (param 7)",
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
  },
];

testCases.forEach(runTestCase);
