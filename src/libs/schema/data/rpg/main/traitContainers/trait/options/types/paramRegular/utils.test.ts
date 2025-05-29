import type { Data_NamedItem } from "@RpgTypes/schema/data/rpg/main/entitys";
import { describe, test, expect } from "vitest";
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
import { foldRegularParam } from "./utils";

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
  const result = foldRegularParam(param);
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
  test("", () => {
    const sortedExpected = result.sort((a, b) => a.id - b.id);
    expect(result).toEqual(sortedExpected);
  });
});
