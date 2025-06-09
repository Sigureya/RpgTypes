import type { Data_NamedItem } from "src/namedItemSource";
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
import { extraParamName, extraParamsToArray } from "./extraParam";
import type { ExtraParamLabels } from "./labels";

describe("extraParamsToArray", () => {
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

  const result = extraParamsToArray(xparam);
  test("should return correct extra parameter options", () => {
    const expected: Data_NamedItem[] = [
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
