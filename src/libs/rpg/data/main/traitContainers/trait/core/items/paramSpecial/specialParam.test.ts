import { describe, expect, test } from "vitest";
import type { Data_NamedItem } from "src/namedItemSource";
import {
  SPECIAL_PARAM_TGR,
  SPECIAL_PARAM_GRD,
  SPECIAL_PARAM_REC,
  SPECIAL_PARAM_PHA,
  SPECIAL_PARAM_MCR,
  SPECIAL_PARAM_TCR,
  SPECIAL_PARAM_PDR,
  SPECIAL_PARAM_MDR,
  SPECIAL_PARAM_FDR,
  SPECIAL_PARAM_EXR,
} from "./constants";
import type { SpecialParamLabels } from "./labels";
import { specialParamsToArray, specialParamName } from "./specialParam";

const mockLabels = Object.freeze({
  targetRate: "Target Rate",
  guardEffectRate: "Guard Effect Rate",
  recoveryEffectRate: "Recovery Effect Rate",
  pharmacology: "Pharmacology",
  mpCostRate: "MP Cost Rate",
  tpChargeRate: "TP Charge Rate",
  physicalDamageRate: "Physical Damage Rate",
  magicDamageRate: "Magic Damage Rate",
  floorDamageRate: "Floor Damage Rate",
  experienceRate: "EXP Rate",
} satisfies SpecialParamLabels);

describe("specialParamsToArray", () => {
  const result = specialParamsToArray(mockLabels);
  test("should return correct special parameter options", () => {
    const expected: Data_NamedItem[] = [
      { id: SPECIAL_PARAM_TGR, name: "Target Rate" },
      { id: SPECIAL_PARAM_GRD, name: "Guard Effect Rate" },
      { id: SPECIAL_PARAM_REC, name: "Recovery Effect Rate" },
      { id: SPECIAL_PARAM_PHA, name: "Pharmacology" },
      { id: SPECIAL_PARAM_MCR, name: "MP Cost Rate" },
      { id: SPECIAL_PARAM_TCR, name: "TP Charge Rate" },
      { id: SPECIAL_PARAM_PDR, name: "Physical Damage Rate" },
      { id: SPECIAL_PARAM_MDR, name: "Magic Damage Rate" },
      { id: SPECIAL_PARAM_FDR, name: "Floor Damage Rate" },
      { id: SPECIAL_PARAM_EXR, name: "EXP Rate" },
    ];

    expect(result).toEqual(expected);
  });
  test("should be sorted by id", () => {
    const sortedResult = [...result].sort((a, b) => a.id - b.id);
    expect(result).toEqual(sortedResult);
  });
});

describe("specialParamName", () => {
  test("should return correct label for special parameters", () => {
    expect(specialParamName(SPECIAL_PARAM_EXR, mockLabels)).toBe(
      mockLabels.experienceRate
    );
    expect(specialParamName(SPECIAL_PARAM_TGR, mockLabels)).toBe(
      mockLabels.targetRate
    );
    expect(specialParamName(SPECIAL_PARAM_FDR, mockLabels)).toBe(
      mockLabels.floorDamageRate
    );
    expect(specialParamName(SPECIAL_PARAM_GRD, mockLabels)).toBe(
      mockLabels.guardEffectRate
    );
    expect(specialParamName(SPECIAL_PARAM_MCR, mockLabels)).toBe(
      mockLabels.mpCostRate
    );
    expect(specialParamName(SPECIAL_PARAM_TCR, mockLabels)).toBe(
      mockLabels.tpChargeRate
    );
    expect(specialParamName(SPECIAL_PARAM_PDR, mockLabels)).toBe(
      mockLabels.physicalDamageRate
    );
    expect(specialParamName(SPECIAL_PARAM_MDR, mockLabels)).toBe(
      mockLabels.magicDamageRate
    );
    expect(specialParamName(SPECIAL_PARAM_PHA, mockLabels)).toBe(
      mockLabels.pharmacology
    );
    expect(specialParamName(SPECIAL_PARAM_REC, mockLabels)).toBe(
      mockLabels.recoveryEffectRate
    );
  });

  test("should return fallback string for unknown parameter index", () => {
    expect(specialParamName(999, mockLabels)).toBe("?sparams[999]");
  });
});
