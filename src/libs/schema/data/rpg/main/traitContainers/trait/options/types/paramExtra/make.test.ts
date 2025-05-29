import { describe, test, expect } from "vitest";
import {
  EXTRA_PARAM_HIT,
  EXTRA_PARAM_EVA,
  EXTRA_PARAM_CRI,
  EXTRA_PARAM_CEV,
  EXTRA_PARAM_MEV,
  EXTRA_PARAM_MRF,
  EXTRA_PARAM_CNT,
  EXTRA_PARAM_HRG,
  EXTRA_PARAM_MRG,
  EXTRA_PARAM_TRG,
} from "./constants";
import { foldExtraParam } from "./make";
import type { ExtraParamLabels } from "./xparamLabels";
import type { Data_NamedItem2 } from "@RpgTypes/schema/namedItemSource";

describe("foldXParam", () => {
  const xparam: ExtraParamLabels = {
    hitRate: "Hit Rate",
    evasionRate: "Evasion Rate",
    criticalRate: "Critical Rate",
    criticalEvasionRate: "Critical Evasion Rate",
    magicEvasionRate: "Magic Evasion Rate",
    magicReflectionRate: "Magic Reflection Rate",
    counterAttackRate: "Counter Attack Rate",
    hpRegenerationRate: "HP Regeneration Rate",
    mpRegenerationRate: "MP Regeneration Rate",
    tpRegenerationRate: "TP Regeneration Rate",
  };

  const result = foldExtraParam(xparam);
  test("should return correct extra parameter options", () => {
    const expected: Data_NamedItem2[] = [
      { id: EXTRA_PARAM_HIT, name: "Hit Rate" },
      { id: EXTRA_PARAM_EVA, name: "Evasion Rate" },
      { id: EXTRA_PARAM_CRI, name: "Critical Rate" },
      { id: EXTRA_PARAM_CEV, name: "Critical Evasion Rate" },
      { id: EXTRA_PARAM_MEV, name: "Magic Evasion Rate" },
      { id: EXTRA_PARAM_MRF, name: "Magic Reflection Rate" },
      { id: EXTRA_PARAM_CNT, name: "Counter Attack Rate" },
      { id: EXTRA_PARAM_HRG, name: "HP Regeneration Rate" },
      { id: EXTRA_PARAM_MRG, name: "MP Regeneration Rate" },
      { id: EXTRA_PARAM_TRG, name: "TP Regeneration Rate" },
    ];
    expect(result).toEqual(expected);
  });
  test("should be sorted by id", () => {
    const sortedResult = [...result].sort((a, b) => a.id - b.id);
    expect(result).toEqual(sortedResult);
  });
});
