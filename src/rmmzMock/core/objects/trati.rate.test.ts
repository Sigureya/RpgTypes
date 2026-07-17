import { describe, expect, test } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import {
  TRAIT_DEBUFF_RATE,
  TRAIT_ELEMENT_RATE,
  TRAIT_PARAM,
  TRAIT_SPARAM,
  TRAIT_STATE_RATE,
  traitDebuffRate,
  traitElementRate,
  traitParamRate,
  traitSparam,
  traitStateRate,
  traitXparam,
} from "@RpgTypes/rmmz/rpg";

interface ValuePair {
  id: number;
  value: number;
}

interface TestCase {
  name: string;
  traits: Trait[];
  paramRate: ValuePair;
  xparam: ValuePair;
  sparam: ValuePair;
  elementRate: ValuePair;
  debuffRate: ValuePair;
  stateRate: ValuePair;
}

const testCases: TestCase[] = [
  {
    name: "empty",
    traits: [],
    paramRate: { id: 2, value: 1 },
    xparam: { id: 3, value: 0 },
    sparam: { id: 4, value: 1 },
    elementRate: { id: 5, value: 1 },
    debuffRate: { id: 6, value: 1 },
    stateRate: { id: 7, value: 1 },
  },
  {
    name: "trait values",
    traits: [
      { code: TRAIT_PARAM, dataId: 2, value: 1.2 },
      { code: TRAIT_PARAM, dataId: 2, value: 0.5 },

      { code: TRAIT_PARAM, dataId: 3, value: 0.15 },
      { code: TRAIT_PARAM, dataId: 3, value: 0.35 },

      { code: TRAIT_SPARAM, dataId: 4, value: 1.5 },
      { code: TRAIT_SPARAM, dataId: 4, value: 0.8 },

      { code: TRAIT_ELEMENT_RATE, dataId: 5, value: 0.5 },
      { code: TRAIT_ELEMENT_RATE, dataId: 5, value: 0.4 },

      { code: TRAIT_DEBUFF_RATE, dataId: 6, value: 0.8 },
      { code: TRAIT_DEBUFF_RATE, dataId: 6, value: 0.5 },

      { code: TRAIT_STATE_RATE, dataId: 7, value: 0.6 },
      { code: TRAIT_STATE_RATE, dataId: 7, value: 0.5 },
    ],

    paramRate: { id: 2, value: 0.6 },
    xparam: { id: 3, value: 0.5 },
    sparam: { id: 4, value: 1.2 },
    elementRate: { id: 5, value: 0.2 },
    debuffRate: { id: 6, value: 0.4 },
    stateRate: { id: 7, value: 0.3 },
  },
];

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    describe("functions", () => {
      test("traitParamRate", () => {
        const result = traitParamRate(testCase.traits, testCase.paramRate.id);
        expect(result).toBeCloseTo(testCase.paramRate.value);
      });

      test("traitXparam", () => {
        const result = traitXparam(testCase.traits, testCase.xparam.id);
        expect(result).toBeCloseTo(testCase.xparam.value);
      });

      test("traitSparam", () => {
        const result = traitSparam(testCase.traits, testCase.sparam.id);
        expect(result).toBeCloseTo(testCase.sparam.value);
      });

      test("traitElementRate", () => {
        const result = traitElementRate(
          testCase.traits,
          testCase.elementRate.id,
        );
        expect(result).toBeCloseTo(testCase.elementRate.value);
      });

      test("traitDebuffRate", () => {
        const result = traitDebuffRate(testCase.traits, testCase.debuffRate.id);
        expect(result).toBeCloseTo(testCase.debuffRate.value);
      });

      test("traitStateRate", () => {
        const result = traitStateRate(testCase.traits, testCase.stateRate.id);
        expect(result).toBeCloseTo(testCase.stateRate.value);
      });
    });
  });
};

describe("trait.parameters", () => {
  testCases.forEach(runTestCase);
});
