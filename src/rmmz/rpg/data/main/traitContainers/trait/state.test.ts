import { describe, expect, test } from "vitest";
import { TRAIT_STATE_RATE, TRAIT_STATE_RESIST } from "./core";
import { traitStateRate } from "./rate";
import {
  traitsEffectiveStateRate,
  traitsIsStateResist,
  traitsStateResistSet,
} from "./state";
import type { Trait } from "./types";

const resist = (dataId: number): Trait => ({
  code: TRAIT_STATE_RESIST,
  dataId,
  value: 0,
});

const rate = (dataId: number, value: number): Trait => ({
  code: TRAIT_STATE_RATE,
  dataId,
  value,
});

/** 3 = 無効化 + 倍率あり / 4 = 倍率だけ / 5 = 無効化だけ */
const traits: Trait[] = [resist(3), rate(3, 2), rate(4, 0.5), resist(5)];

describe("traitsIsStateResist", () => {
  test("無効化する特徴があれば true", () => {
    expect(traitsIsStateResist(traits, 3)).toBe(true);
    expect(traitsIsStateResist(traits, 5)).toBe(true);
  });

  test("無ければ false", () => {
    expect(traitsIsStateResist(traits, 4)).toBe(false);
    expect(traitsIsStateResist(traits, 99)).toBe(false);
    expect(traitsIsStateResist([], 3)).toBe(false);
  });
});

describe("traitsStateResistSet", () => {
  test("無効化しているステートの一覧", () => {
    const expected: number[] = [3, 5];
    const result: number[] = traitsStateResistSet(traits);
    expect(result).toEqual(expected);
  });
});

describe("traitsEffectiveStateRate", () => {
  test("無効化していれば倍率によらず 0", () => {
    // 倍率 2 倍の特徴があっても、無効化が勝つ
    expect(traitStateRate(traits, 3)).toBe(2);
    expect(traitsEffectiveStateRate(traits, 3)).toBe(0);
  });

  test("倍率の指定が無い無効化も 0", () => {
    expect(traitsEffectiveStateRate(traits, 5)).toBe(0);
  });

  test("無効化していなければ倍率そのもの", () => {
    expect(traitsEffectiveStateRate(traits, 4)).toBe(0.5);
  });

  test("該当が無ければ等倍", () => {
    expect(traitsEffectiveStateRate(traits, 99)).toBe(1);
  });
});

describe("表示用の倍率とは別物である", () => {
  test("traitStateRate は無効化を見ない", () => {
    // パラメータ表示などでは「無効化」と「倍率」を分けて出す
    expect(traitStateRate(traits, 3)).toBe(2);
    expect(traitStateRate(traits, 5)).toBe(1);
  });
});
