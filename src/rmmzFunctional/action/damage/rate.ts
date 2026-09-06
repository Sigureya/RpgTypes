import type { Data_Skill } from "@RpgTypes/rmmz/rpg";
import { traitsCalcElementRate } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";

/**
 * バトラーから特徴を 1 回だけ取り出して渡す。
 * 計算そのものは特徴だけで完結するので trait/rate.ts にある。
 */
export const actionCalcElementRate = (
  skill: Data_Skill,
  target: Rmmz_BattlerBase,
): number => {
  return traitsCalcElementRate(target.allTraits(), skill.damage.elementId);
};
