import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandChangeActorName,
  makeCommandChangeActorNickName,
  makeCommandChangeActorProfile,
  makeCommandChangeClass,
} from "@RpgTypes/rmmz/eventCommand";
import {
  CHANGE_CLASS,
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
} from "@RpgTypes/rmmz/rpg";
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
  "changeClass",
  "setName",
  "setNickname",
  "setProfile",
  "setBattlerImage",
  "setCharacterImage",
  "setFaceImage",
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
  setNickname: vi.fn(),
  setProfile: vi.fn(),
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
    name: "Change Actor Class with dataClass is null",
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
  {
    name: "change actor name",
    commandLiteral: {
      code: CHANGE_NAME,
      indent: 0,
      parameters: [3, "new name"],
    },
    command: makeCommandChangeActorName({
      actorId: 3,
      name: "new name",
    }),
    calls: {
      actorId: 3,
      actor: [{ fn: "setName", args: ["new name"] }],
    },
  },
  {
    name: "change actor nickname",
    commandLiteral: {
      code: CHANGE_NICKNAME,
      indent: 0,
      parameters: [4, "new nickname"],
    },
    command: makeCommandChangeActorNickName({
      actorId: 4,
      nickname: "new nickname",
    }),
    calls: {
      actorId: 4,
      actor: [{ fn: "setNickname", args: ["new nickname"] }],
    },
  },
  {
    name: "change actor profile",
    commandLiteral: {
      code: CHANGE_PROFILE,
      indent: 0,
      parameters: [5, "new profile"],
    },
    command: makeCommandChangeActorProfile({
      actorId: 5,
      profile: "new profile",
    }),
    calls: {
      actorId: 5,
      actor: [{ fn: "setProfile", args: ["new profile"] }],
    },
  },
];

testCases.forEach(runTestCase);
