import { describe, test, expect } from "vitest";
import type { Data_NamedItem } from "@RpgTypes/libs";
import {
  REGULAR_PARAM_MAX_HP,
  REGULAR_PARAM_MAX_MP,
  REGULAR_PARAM_ATK,
  REGULAR_PARAM_DEF,
  REGULAR_PARAM_MATK,
  REGULAR_PARAM_MDEF,
  REGULAR_PARAM_AGI,
  REGULAR_PARAM_LUK,
} from "./constants";
import type { RegularParamLabels } from "./labels";
import { regularParamsToArray, regularParamName } from "./regularParam";

describe("foldRegularParam", () => {
  const param: RegularParamLabels = {
    maxHp: "Max HP",
    maxMp: "Max MP",
    atk: "Attack",
    def: "Defense",
    matk: "Magic Attack",
    mdef: "Magic Defense",
    agi: "Agility",
    luk: "Luck",
  };
  const result = regularParamsToArray(param);
  test("should return correct regular parameter options", () => {
    const expected: Data_NamedItem[] = [
      { id: REGULAR_PARAM_MAX_HP, name: "Max HP" },
      { id: REGULAR_PARAM_MAX_MP, name: "Max MP" },
      { id: REGULAR_PARAM_ATK, name: "Attack" },
      { id: REGULAR_PARAM_DEF, name: "Defense" },
      { id: REGULAR_PARAM_MATK, name: "Magic Attack" },
      { id: REGULAR_PARAM_MDEF, name: "Magic Defense" },
      { id: REGULAR_PARAM_AGI, name: "Agility" },
      { id: REGULAR_PARAM_LUK, name: "Luck" },
    ];
    expect(result).toEqual(expected);
  });
  test("should sorted the result", () => {
    const sortedExpected = result.sort((a, b) => a.id - b.id);
    expect(result).toEqual(sortedExpected);
  });
});

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
