import { describe, expect, test, vi } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import {
  traitHitRate,
  traitHpRegenRate,
  traitMpRegenRate,
  traitTpRegenRate,
  traitCriticalRate,
  traitCriticalEvasionRate,
  traitMagicEvasionRate,
  traitMagicReflectionRate,
  traitCounterAttackRate,
} from "@RpgTypes/rmmz/rpg";
import { Game_BattlerBase } from "./rmmz_objects";

const craateBattlerBase = (traits: Trait[]) => {
  const battlerBase = new Game_BattlerBase();
  vi.spyOn(battlerBase, "allTraits").mockReturnValue(traits);
  return battlerBase;
};

interface TestCase {
  traits: Trait[];
  hitRate: number;
  evaRate: number;
  criRate: number;
  criEvasion: number;
  counterAttack: number;
  hpRegen: number;
  mpRegen: number;
  tpRegen: number;
}

const runTestCase = (testCase: TestCase) => {
  describe("function", () => {
    test("traitHitRate", () => {
      const result = traitHitRate(testCase.traits);
      expect(result).toBe(testCase.hitRate);
    });
    test("traitHpRegenRate", () => {
      const result = traitHpRegenRate(testCase.traits);
      expect(result).toBe(testCase.hpRegen);
    });
    test("traitMpRegenRate", () => {
      const result = traitMpRegenRate(testCase.traits);
      expect(result).toBe(testCase.mpRegen);
    });
    test("traitTpRegenRate", () => {
      const result = traitTpRegenRate(testCase.traits);
      expect(result).toBe(testCase.tpRegen);
    });
    test("traitCriticalRate", () => {
      const result = traitCriticalRate(testCase.traits);
      expect(result).toBe(testCase.criRate);
    });

    test("traitCriticalEvasionRate", () => {
      const result = traitCriticalEvasionRate(testCase.traits);
      expect(result).toBe(testCase.criEvasion);
    });

    test("traitMagicEvasionRate", () => {
      const result = traitMagicEvasionRate(testCase.traits);
      expect(result).toBe(testCase.criEvasion);
    });
    test("traitMagicReflectionRate", () => {
      const result = traitMagicReflectionRate(testCase.traits);
      expect(result).toBe(testCase.criEvasion);
    });
    test("traitCounterAttackRate", () => {
      const result = traitCounterAttackRate(testCase.traits);
      expect(result).toBe(testCase.counterAttack);
    });
    test("traitCounterAttackRate", () => {
      const result = traitCounterAttackRate(testCase.traits);
      expect(result).toBe(testCase.counterAttack);
    });
  });
  describe("BattlerBase", () => {
    test("hit", () => {
      const battlerBase = craateBattlerBase(testCase.traits);
      const result = battlerBase.hit;
      expect(result).toBe(testCase.hitRate);
      expect(battlerBase.allTraits).toHaveBeenCalledOnce();
    });
    test("hpRegen", () => {
      const battlerBase = craateBattlerBase(testCase.traits);
      const result = battlerBase.hrg;
      expect(result).toBe(testCase.hpRegen);
      expect(battlerBase.allTraits).toHaveBeenCalledOnce();
    });
    test("mpRegen", () => {
      const battlerBase = craateBattlerBase(testCase.traits);
      const result = battlerBase.mrg;
      expect(result).toBe(testCase.mpRegen);
      expect(battlerBase.allTraits).toHaveBeenCalledOnce();
    });
    test("tpRegen", () => {
      const battlerBase = craateBattlerBase(testCase.traits);
      const result = battlerBase.trg;
      expect(result).toBe(testCase.tpRegen);
      expect(battlerBase.allTraits).toHaveBeenCalledOnce();
    });
    test("cri", () => {
      const battlerBase = craateBattlerBase(testCase.traits);
      const result = battlerBase.cri;
      expect(result).toBe(testCase.criRate);
      expect(battlerBase.allTraits).toHaveBeenCalledOnce();
    });
    test("cev", () => {
      const battlerBase = craateBattlerBase(testCase.traits);
      const result = battlerBase.cev;
      expect(result).toBe(testCase.criEvasion);
      expect(battlerBase.allTraits).toHaveBeenCalledOnce();
    });
    test("mev", () => {
      const battlerBase = craateBattlerBase(testCase.traits);
      const result = battlerBase.mev;
      expect(result).toBe(testCase.criEvasion);
      expect(battlerBase.allTraits).toHaveBeenCalledOnce();
    });
    test("cnt", () => {
      const battlerBase = craateBattlerBase(testCase.traits);
      const result = battlerBase.cnt;
      expect(result).toBe(testCase.counterAttack);
      expect(battlerBase.allTraits).toHaveBeenCalledOnce();
    });
  });
};

const testCases: TestCase[] = [
  {
    traits: [],
    hitRate: 0,
    evaRate: 0,
    criRate: 0,
    criEvasion: 0,
    counterAttack: 0,
    hpRegen: 0,
    mpRegen: 0,
    tpRegen: 0,
  },
];

describe("traitXparam", () => {
  testCases.forEach(runTestCase);
});
