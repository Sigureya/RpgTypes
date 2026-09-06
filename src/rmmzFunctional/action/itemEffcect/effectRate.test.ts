import { describe, expect, test, vi } from "vitest";
import type { ItemEffect, Trait } from "@RpgTypes/rmmz/rpg";
import {
  TRAIT_ATTACK_STATE,
  TRAIT_STATE_RATE,
  TRAIT_STATE_RESIST,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import {
  actionCalcAttackStateRate,
  actionCalcNormalStateRate,
  lukEffectRate,
  traitsCalcAttackStateRate,
  traitsCalcNormalStateRate,
} from "./effectRate";

const stateRate = (dataId: number, value: number): Trait => ({
  code: TRAIT_STATE_RATE,
  dataId,
  value,
});

const attackState = (dataId: number, value: number): Trait => ({
  code: TRAIT_ATTACK_STATE,
  dataId,
  value,
});

const effect = (dataId: number, value1: number): ItemEffect =>
  ({ code: 21, dataId, value1, value2: 0 }) as ItemEffect;

describe("lukEffectRate", () => {
  test("運が同じなら等倍", () => {
    expect(lukEffectRate(10, 10)).toBe(1.0);
  });

  test("運の差 1 につき 0.1%", () => {
    expect(lukEffectRate(110, 10)).toBeCloseTo(1.1, 10);
    expect(lukEffectRate(10, 110)).toBeCloseTo(0.9, 10);
  });

  test("負にはならない", () => {
    expect(lukEffectRate(0, 100000)).toBe(0);
  });
});

describe("traitsCalcAttackStateRate", () => {
  test("効果値・被ステート率・付与率・運補正の積になる", () => {
    const subjectTraits: Trait[] = [attackState(3, 0.5)];
    const targetTraits: Trait[] = [stateRate(3, 0.8)];
    const result = traitsCalcAttackStateRate(
      3,
      subjectTraits,
      targetTraits,
      1.1,
      effect(3, 2),
    );
    expect(result).toBeCloseTo(2 * 0.8 * 0.5 * 1.1, 10);
  });

  test("該当する特徴が無ければ付与率 0", () => {
    const result = traitsCalcAttackStateRate(3, [], [], 1, effect(3, 2));
    expect(result).toBe(0);
  });
});

describe("無効化されたステート", () => {
  const resist = (dataId: number): Trait => ({
    code: TRAIT_STATE_RESIST,
    dataId,
    value: 0,
  });

  test("通常攻撃によるステート付与は 0 になる", () => {
    const subjectTraits: Trait[] = [attackState(3, 0.5)];
    const targetTraits: Trait[] = [stateRate(3, 0.8), resist(3)];
    const result = traitsCalcAttackStateRate(
      3,
      subjectTraits,
      targetTraits,
      1.1,
      effect(3, 2),
    );
    // 倍率が付いていても無効化が勝つ。呼び出し元はここで打ち切れる
    expect(result).toBe(0);
  });

  test("効果によるステート付与も 0 になる", () => {
    const targetTraits: Trait[] = [stateRate(5, 0.5), resist(5)];
    const result = traitsCalcNormalStateRate(targetTraits, 1.1, effect(5, 2));
    expect(result).toBe(0);
  });
});

describe("traitsCalcNormalStateRate", () => {
  test("効果の dataId で被ステート率を引く", () => {
    const targetTraits: Trait[] = [stateRate(5, 0.5)];
    const result = traitsCalcNormalStateRate(targetTraits, 1.1, effect(5, 2));
    expect(result).toBeCloseTo(2 * 0.5 * 1.1, 10);
  });
});

describe("バトラーを受ける層", () => {
  const makeBattler = (traits: Trait[], luk: number) => {
    const allTraits = vi.fn(() => traits);
    const lukGetter = vi.fn(() => luk);
    const battler = { allTraits } as unknown as Rmmz_BattlerBase;
    Object.defineProperty(battler, "luk", { get: lukGetter });
    return { battler, allTraits, lukGetter };
  };

  test("allTraits と luk を 1 回ずつしか読まない", () => {
    // どちらも allTraits() を辿るので、読むたびに配列が作り直される
    const subject = makeBattler([attackState(3, 0.5)], 10);
    const target = makeBattler([stateRate(3, 0.8)], 10);

    actionCalcAttackStateRate(3, subject.battler, target.battler, effect(3, 2));

    expect(subject.allTraits).toHaveBeenCalledTimes(1);
    expect(target.allTraits).toHaveBeenCalledTimes(1);
    expect(subject.lukGetter).toHaveBeenCalledTimes(1);
    expect(target.lukGetter).toHaveBeenCalledTimes(1);
  });

  test("通常のステート付与は対象の特徴だけを読む", () => {
    const subject = makeBattler([], 10);
    const target = makeBattler([stateRate(5, 0.5)], 10);

    const result = actionCalcNormalStateRate(
      subject.battler,
      target.battler,
      effect(5, 2),
    );

    expect(result).toBe(1);
    expect(subject.allTraits).toHaveBeenCalledTimes(0);
    expect(target.allTraits).toHaveBeenCalledTimes(1);
  });
});
