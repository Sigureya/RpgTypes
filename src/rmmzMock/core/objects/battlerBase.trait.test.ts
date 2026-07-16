import { describe, expect, test, vi } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import {
  TRAIT_DEBUFF_RATE,
  TRAIT_ELEMENT_RATE,
  TRAIT_STATE_RATE,
  traitDebuffRate,
  traitElementRate,
  traitStateRate,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import { Game_BattlerBase } from "./rmmz_objects";

const createMockedBattlerBase = (traits: Trait[]): Rmmz_BattlerBase => {
  const battlerBase = new Game_BattlerBase();
  vi.spyOn(battlerBase, "allTraits").mockReturnValue(traits);
  return battlerBase;
};

interface TestCase {
  traits: Trait[];
  elmentRate: {
    expected: number;
    param: number;
  }[];
  debuffRate: {
    expected: number;
    param: number;
  }[];
  stateRate: {
    expected: number;
    param: number;
  }[];
}

const runTestCase = (testCase: TestCase) => {
  describe("ElementRate", () => {
    testCase.elmentRate.forEach((x) => {
      describe(`paramId: ${x.param}`, () => {
        test("BattlerBase", () => {
          const battlerBase = createMockedBattlerBase(testCase.traits);
          const result = battlerBase.elementRate(x.param);
          expect(result).toBe(x.expected);
        });
        test("function", () => {
          const result = traitElementRate(testCase.traits, x.param);
          expect(result).toBe(x.expected);
        });
      });
    });
  });
  describe("DebuffRate", () => {
    testCase.debuffRate.forEach((x) => {
      describe(`paramId: ${x.param}`, () => {
        test("BattlerBase", () => {
          const battlerBase = createMockedBattlerBase(testCase.traits);
          const result = battlerBase.debuffRate(x.param);
          expect(result).toBe(x.expected);
        });
        test("function", () => {
          const result = traitDebuffRate(testCase.traits, x.param);
          expect(result).toBe(x.expected);
        });
      });
    });
  });
  describe("StateRate", () => {
    testCase.stateRate.forEach((x) => {
      describe(`paramId: ${x.param}`, () => {
        test("BattlerBase", () => {
          const battlerBase = createMockedBattlerBase(testCase.traits);
          const result = battlerBase.stateRate(x.param);
          expect(result).toBe(x.expected);
        });
        test("function", () => {
          const result = traitStateRate(testCase.traits, x.param);
          expect(result).toBe(x.expected);
        });
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    traits: [],
    elmentRate: [{ param: 1, expected: 1 }],
    debuffRate: [{ param: 1, expected: 1 }],
    stateRate: [{ param: 1, expected: 1 }],
  },
  {
    traits: [
      { code: TRAIT_ELEMENT_RATE, dataId: 1, value: 0.5 },
      { code: TRAIT_ELEMENT_RATE, dataId: 2, value: 2 },
      { code: TRAIT_ELEMENT_RATE, dataId: 3, value: 3 },
      { code: TRAIT_ELEMENT_RATE, dataId: 3, value: 2 },
      { code: TRAIT_ELEMENT_RATE, dataId: 4, value: 0.7 },
      { code: TRAIT_ELEMENT_RATE, dataId: 5, value: 0.2 },
      { code: TRAIT_ELEMENT_RATE, dataId: 5, value: 0.3 },
      { code: TRAIT_DEBUFF_RATE, dataId: 6, value: 7 },
      { code: TRAIT_STATE_RATE, dataId: 12, value: 0.7 },
    ],
    elmentRate: [
      { param: 1, expected: 0.5 },
      { param: 2, expected: 2 },
      { param: 3, expected: 6 },
      { param: 4, expected: 0.7 },
      { param: 5, expected: 0.2 * 0.3 },
    ],
    debuffRate: [
      { param: 99, expected: 1 },
      { param: 6, expected: 7 },
    ],
    stateRate: [
      { param: 99, expected: 1 },
      { param: 12, expected: 0.7 },
    ],
  },
];

testCases.forEach((testCase) => {
  runTestCase(testCase);
});
