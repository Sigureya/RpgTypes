import { describe, expect, test, vi } from "vitest";
import { selectEncounters } from "./encounter";
import type { Encounter } from "./types";

interface TestCase {
  name: string;
  totalWeight: number;
  randomValue: number;
  encounter(): {
    list: Encounter[];
    expectedEncounter: Encounter | null;
  };
  validFn: (
    e: Encounter,
    index: number,
    list: ReadonlyArray<Encounter>,
  ) => boolean;
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    test("selectEncounters returns expected encounter", () => {
      const validFn = vi.fn(
        (e: Encounter, index: number, list: readonly Encounter[]) => {
          return testCase.validFn(e, index, list);
        },
      );
      const randomFn = vi.fn().mockReturnValue(testCase.randomValue);
      const { list, expectedEncounter } = testCase.encounter();
      const result = selectEncounters(list, validFn, randomFn);
      expect(result).toEqual(expectedEncounter);
      expect(validFn).toHaveBeenCalledTimes(list.length);
      list.forEach((e: Encounter, index) => {
        expect(validFn).toHaveBeenCalledWith(e, index, list);
      });
    });
    test("random function call", () => {
      const randomFn = vi.fn().mockReturnValue(testCase.randomValue);
      const { list } = testCase.encounter();
      selectEncounters(list, testCase.validFn, randomFn);
      if (testCase.totalWeight > 0) {
        expect(randomFn).toHaveBeenCalledOnce();
        expect(randomFn).toHaveBeenCalledWith(testCase.totalWeight);
      } else {
        expect(randomFn).not.toHaveBeenCalled();
      }
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "empty encounter list",
    totalWeight: 0,
    randomValue: 0,
    encounter: () => ({
      list: [],
      expectedEncounter: null,
    }),
    validFn: () => true,
  },
  {
    name: "single valid encounter",
    totalWeight: 10,
    randomValue: 5,
    encounter: () => {
      const e: Encounter = { regionSet: [], troopId: 1, weight: 10 };
      return {
        list: [e],
        expectedEncounter: e,
      };
    },
    validFn: () => true,
  },
  {
    name: "multiple valid encounters",
    totalWeight: 30,
    randomValue: 15,
    encounter: () => {
      const e1: Encounter = { regionSet: [], troopId: 1, weight: 10 };
      const e2: Encounter = { regionSet: [], troopId: 2, weight: 20 };
      return {
        list: [e1, e2],
        expectedEncounter: e2,
      };
    },
    validFn: () => true,
  },
  {
    name: "multiple encounters with some invalid",
    totalWeight: 2,
    randomValue: 1,
    encounter: () => {
      const e1: Encounter = { regionSet: [22], troopId: 1, weight: 2 };
      const e2: Encounter = { regionSet: [], troopId: 2, weight: 20 };
      return {
        list: [e1, e2],
        expectedEncounter: e1,
      };
    },
    validFn: (e) => e.regionSet.length > 0,
  },
  {
    name: "all encounters invalid",
    totalWeight: 0,
    randomValue: 0,
    encounter: () => ({
      list: [
        { regionSet: [1], troopId: 1, weight: 10 },
        { regionSet: [2], troopId: 2, weight: 20 },
      ],
      expectedEncounter: null,
    }),
    validFn: () => false,
  },
];

testCases.forEach(runTestCase);
