import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandAddActorStateEach,
  makeCommandAddActorStateTarget,
  makeCommandRemoveActorStateEach,
  makeCommandRemoveActorStateTarget,
} from "@RpgTypes/rmmz/eventCommand";
import { CHANGE_ACTOR_STATE } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Actor, Rmmz_Party } from "@RpgTypes/rmmzRuntime";
import type { FakeActors, FakeMap } from "./fakes/types";
import { Game_Interpreter } from "./rmmz_objects";

type FakeParty = Pick<Rmmz_Party, "members">;

type FakeActor = Pick<Rmmz_Actor, "isDead" | (typeof KEYS)[number]>;

const KEYS = [
  "addState",
  "removeState",
  "performCollapse",
  "clearResult",
  "recoverAll",
  "changeExp",
  "changeLevel",
  "addParam",
  "learnSkill",
  "forgetSkill",
] as const satisfies (keyof Rmmz_Actor)[];

const createFakeMap = (): FakeMap => ({
  mapId: () => 211,
});

const createMockParty = (
  actors: MockedObject<FakeActor>[],
): MockedObject<FakeParty> => ({
  members: vi.fn().mockReturnValue(actors),
});

const createMockedActorsContainer = (
  actor: MockedObject<FakeActor>,
): MockedObject<FakeActors> => ({
  actor: vi.fn().mockReturnValue(actor),
});

const createMockedActor = (): MockedObject<FakeActor> => ({
  addState: vi.fn(),
  removeState: vi.fn(),
  performCollapse: vi.fn(),
  clearResult: vi.fn(),
  recoverAll: vi.fn(),
  changeExp: vi.fn(),
  changeLevel: vi.fn(),
  addParam: vi.fn(),
  learnSkill: vi.fn(),
  forgetSkill: vi.fn(),
  isDead: vi.fn().mockReturnValue(false),
});

interface MockObjects {
  actor: MockedObject<FakeActor>;
  member1: MockedObject<FakeActor>;
  member2: MockedObject<FakeActor>;
  party: MockedObject<FakeParty>;
  actorsContainer: MockedObject<FakeActors>;
  map: FakeMap;
}

const createMockObjects = (): MockObjects => {
  const actor = createMockedActor();
  const member1 = createMockedActor();
  const member2 = createMockedActor();
  const party = createMockParty([member1, member2]);
  const actorsContainer = createMockedActorsContainer(actor);
  const map = createFakeMap();
  return { actor, member1, member2, party, actorsContainer, map };
};

const stubGlobal = (objects: MockObjects) => {
  vi.stubGlobal("$gameActors", objects.actorsContainer);
  vi.stubGlobal("$gameParty", objects.party);
  vi.stubGlobal("$gameMap", objects.map);
};

interface MethodCalls {
  actor: MemberFunctions<FakeActor>[];
  member1: MemberFunctions<FakeActor>[];
  member2: MemberFunctions<FakeActor>[];
  actorId: number | undefined;
  members: boolean;
}

interface TestCase {
  name: string;
  command: EventCommand;
  commandLiteral: EventCommand;
  calls: MethodCalls;
}

const verifyMethodCalls = (
  mock: MockedObject<FakeActor>,
  expectedCalls: MemberFunctions<FakeActor>[],
) => {
  expectedCalls.forEach((c) => {
    expect(mock[c.fn]).toHaveBeenCalledWith(...c.args);
    expect(mock[c.fn]).toHaveBeenCalledOnce();
  });
  KEYS.filter((key) => expectedCalls.every((c) => c.fn !== key)).forEach(
    (key) => {
      expect(mock[key], `called:${key}`).not.toHaveBeenCalled();
    },
  );
};

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    test("make", () => {
      expect(testCase.command).toEqual(testCase.commandLiteral);
    });
    describe("executeCommand", () => {
      test("exec1: check if correct methods are called with correct arguments", () => {
        const objects = createMockObjects();
        stubGlobal(objects);
        const interpreter = new Game_Interpreter();
        interpreter.setup([testCase.commandLiteral], 0);
        interpreter.executeCommand();
        verifyMethodCalls(objects.actor, testCase.calls.actor);
        verifyMethodCalls(objects.member1, testCase.calls.member1);
        verifyMethodCalls(objects.member2, testCase.calls.member2);
      });
      test("exec2: check if correct actor and members are retrieved", () => {
        const objects = createMockObjects();
        stubGlobal(objects);
        const interpreter = new Game_Interpreter();
        interpreter.setup([testCase.commandLiteral], 0);
        interpreter.executeCommand();
        if (testCase.calls.actorId === undefined) {
          expect(objects.actorsContainer.actor).not.toHaveBeenCalled();
        } else {
          expect(objects.actorsContainer.actor).toHaveBeenCalledWith(
            testCase.calls.actorId,
          );
          expect(objects.actorsContainer.actor).toHaveBeenCalledOnce();
        }
        if (testCase.calls.members) {
          expect(objects.party.members).toHaveBeenCalledOnce();
        } else {
          expect(objects.party.members).not.toHaveBeenCalled();
        }
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "Add Actor State Target",
    commandLiteral: {
      code: CHANGE_ACTOR_STATE,
      parameters: [0, 6, 0, 4],
      indent: 0,
    },
    command: makeCommandAddActorStateTarget({ actorId: 6, stateId: 4 }),
    calls: {
      actor: [
        { fn: "addState", args: [4] },
        { fn: "clearResult", args: [] },
      ],
      member1: [],
      member2: [],
      actorId: 6,
      members: false,
    },
  },
  {
    name: "Remove Actor State Target",
    commandLiteral: {
      code: 313,
      indent: 0,
      parameters: [0, 12, 1, 9],
    },
    command: makeCommandRemoveActorStateTarget({ actorId: 12, stateId: 9 }),
    calls: {
      actor: [
        { fn: "removeState", args: [9] },
        { fn: "clearResult", args: [] },
      ],
      member1: [],
      member2: [],
      actorId: 12,
      members: false,
    },
  },
  {
    name: "Remove Actor State Each",
    commandLiteral: {
      code: CHANGE_ACTOR_STATE,
      parameters: [0, 0, 1, 7],
      indent: 0,
    },
    command: makeCommandRemoveActorStateEach({ stateId: 7 }),
    calls: {
      actor: [],
      member1: [
        { fn: "removeState", args: [7] },
        { fn: "clearResult", args: [] },
      ],
      member2: [
        { fn: "removeState", args: [7] },
        { fn: "clearResult", args: [] },
      ],
      actorId: undefined,
      members: true,
    },
  },
  {
    name: "Add Actor State Each",
    commandLiteral: {
      code: CHANGE_ACTOR_STATE,
      parameters: [0, 0, 0, 4],
      indent: 0,
    },
    command: makeCommandAddActorStateEach({ stateId: 4 }),
    calls: {
      actor: [],
      member1: [
        { fn: "addState", args: [4] },
        { fn: "clearResult", args: [] },
      ],
      member2: [
        { fn: "addState", args: [4] },
        { fn: "clearResult", args: [] },
      ],
      actorId: undefined,
      members: true,
    },
  },
];

describe("Command Actor Iterate", () => {
  testCases.forEach(runTestCase);
});
