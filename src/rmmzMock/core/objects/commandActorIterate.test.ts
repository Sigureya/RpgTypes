import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { MemberFunctions } from "@RpgTypes/libs";
import {
  makeCommandChangeActorState,
  type EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import { CHANGE_ACTOR_STATE } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Actor, Rmmz_Party } from "@RpgTypes/rmmzRuntime";
import type { FakeActors, FakeMap } from "./fakes/types";

type FakeParty = Pick<Rmmz_Party, "members">;

type FakeActor = Pick<Rmmz_Actor, (typeof KEYS)[number]>;

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
  });
};

const testCases: TestCase[] = [
  {
    name: "Change Actor State",
    commandLiteral: {
      code: CHANGE_ACTOR_STATE,
      parameters: [1, 2],
      indent: 0,
    },
    command: makeCommandChangeActorState({ actorId: 1, stateId: 2 }),
    calls: {
      actor: [],
      member1: [],
      member2: [],
      actorId: 1,
    },
  },
];

describe("Command Actor Iterate", () => {
  testCases.forEach(runTestCase);
});
