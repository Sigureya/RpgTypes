import { describe, expect, test } from "vitest";
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
import { foldSpecialParams } from "./make";
import type { Data_NamedItem2 } from "@RpgTypes/schema/namedItemSource";

describe("foldSpecialParams", () => {
  const specialParams: SpecialParamLabels = {
    targetRate: "Target Rate",
    guradEffectRate: "Guard Effect Rate",
    recoveryEffectRate: "Recovery Effect Rate",
    pharmacology: "Pharmacology",
    mpCostRate: "MP Cost Rate",
    tpChargeRate: "TP Charge Rate",
    physicalDamageRate: "Physical Damage Rate",
    magicDamageRate: "Magic Damage Rate",
    floorDamageRate: "Floor Damage Rate",
    experienceRate: "Experience Rate",
  };

  const result = foldSpecialParams(specialParams);
  test("should return correct special parameter options", () => {
    const expected: Data_NamedItem2[] = [
      { id: SPECIAL_PARAM_TGR, name: "Target Rate" },
      { id: SPECIAL_PARAM_GRD, name: "Guard Effect Rate" },
      { id: SPECIAL_PARAM_REC, name: "Recovery Effect Rate" },
      { id: SPECIAL_PARAM_PHA, name: "Pharmacology" },
      { id: SPECIAL_PARAM_MCR, name: "MP Cost Rate" },
      { id: SPECIAL_PARAM_TCR, name: "TP Charge Rate" },
      { id: SPECIAL_PARAM_PDR, name: "Physical Damage Rate" },
      { id: SPECIAL_PARAM_MDR, name: "Magic Damage Rate" },
      { id: SPECIAL_PARAM_FDR, name: "Floor Damage Rate" },
      { id: SPECIAL_PARAM_EXR, name: "Experience Rate" },
    ];

    expect(result).toEqual(expected);
  });
  test("should be sorted by id", () => {
    const sortedResult = [...result].sort((a, b) => a.id - b.id);
    expect(result).toEqual(sortedResult);
  });
});
