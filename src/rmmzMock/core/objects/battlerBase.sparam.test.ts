import { describe, expect, test, vi } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import {
  SPARAM_EXR_EXPERIENCE_RATE,
  SPARAM_FDR_FLOOR_DAMAGE_RATE,
  SPARAM_GRD_GUARD_EFFECT_RATE,
  SPARAM_MCR_MAGIC_COST_RATE,
  SPARAM_MDR_MAGIC_DAMAGE_RATE,
  SPARAM_PDR_PHYSICAL_DAMAGE_RATE,
  SPARAM_PHA_PHARMACOLOGY_RATE,
  SPARAM_REC_RECOVERY_EFFECT_RATE,
  SPARAM_TCR_TP_CHARGE_RATE,
  SPARAM_TGR_TARGET_RATE,
  TRAIT_SPARAM,
  TRAIT_XPARAM,
  XPARAM_EVA_RATE,
  traitEvaRate,
  traitExperienceRate,
  traitFloorDamageRate,
  traitGuardEffectRate,
  traitMagicDamageRate,
  traitMpCostRate,
  traitPharmacologyRate,
  traitPhysicalDamageRate,
  traitRecoveryEffectRate,
  traitTargetRate,
  traitTpChargeRate,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import { Game_BattlerBase } from "./rmmz_objects";

const createMockedBattlerBase = (traits: Trait[]): Rmmz_BattlerBase => {
  const battlerBase = new Game_BattlerBase();
  vi.spyOn(battlerBase, "allTraits").mockReturnValue(traits);
  return battlerBase;
};

const sparam = (dataId: number, value: number): Trait => ({
  code: TRAIT_SPARAM,
  dataId,
  value,
});

/** 全種類を 1 つずつ + 重複と無関係な特徴 */
const traits: Trait[] = [
  sparam(SPARAM_TGR_TARGET_RATE, 2),
  sparam(SPARAM_GRD_GUARD_EFFECT_RATE, 0.5),
  sparam(SPARAM_REC_RECOVERY_EFFECT_RATE, 1.5),
  sparam(SPARAM_PHA_PHARMACOLOGY_RATE, 0.8),
  sparam(SPARAM_MCR_MAGIC_COST_RATE, 0.75),
  sparam(SPARAM_TCR_TP_CHARGE_RATE, 1.2),
  sparam(SPARAM_PDR_PHYSICAL_DAMAGE_RATE, 0.9),
  sparam(SPARAM_MDR_MAGIC_DAMAGE_RATE, 1.1),
  sparam(SPARAM_FDR_FLOOR_DAMAGE_RATE, 0.25),
  sparam(SPARAM_EXR_EXPERIENCE_RATE, 3),
  sparam(SPARAM_TGR_TARGET_RATE, 0.5), // 重なれば積
  { code: TRAIT_XPARAM, dataId: XPARAM_EVA_RATE, value: 0.15 },
];

const sparamCases: {
  name: string;
  sparamId: number;
  fn: (traits: Trait[]) => number;
}[] = [
  { name: "tgr", sparamId: SPARAM_TGR_TARGET_RATE, fn: traitTargetRate },
  { name: "grd", sparamId: SPARAM_GRD_GUARD_EFFECT_RATE, fn: traitGuardEffectRate },
  { name: "rec", sparamId: SPARAM_REC_RECOVERY_EFFECT_RATE, fn: traitRecoveryEffectRate },
  { name: "pha", sparamId: SPARAM_PHA_PHARMACOLOGY_RATE, fn: traitPharmacologyRate },
  { name: "mcr", sparamId: SPARAM_MCR_MAGIC_COST_RATE, fn: traitMpCostRate },
  { name: "tcr", sparamId: SPARAM_TCR_TP_CHARGE_RATE, fn: traitTpChargeRate },
  { name: "pdr", sparamId: SPARAM_PDR_PHYSICAL_DAMAGE_RATE, fn: traitPhysicalDamageRate },
  { name: "mdr", sparamId: SPARAM_MDR_MAGIC_DAMAGE_RATE, fn: traitMagicDamageRate },
  { name: "fdr", sparamId: SPARAM_FDR_FLOOR_DAMAGE_RATE, fn: traitFloorDamageRate },
  { name: "exr", sparamId: SPARAM_EXR_EXPERIENCE_RATE, fn: traitExperienceRate },
];

describe("sparam がコアスクリプトと一致する", () => {
  sparamCases.forEach(({ name, sparamId, fn }) => {
    describe(name, () => {
      test("特徴あり", () => {
        const battlerBase = createMockedBattlerBase(traits);
        const expected: number = battlerBase.sparam(sparamId);
        const result: number = fn(traits);
        expect(result).toBe(expected);
      });

      test("特徴なし", () => {
        const battlerBase = createMockedBattlerBase([]);
        const expected: number = battlerBase.sparam(sparamId);
        const result: number = fn([]);
        expect(result).toBe(expected);
      });
    });
  });
});

describe("xparam の取りこぼし", () => {
  test("traitEvaRate", () => {
    const battlerBase = createMockedBattlerBase(traits);
    const expected: number = battlerBase.xparam(XPARAM_EVA_RATE);
    const result: number = traitEvaRate(traits);
    expect(result).toBe(expected);
  });
});
