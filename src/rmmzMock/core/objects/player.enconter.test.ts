import type { Encounter } from "@RpgTypes/rmmz/rpg";
import { selectEncounters } from "@RpgTypes/rmmz/rpg/data/event/map/encounter/encounter";
import type { Rmmz_Map, Rmmz_PlayerCharactor } from "@RpgTypes/rmmzRuntime";
import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import { Game_Player } from "./rmmz_objects";

type FakeMap = Pick<Rmmz_Map, "encounterList">;
type FakePlaer = Pick<Rmmz_PlayerCharactor, "meetsEncounterConditions">;

const createMockPlayer = (
  fn: (e: Encounter) => boolean,
): MockedObject<FakePlaer> => {
  return {
    meetsEncounterConditions: vi.fn((e: Encounter) => {
      return fn(e);
    }),
  };
};

const createMockMap = (list: Encounter[]): MockedObject<FakeMap> => {
  return {
    encounterList: vi.fn(() => list),
  };
};

const MOCK_ENCOUNTER_LIST: Encounter[] = [
  { regionSet: [], troopId: 1, weight: 1 },
  { regionSet: [189], troopId: 1998, weight: 2 },
  { regionSet: [681, 683], troopId: 2015, weight: 7 },
];

interface TestCase {
  list: Encounter[];
  validateFn: (e: Encounter) => boolean;
  randomValue: number;
  totalWeight: number;
  expectedId: number;
}

const runTestCase = (testCase: TestCase): void => {
  describe("testCase", () => {
    describe("functions", () => {
      test("call", () => {
        const mockValidFn = vi.fn((e: Encounter) => {
          return testCase.validateFn(e);
        });
        const mockRandomFn = vi.fn(() => testCase.randomValue);
        selectEncounters(
          testCase.list,
          (e: Encounter, index: number, list) => {
            expect(list).toBe(testCase.list);
            return mockValidFn(e);
          },
          mockRandomFn,
        );
        expect(mockRandomFn.mock.calls.length).toBeLessThanOrEqual(1);
        expect(mockValidFn).toHaveBeenCalledTimes(testCase.list.length);
      });
      test("result", () => {
        const result = selectEncounters(
          testCase.list,
          (e: Encounter) => {
            return testCase.validateFn(e);
          },
          () => {
            return testCase.randomValue;
          },
        );
        if (result) {
          expect(result.troopId).toBe(testCase.expectedId);
        } else {
          expect(result).toBeNull();
          expect(testCase.expectedId).toBe(0);
        }
      });
    });
    describe("Game_Player", () => {
      test("result", () => {
        const map = createMockMap(testCase.list);
        vi.stubGlobal("$gameMap", map);
        // @ts-expect-error
        Math.randomInt = vi.fn(() => testCase.randomValue);
        const player = createMockPlayer(testCase.validateFn);
        const result = Game_Player.prototype.makeEncounterTroopId.call(player);
        expect(map.encounterList).toHaveBeenCalledOnce();
        expect(result).toBe(testCase.expectedId);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    list: [],
    validateFn: () => true,
    randomValue: 0,
    totalWeight: 0,
    expectedId: 0,
  },
  {
    list: [{ weight: 4, troopId: 6, regionSet: [] }],
    expectedId: 6,
    randomValue: 0,
    totalWeight: 4,
    validateFn: () => true,
  },
  {
    list: MOCK_ENCOUNTER_LIST,
    expectedId: 0,
    randomValue: 8,
    totalWeight: 0,
    validateFn: () => false,
  },

  {
    list: MOCK_ENCOUNTER_LIST,
    expectedId: 2015,
    randomValue: 8,
    totalWeight: 10,
    validateFn: () => true,
  },
];

describe("selectEncounters", () => {
  testCases.forEach(runTestCase);
  vi.clearAllMocks();
});
