import { describe, expect, test, vi } from "vitest";
import type { Data_Skill, Trait } from "@RpgTypes/rmmz/rpg";
import {
  makeDamage,
  makeSkillData,
  TRAIT_ATTACK_ELEMENT,
  TRAIT_ELEMENT_RATE,
} from "@RpgTypes/rmmz/rpg";
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

/** 特徴の一覧だけを持つ偽物。actionCalcElementRate はこれしか読まない */
type FakeTarget = Pick<Rmmz_BattlerBase, "allTraits">;

const skill = (elementId: number): Data_Skill =>
  makeSkillData({ damage: makeDamage({ elementId }) });

describe("actionCalcElementRate", () => {
  test("allTraits は 1 回しか呼ばない", () => {
    // allTraits() は traitObjects を concat で畳むため、呼ぶたびに配列を作る
    const allTraits = vi.fn(() => traits);
    const target: FakeTarget = { allTraits };

    expect(actionCalcElementRate(skill(-1), target)).toBe(2);
    expect(allTraits).toHaveBeenCalledTimes(1);
  });

  test("属性指定でも 1 回", () => {
    const allTraits = vi.fn(() => traits);
    const target: FakeTarget = { allTraits };

    expect(actionCalcElementRate(skill(1), target)).toBe(0.5);
    expect(allTraits).toHaveBeenCalledTimes(1);
  });
});
