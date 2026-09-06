import { describe, expect, test, vi } from "vitest";
import type { Data_Skill, Trait } from "@RpgTypes/rmmz/rpg";
import { TRAIT_ATTACK_ELEMENT, TRAIT_ELEMENT_RATE } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import { actionCalcElementRate } from "./rate";

// 計算そのものの検証は
// src/rmmz/rpg/data/main/traitContainers/trait/rate.test.ts にある。
// ここでは バトラー から特徴を取り出す回数だけを見る。

const traits: Trait[] = [
  { code: TRAIT_ELEMENT_RATE, dataId: 1, value: 0.5 },
  { code: TRAIT_ELEMENT_RATE, dataId: 2, value: 2 },
  { code: TRAIT_ATTACK_ELEMENT, dataId: 1, value: 0 },
  { code: TRAIT_ATTACK_ELEMENT, dataId: 2, value: 0 },
];

const skill = (elementId: number) =>
  ({ damage: { elementId } }) as unknown as Data_Skill;

describe("actionCalcElementRate", () => {
  test("allTraits は 1 回しか呼ばない", () => {
    // allTraits() は traitObjects を concat で畳むため、呼ぶたびに配列を作る
    const allTraits = vi.fn(() => traits);
    const target = { allTraits } as unknown as Rmmz_BattlerBase;

    expect(actionCalcElementRate(skill(-1), target)).toBe(2);
    expect(allTraits).toHaveBeenCalledTimes(1);
  });

  test("属性指定でも 1 回", () => {
    const allTraits = vi.fn(() => traits);
    const target = { allTraits } as unknown as Rmmz_BattlerBase;

    expect(actionCalcElementRate(skill(1), target)).toBe(0.5);
    expect(allTraits).toHaveBeenCalledTimes(1);
  });
});
