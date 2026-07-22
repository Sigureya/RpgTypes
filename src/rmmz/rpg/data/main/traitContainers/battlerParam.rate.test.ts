import { describe, test, expect } from "vitest";
import { calculateParamRate } from "./battlerParam";
import type { StatusParamObject } from "./members";
import {
  PARAM_AGI,
  PARAM_ATK,
  PARAM_DEF,
  PARAM_LUK,
  PARAM_MAT,
  PARAM_MDF,
  PARAM_MAX_HP,
  PARAM_MAX_MP,
} from "./members";
import type { Trait } from "./trait";
import { TRAIT_PARAM, traitParamRate } from "./trait";

interface TestCase {
  traits: ReadonlyArray<Trait>;
  name: string;
}

const runTestCase = (testCase: TestCase) => {
  describe(testCase.name, () => {
    test("calculateParamRate", () => {
      const expected: StatusParamObject = {
        agi: traitParamRate(testCase.traits, PARAM_AGI),
        atk: traitParamRate(testCase.traits, PARAM_ATK),
        def: traitParamRate(testCase.traits, PARAM_DEF),
        luk: traitParamRate(testCase.traits, PARAM_LUK),
        mat: traitParamRate(testCase.traits, PARAM_MAT),
        mdf: traitParamRate(testCase.traits, PARAM_MDF),
        mhp: traitParamRate(testCase.traits, PARAM_MAX_HP),
        mmp: traitParamRate(testCase.traits, PARAM_MAX_MP),
      };

      const result = calculateParamRate(testCase.traits);
      expect(result).toEqual(expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "No traits",
    traits: [],
  },
  {
    name: "MAX_HP trait only",
    traits: [{ code: TRAIT_PARAM, dataId: PARAM_MAX_HP, value: 1.5 }],
  },
  {
    name: "MAX_HP trait double",
    traits: [
      { code: TRAIT_PARAM, dataId: PARAM_MAX_HP, value: 1.5 },
      { code: TRAIT_PARAM, dataId: PARAM_MAX_HP, value: 1.2 },
    ],
  },

  {
    name: "MAX_MP trait only",
    traits: [{ code: TRAIT_PARAM, dataId: PARAM_MAX_MP, value: 2.0 }],
  },
  {
    name: "MAX_MP trait double",
    traits: [
      { code: TRAIT_PARAM, dataId: PARAM_MAX_MP, value: 2.0 },
      { code: TRAIT_PARAM, dataId: PARAM_MAX_MP, value: 1.5 },
    ],
  },
  {
    name: "ATK trait only",
    traits: [{ code: TRAIT_PARAM, dataId: PARAM_ATK, value: 1.2 }],
  },
  {
    name: "ATK trait double",
    traits: [
      { code: TRAIT_PARAM, dataId: PARAM_ATK, value: 1.2 },
      { code: TRAIT_PARAM, dataId: PARAM_ATK, value: 1.5 },
    ],
  },
  {
    name: "DEF trait only",
    traits: [{ code: TRAIT_PARAM, dataId: PARAM_DEF, value: 1.3 }],
  },
  {
    name: "DEF trait double",
    traits: [
      { code: TRAIT_PARAM, dataId: PARAM_DEF, value: 1.3 },
      { code: TRAIT_PARAM, dataId: PARAM_DEF, value: 1.4 },
    ],
  },
  {
    name: "MAT trait only",
    traits: [{ code: TRAIT_PARAM, dataId: PARAM_MAT, value: 1.1 }],
  },
  {
    name: "MAT trait double",
    traits: [
      { code: TRAIT_PARAM, dataId: PARAM_MAT, value: 1.1 },
      { code: TRAIT_PARAM, dataId: PARAM_MAT, value: 1.2 },
    ],
  },
  {
    name: "MDF trait only",
    traits: [{ code: TRAIT_PARAM, dataId: PARAM_MDF, value: 0.5 }],
  },
  {
    name: "MDF trait double",
    traits: [
      { code: TRAIT_PARAM, dataId: PARAM_MDF, value: 0.5 },
      { code: TRAIT_PARAM, dataId: PARAM_MDF, value: 0.8 },
    ],
  },
  {
    name: "AGI trait only",
    traits: [{ code: TRAIT_PARAM, dataId: PARAM_AGI, value: 1.4 }],
  },
  {
    name: "AGI trait double",
    traits: [
      { code: TRAIT_PARAM, dataId: PARAM_AGI, value: 1.4 },
      { code: TRAIT_PARAM, dataId: PARAM_AGI, value: 1.3 },
    ],
  },
];

testCases.forEach(runTestCase);
