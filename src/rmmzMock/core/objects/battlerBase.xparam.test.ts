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
  TRAIT_XPARAM,
  XPARAM_HIT_RATE,
  XPARAM_HRG_HP_REGEN_RATE,
  XPARAM_EVA_RATE,
  XPARAM_CNT_COUNTER_ATTACK_RATE,
  XPARAM_MRG_MP_REGEN_RATE,
  XPARAM_TRG_TP_REGEN_RATE,
  XPARAM_CRI_CRITICAL_RATE,
  XPARAM_CEV_CRITICAL_EVASION_RATE,
  XPARAM_MCR_MAGIC_EVASION_RATE,
  XPARAM_MRF_MAGIC_REFLECTION_RATE,
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
  magicEvasion: number;
  magicReflection: number;
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
      expect(result).toBe(testCase.magicEvasion);
    });
    test("traitMagicReflectionRate", () => {
      const result = traitMagicReflectionRate(testCase.traits);
      expect(result).toBe(testCase.magicReflection);
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
      expect(result).toBe(testCase.magicEvasion);
      expect(battlerBase.allTraits).toHaveBeenCalledOnce();
    });
    test("mrf", () => {
      const battlerBase = craateBattlerBase(testCase.traits);
      const result = battlerBase.mrf;
      expect(result).toBe(testCase.magicReflection);
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
    magicEvasion: 0,
    magicReflection: 0,
  },
  {
    traits: [
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MCR_MAGIC_EVASION_RATE,
        value: -151,
      },
      { code: TRAIT_XPARAM, dataId: XPARAM_CRI_CRITICAL_RATE, value: -485 },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CEV_CRITICAL_EVASION_RATE,
        value: -583,
      },
      { code: TRAIT_XPARAM, dataId: XPARAM_HIT_RATE, value: -189 },
      { code: TRAIT_XPARAM, dataId: XPARAM_EVA_RATE, value: -63 },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CNT_COUNTER_ATTACK_RATE,
        value: -787,
      },
      { code: TRAIT_XPARAM, dataId: XPARAM_HRG_HP_REGEN_RATE, value: -24 },
      { code: TRAIT_XPARAM, dataId: XPARAM_MRG_MP_REGEN_RATE, value: -81 },
      { code: TRAIT_XPARAM, dataId: XPARAM_TRG_TP_REGEN_RATE, value: -510 },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MRF_MAGIC_REFLECTION_RATE,
        value: -681,
      },
    ],
    hpRegen: -24,
    mpRegen: -81,
    tpRegen: -510,
    counterAttack: -787,
    hitRate: -189,
    evaRate: -63,
    criRate: -485,
    criEvasion: -583,
    magicEvasion: -151,
    magicReflection: -681,
  },
  {
    traits: [
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MCR_MAGIC_EVASION_RATE,
        value: 100,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CRI_CRITICAL_RATE,
        value: 400,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CEV_CRITICAL_EVASION_RATE,
        value: 200,
      },
      { code: TRAIT_XPARAM, dataId: XPARAM_HIT_RATE, value: 2 },
      { code: TRAIT_XPARAM, dataId: XPARAM_EVA_RATE, value: 4 },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CNT_COUNTER_ATTACK_RATE,
        value: 800,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_HRG_HP_REGEN_RATE,
        value: 5,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MRG_MP_REGEN_RATE,
        value: 954,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_TRG_TP_REGEN_RATE,
        value: 926,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MRF_MAGIC_REFLECTION_RATE,
        value: 7,
      },
    ],
    hpRegen: 5,
    mpRegen: 954,
    tpRegen: 926,
    counterAttack: 800,
    hitRate: 2,
    evaRate: 4,
    criRate: 400,
    criEvasion: 200,
    magicEvasion: 100,
    magicReflection: 7,
  },
  {
    traits: [
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_HRG_HP_REGEN_RATE,
        value: 100,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_HRG_HP_REGEN_RATE,
        value: -100,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MRG_MP_REGEN_RATE,
        value: 300,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MRG_MP_REGEN_RATE,
        value: -300,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_TRG_TP_REGEN_RATE,
        value: 500,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_TRG_TP_REGEN_RATE,
        value: -500,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CNT_COUNTER_ATTACK_RATE,
        value: 700,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CNT_COUNTER_ATTACK_RATE,
        value: -700,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_HIT_RATE,
        value: 400,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_HIT_RATE,
        value: -400,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_EVA_RATE,
        value: 200,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_EVA_RATE,
        value: -200,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CRI_CRITICAL_RATE,
        value: 925,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CRI_CRITICAL_RATE,
        value: -925,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CEV_CRITICAL_EVASION_RATE,
        value: 3,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_CEV_CRITICAL_EVASION_RATE,
        value: -3,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MCR_MAGIC_EVASION_RATE,
        value: 2,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MCR_MAGIC_EVASION_RATE,
        value: -2,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MRF_MAGIC_REFLECTION_RATE,
        value: 4,
      },
      {
        code: TRAIT_XPARAM,
        dataId: XPARAM_MRF_MAGIC_REFLECTION_RATE,
        value: -4,
      },
    ],
    hitRate: 0,
    evaRate: 0,
    criRate: 0,
    criEvasion: 0,
    counterAttack: 0,
    hpRegen: 0,
    mpRegen: 0,
    tpRegen: 0,
    magicEvasion: 0,
    magicReflection: 0,
  },
];

describe("traitXparam", () => {
  testCases.forEach(runTestCase);
});
