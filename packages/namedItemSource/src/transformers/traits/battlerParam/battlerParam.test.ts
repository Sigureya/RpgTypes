import { describe, expect, test } from "vitest";

import type {
  RegularParamLabels,
  ExtraParamLabels,
  SpecialParamLabels,
} from "@sigureya/rpgtypes";
import {
  REGULAR_PARAM_AGI,
  REGULAR_PARAM_ATK,
  REGULAR_PARAM_DEF,
  REGULAR_PARAM_LUK,
  REGULAR_PARAM_MATK,
  REGULAR_PARAM_MAX_HP,
  REGULAR_PARAM_MAX_MP,
  REGULAR_PARAM_MDEF,
  EXTRA_PARAM_CEV,
  EXTRA_PARAM_EVA,
  EXTRA_PARAM_CNT,
  EXTRA_PARAM_CRI,
  EXTRA_PARAM_HIT,
  EXTRA_PARAM_HRG,
  EXTRA_PARAM_MEV,
  EXTRA_PARAM_MRF,
  EXTRA_PARAM_MRG,
  EXTRA_PARAM_TRG,
  SPECIAL_PARAM_EXR,
  SPECIAL_PARAM_TGR,
  SPECIAL_PARAM_FDR,
  SPECIAL_PARAM_GRD,
  SPECIAL_PARAM_MCR,
  SPECIAL_PARAM_TCR,
  SPECIAL_PARAM_PDR,
  SPECIAL_PARAM_MDR,
  SPECIAL_PARAM_PHA,
  SPECIAL_PARAM_REC,
} from "@sigureya/rpgtypes";
import {
  regularParamName,
  extraParamName,
  specialParamName,
} from "./battlerParam";

describe("regularParamName", () => {
  const labels: RegularParamLabels = {
    maxHp: "Max HP",
    maxMp: "Max MP",
    atk: "Attack",
    def: "Defense",
    matk: "Magic Attack",
    mdef: "Magic Defense",
    agi: "Agility",
    luk: "Luck",
  };

  test("should return correct label for regular parameters", () => {
    expect(regularParamName(REGULAR_PARAM_MAX_HP, labels)).toBe("Max HP");
    expect(regularParamName(REGULAR_PARAM_MAX_MP, labels)).toBe("Max MP");
    expect(regularParamName(REGULAR_PARAM_ATK, labels)).toBe("Attack");
    expect(regularParamName(REGULAR_PARAM_DEF, labels)).toBe("Defense");
    expect(regularParamName(REGULAR_PARAM_MATK, labels)).toBe("Magic Attack");
    expect(regularParamName(REGULAR_PARAM_MDEF, labels)).toBe("Magic Defense");
    expect(regularParamName(REGULAR_PARAM_AGI, labels)).toBe("Agility");
    expect(regularParamName(REGULAR_PARAM_LUK, labels)).toBe("Luck");
  });

  test("should return fallback string for unknown parameter index", () => {
    expect(regularParamName(999, labels)).toBe("?rparams[999]");
  });
});

describe("extraParamName", () => {
  const labels: ExtraParamLabels = {
    criticalEvasionRate: "Critical Evasion",
    evasionRate: "Evasion",
    counterAttackRate: "Counterattack",
    criticalRate: "Critical",
    hitRate: "Hit",
    hpRegenerationRate: "HP Regen",
    magicEvasionRate: "Magic Evasion",
    magicReflectionRate: "Magic Reflection",
    mpRegenerationRate: "MP Regen",
    tpRegenerationRate: "TP Regen",
  };

  test("should return correct label for extra parameters", () => {
    expect(extraParamName(EXTRA_PARAM_CEV, labels)).toBe("Critical Evasion");
    expect(extraParamName(EXTRA_PARAM_EVA, labels)).toBe("Evasion");
    expect(extraParamName(EXTRA_PARAM_CNT, labels)).toBe("Counterattack");
    expect(extraParamName(EXTRA_PARAM_CRI, labels)).toBe("Critical");
    expect(extraParamName(EXTRA_PARAM_HIT, labels)).toBe("Hit");
    expect(extraParamName(EXTRA_PARAM_HRG, labels)).toBe("HP Regen");
    expect(extraParamName(EXTRA_PARAM_MEV, labels)).toBe("Magic Evasion");
    expect(extraParamName(EXTRA_PARAM_MRF, labels)).toBe("Magic Reflection");
    expect(extraParamName(EXTRA_PARAM_MRG, labels)).toBe("MP Regen");
    expect(extraParamName(EXTRA_PARAM_TRG, labels)).toBe("TP Regen");
  });

  test("should return fallback string for unknown parameter index", () => {
    expect(extraParamName(123, labels)).toBe("?xparams[123]");
  });
});

describe("specialParamName", () => {
  const labels: SpecialParamLabels = {
    experienceRate: "EXP Rate",
    targetRate: "Target Rate",
    floorDamageRate: "Floor Damage",
    guradEffectRate: "Guard Effect",
    mpCostRate: "MP Cost",
    tpChargeRate: "TP Charge",
    physicalDamageRate: "Physical Damage",
    magicDamageRate: "Magic Damage",
    pharmacology: "Pharmacology",
    recoveryEffectRate: "Recovery Effect",
  };

  test("should return correct label for special parameters", () => {
    expect(specialParamName(SPECIAL_PARAM_EXR, labels)).toBe("EXP Rate");
    expect(specialParamName(SPECIAL_PARAM_TGR, labels)).toBe("Target Rate");
    expect(specialParamName(SPECIAL_PARAM_FDR, labels)).toBe("Floor Damage");
    expect(specialParamName(SPECIAL_PARAM_GRD, labels)).toBe("Guard Effect");
    expect(specialParamName(SPECIAL_PARAM_MCR, labels)).toBe("MP Cost");
    expect(specialParamName(SPECIAL_PARAM_TCR, labels)).toBe("TP Charge");
    expect(specialParamName(SPECIAL_PARAM_PDR, labels)).toBe("Physical Damage");
    expect(specialParamName(SPECIAL_PARAM_MDR, labels)).toBe("Magic Damage");
    expect(specialParamName(SPECIAL_PARAM_PHA, labels)).toBe("Pharmacology");
    expect(specialParamName(SPECIAL_PARAM_REC, labels)).toBe("Recovery Effect");
  });

  test("should return fallback string for unknown parameter index", () => {
    expect(specialParamName(999, labels)).toBe("?sparams[999]");
  });
});
