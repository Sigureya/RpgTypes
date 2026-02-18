import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import { makeCommandChangeClass } from "@RpgTypes/rmmz/eventCommand";
import { CHANGE_CLASS } from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_Actor,
  Rmmz_Actors,
  Rmmz_Battler,
} from "@RpgTypes/rmmzRuntime";
import type { FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

type FakeActors = Pick<Rmmz_Actors, "actor">;

type FakeActor = Pick<Rmmz_Actor, (typeof KEYS)[number]>;

const KEYS = [
  "changeEquipById",
  "setBattlerImage",
  "setCharacterImage",
  "setFaceImage",
  "setName",
  "changeClass",
  "chnageNickname",
  "changeProfile",
] as const satisfies Exclude<keyof Rmmz_Actor, keyof Rmmz_Battler>[];

const createFakeMap = (): FakeMap => ({
  mapId: () => 653,
});

const createMockedActor = (): MockedObject<FakeActor> => ({
  changeEquipById: vi.fn(),
  setBattlerImage: vi.fn(),
  setCharacterImage: vi.fn(),
  setFaceImage: vi.fn(),
  setName: vi.fn(),
  changeClass: vi.fn(),
  chnageNickname: vi.fn(),
  changeProfile: vi.fn(),
});

const mockDataClasses = [null, { id: 1 }, { id: 2 }, { id: 3 }] as const;

const stubGlobal = (actors: MockedObject<FakeActors>) => {
  vi.stubGlobal("$gameActors", actors);
  vi.stubGlobal("$gameMap", createFakeMap());
  vi.stubGlobal("$dataClasses", mockDataClasses);
};

interface MethodCalls {
  actor: MemberFunctions<FakeActor>[];
  actorId: number;
}

interface TestCase {
  name: string;
  command: EventCommand;
  commandLiteral: EventCommand;
  calls: MethodCalls;
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    test("make", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
    test("execute with no actor found, should not call any actor method", () => {
      const emptyActors: MockedObject<FakeActors> = {
        actor: vi.fn().mockReturnValue(null),
      };
      stubGlobal(emptyActors);
      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], 0);
      interpreter.executeCommand();
      expect(emptyActors.actor).toHaveBeenCalledWith(testCase.calls.actorId);
      expect(emptyActors.actor).toHaveBeenCalledOnce();
    });
    test("execute with actor found", () => {
      const mockActor = createMockedActor();
      const emptyActors: MockedObject<FakeActors> = {
        actor: vi.fn().mockReturnValue(mockActor),
      };
      stubGlobal(emptyActors);
      const interpreter = new Game_Interpreter();
      interpreter.setup([testCase.commandLiteral], 0);
      interpreter.executeCommand();
      expect(emptyActors.actor).toHaveBeenCalledWith(testCase.calls.actorId);
      expect(emptyActors.actor).toHaveBeenCalledOnce();
      KEYS.forEach((k) => {
        const call = testCase.calls.actor.find((c) => c.fn === k);
        if (call) {
          expect(mockActor[k]).toHaveBeenCalledWith(...call.args);
          expect(mockActor[k]).toHaveBeenCalledOnce();
        } else {
          expect(mockActor[k]).not.toHaveBeenCalled();
        }
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "Change Actor Class",
    command: makeCommandChangeClass({
      actorId: 5,
      classId: 3,
      keepExp: true,
    }),
    commandLiteral: {
      code: CHANGE_CLASS,
      parameters: [5, 3, true],
      indent: 0,
    },
    calls: {
      actorId: 5,
      actor: [{ fn: "changeClass", args: [3, true] }],
    },
  },
  {
    name: "Change Actor Class",
    command: makeCommandChangeClass({
      actorId: 7,
      classId: 0,
      keepExp: true,
    }),
    commandLiteral: {
      code: CHANGE_CLASS,
      parameters: [7, 0, true],
      indent: 0,
    },
    calls: {
      actorId: 7,
      actor: [],
    },
  },
];

testCases.forEach(runTestCase);
