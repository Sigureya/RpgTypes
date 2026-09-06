import { describe, expect, test } from "vitest";
import { TRAIT_ATTACK_ELEMENT, TRAIT_ELEMENT_RATE } from "./core";
import { traitsCalcElementRate, traitsElementMaxRate } from "./rate";
import type { Trait } from "./types";

const rate = (dataId: number, value: number): Trait => ({
  code: TRAIT_ELEMENT_RATE,
  dataId,
  value,
});

const attackElement = (dataId: number): Trait => ({
  code: TRAIT_ATTACK_ELEMENT,
  dataId,
  value: 0,
});

const traits: Trait[] = [rate(1, 0.5), rate(2, 2), rate(3, 1.5)];

describe("traitsElementMaxRate", () => {
  test("属性が無ければ等倍", () => {
    expect(traitsElementMaxRate(traits, [])).toBe(1.0);
  });

  test("最も有効度の高い属性を採る", () => {
    expect(traitsElementMaxRate(traits, [1, 2])).toBe(2);
  });

  test("該当しない属性は等倍として扱う", () => {
    expect(traitsElementMaxRate(traits, [9])).toBe(1);
  });

  test("同じ属性が重なれば積になる", () => {
    const doubled: Trait[] = [rate(1, 0.5), rate(1, 0.5)];
    expect(traitsElementMaxRate(doubled, [1])).toBe(0.25);
  });
});

describe("traitsCalcElementRate", () => {
  test("属性 ID が正ならその属性の有効度", () => {
    expect(traitsCalcElementRate(traits, 1)).toBe(0.5);
  });

  test("属性 ID が負なら攻撃属性の中で最も有効なもの", () => {
    const withAttack: Trait[] = [...traits, attackElement(1), attackElement(2)];
    expect(traitsCalcElementRate(withAttack, -1)).toBe(2);
  });

  test("攻撃属性が無ければ等倍", () => {
    expect(traitsCalcElementRate(traits, -1)).toBe(1.0);
  });
});
