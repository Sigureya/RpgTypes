import type {
  Data_Item,
  MapEvent_PageCondition,
  Provider_RpgItems,
} from "@RpgTypes/rmmz/rpg";
import { makeEventPageCondition } from "@RpgTypes/rmmz/rpg";
import type {
  Rmmz_ActorsReadonly,
  Rmmz_BranchSourceParty,
  Rmmz_Switches,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import type { MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";
import { mapEventMeetsCondition } from "./event";

interface TestContext {
  itemProvider: MockedObject<Provider_RpgItems>;
  actors: MockedObject<Rmmz_ActorsReadonly<unknown>>;
  party: Rmmz_BranchSourceParty<unknown>;
  variables: MockedObject<Rmmz_Variables>;
  switches: MockedObject<Rmmz_Switches>;
}

interface ContextSource<T> {
  item: Data_Item | null;
  actor: T | null;
  member: T;
  hasItem: boolean;
  variableValue: number;
  trueSwitchIds: number[];
}

const MOCK_ACTOR = { id: 1, name: "Mock Actor" } as const;

const createItemProvider = (
  item: Data_Item | null | undefined = null,
): MockedObject<Provider_RpgItems> => {
  return {
    dataItem: vi.fn(() => item),
    dataArmor: vi.fn().mockThrow(new Error("not implemented")),
    dataWeapon: vi.fn().mockThrow(new Error("not implemented")),
  };
};

const createActors = <T>(
  actor: T | null = null,
): MockedObject<Rmmz_ActorsReadonly<T>> => {
  return {
    actor: vi.fn().mockReturnValue(actor),
  };
};

const createParty = <T>(
  member: T,
  hasItem: boolean,
): MockedObject<Rmmz_BranchSourceParty<T>> => {
  return {
    gold: vi.fn().mockThrow(new Error("not implemented")),
    hasItem: vi.fn().mockReturnValue(hasItem),
    members: vi.fn().mockReturnValue([member]),
  };
};

const createVariables = (value: number): MockedObject<Rmmz_Variables> => {
  return {
    value: vi.fn(() => value),
    clear: vi.fn().mockThrow(new Error("not implemented")),
    setValue: vi.fn().mockThrow(new Error("not implemented")),
    onChange: vi.fn().mockThrow(new Error("not implemented")),
  };
};

const createSwitches = (ids: number[]): MockedObject<Rmmz_Switches> => {
  return {
    value: vi.fn((id: number) => ids.includes(id)),
    setValue: vi.fn().mockThrow(new Error("not implemented")),
  };
};

const createTestContext = <T>({
  actor,
  member,
  hasItem,
  item,
  variableValue,
  trueSwitchIds,
}: ContextSource<T>): TestContext => {
  return {
    itemProvider: createItemProvider(item),
    actors: createActors(actor),
    party: createParty(member, hasItem),
    variables: createVariables(variableValue),
    switches: createSwitches(trueSwitchIds),
  };
};

interface TestCase {
  source: ContextSource<null | typeof MOCK_ACTOR>;
  truery: MapEvent_PageCondition[];
  falsey: MapEvent_PageCondition[];
}

const runTestCase = (testCase: TestCase): void => {
  describe("testCase", () => {
    test("empty", () => {
      const empty = makeEventPageCondition({});
      const context = createTestContext(testCase.source);
      const result = mapEventMeetsCondition(
        empty,
        context.itemProvider,
        context.actors,
        context.party,
        context.variables,
        context.switches,
      );
      expect(result).toBe(true);
    });
    describe("truery", () => {
      testCase.truery.forEach((condition, index) => {
        test(`truery[${index}]`, () => {
          const context = createTestContext(testCase.source);
          const result = mapEventMeetsCondition(
            condition,
            context.itemProvider,
            context.actors,
            context.party,
            context.variables,
            context.switches,
          );
          expect(result).toBe(true);
        });
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    source: {
      actor: null,
      member: MOCK_ACTOR,
      hasItem: false,
      item: null,
      variableValue: 10,
      trueSwitchIds: [],
    },
    falsey: [
      makeEventPageCondition({
        variableId: 1,
        variableValue: 11,
      }),
      makeEventPageCondition({
        switch1Id: 1,
      }),
      makeEventPageCondition({
        switch2Id: 3,
      }),
    ],
    truery: [
      makeEventPageCondition({
        variableId: 1,
        variableValue: 9,
      }),
      makeEventPageCondition({
        variableId: 1,
        variableValue: 10,
      }),
    ],
  },
];

describe("mapEventMeetsCondition", () => {
  testCases.forEach((testCase) => {
    runTestCase(testCase);
  });
});
