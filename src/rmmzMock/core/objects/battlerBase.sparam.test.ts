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

const xparam = (dataId: number, value: number): Trait => ({
  code: TRAIT_XPARAM,
  dataId,
  value,
});

interface TestCase {
  name: string;
  traits: Trait[];
  expected: {
    tgr: number;
    grd: number;
    rec: number;
    pha: number;
    mcr: number;
    tcr: number;
    pdr: number;
    mdr: number;
    fdr: number;
    exr: number;
    eva: number;
  };
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { traits, expected } = testCase;

    describe("function", () => {
      test("traitTargetRate", () => {
        expect(traitTargetRate(traits)).toBe(expected.tgr);
      });
      test("traitGuardEffectRate", () => {
        expect(traitGuardEffectRate(traits)).toBe(expected.grd);
      });
      test("traitRecoveryEffectRate", () => {
        expect(traitRecoveryEffectRate(traits)).toBe(expected.rec);
      });
      test("traitPharmacologyRate", () => {
        expect(traitPharmacologyRate(traits)).toBe(expected.pha);
      });
      test("traitMpCostRate", () => {
        expect(traitMpCostRate(traits)).toBe(expected.mcr);
      });
      test("traitTpChargeRate", () => {
        expect(traitTpChargeRate(traits)).toBe(expected.tcr);
      });
      test("traitPhysicalDamageRate", () => {
        expect(traitPhysicalDamageRate(traits)).toBe(expected.pdr);
      });
      test("traitMagicDamageRate", () => {
        expect(traitMagicDamageRate(traits)).toBe(expected.mdr);
      });
      test("traitFloorDamageRate", () => {
        expect(traitFloorDamageRate(traits)).toBe(expected.fdr);
      });
      test("traitExperienceRate", () => {
        expect(traitExperienceRate(traits)).toBe(expected.exr);
      });
      test("traitEvaRate", () => {
        expect(traitEvaRate(traits)).toBe(expected.eva);
      });
    });

    describe("BattlerBase", () => {
      test("tgr", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.sparam(SPARAM_TGR_TARGET_RATE)).toBe(expected.tgr);
      });
      test("grd", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.sparam(SPARAM_GRD_GUARD_EFFECT_RATE)).toBe(
          expected.grd,
        );
      });
      test("rec", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.sparam(SPARAM_REC_RECOVERY_EFFECT_RATE)).toBe(
          expected.rec,
        );
      });
      test("pha", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.sparam(SPARAM_PHA_PHARMACOLOGY_RATE)).toBe(
          expected.pha,
        );
      });
      test("mcr", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.sparam(SPARAM_MCR_MAGIC_COST_RATE)).toBe(
          expected.mcr,
        );
      });
      test("tcr", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.sparam(SPARAM_TCR_TP_CHARGE_RATE)).toBe(
          expected.tcr,
        );
      });
      test("pdr", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.sparam(SPARAM_PDR_PHYSICAL_DAMAGE_RATE)).toBe(
          expected.pdr,
        );
      });
      test("mdr", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.sparam(SPARAM_MDR_MAGIC_DAMAGE_RATE)).toBe(
          expected.mdr,
        );
      });
      test("fdr", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.sparam(SPARAM_FDR_FLOOR_DAMAGE_RATE)).toBe(
          expected.fdr,
        );
      });
      test("exr", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.sparam(SPARAM_EXR_EXPERIENCE_RATE)).toBe(
          expected.exr,
        );
      });
      test("eva", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.xparam(XPARAM_EVA_RATE)).toBe(expected.eva);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "特徴なし",
    traits: [],
    // sparam は積なので該当が無ければ 1、xparam は和なので 0
    expected: {
      tgr: 1,
      grd: 1,
      rec: 1,
      pha: 1,
      mcr: 1,
      tcr: 1,
      pdr: 1,
      mdr: 1,
      fdr: 1,
      exr: 1,
      eva: 0,
    },
  },
  {
    name: "全種類を 1 つずつ",
    traits: [
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
      xparam(XPARAM_EVA_RATE, 0.15),
    ],
    expected: {
      tgr: 2,
      grd: 0.5,
      rec: 1.5,
      pha: 0.8,
      mcr: 0.75,
      tcr: 1.2,
      pdr: 0.9,
      mdr: 1.1,
      fdr: 0.25,
      exr: 3,
      eva: 0.15,
    },
  },
  {
    name: "同じ種類が重なる",
    traits: [
      sparam(SPARAM_TGR_TARGET_RATE, 2),
      sparam(SPARAM_TGR_TARGET_RATE, 0.5),
      sparam(SPARAM_GRD_GUARD_EFFECT_RATE, 0.5),
      sparam(SPARAM_GRD_GUARD_EFFECT_RATE, 0.5),
      xparam(XPARAM_EVA_RATE, 0.15),
      xparam(XPARAM_EVA_RATE, 0.05),
    ],
    expected: {
      // 積: 2 * 0.5
      tgr: 1,
      // 積: 0.5 * 0.5
      grd: 0.25,
      rec: 1,
      pha: 1,
      mcr: 1,
      tcr: 1,
      pdr: 1,
      mdr: 1,
      fdr: 1,
      exr: 1,
      // 和: 0.15 + 0.05
      eva: 0.2,
    },
  },
  {
    name: "別の sparam は混ざらない",
    traits: [
      sparam(SPARAM_TGR_TARGET_RATE, 4),
      sparam(SPARAM_EXR_EXPERIENCE_RATE, 0.5),
    ],
    expected: {
      tgr: 4,
      grd: 1,
      rec: 1,
      pha: 1,
      mcr: 1,
      tcr: 1,
      pdr: 1,
      mdr: 1,
      fdr: 1,
      exr: 0.5,
      eva: 0,
    },
  },
];

testCases.forEach(runTestCase);
