import { describe, expect, test } from "vitest";
import { EASING_IN, EASING_IN_OUT, EASING_LINEAR, EASING_OUT } from "./constants";
import { calcEasing, resolveEasing, toEasingKind } from "./resolve";
import type { Picture_Easing, Picture_EasingKind } from "./types";

const easing = (kindId: Picture_EasingKind): Picture_Easing => ({
  kindId,
  exponent: 2,
});

describe("resolveEasing", () => {
  test("線形はそのまま返す", () => {
    const result: number = resolveEasing(easing(EASING_LINEAR))(0.25);
    expect(result).toBe(0.25);
  });

  test("easeIn は exponent 乗", () => {
    const result: number = resolveEasing(easing(EASING_IN))(0.5);
    expect(result).toBe(0.25);
  });

  test("easeOut は easeIn の裏返し", () => {
    const result: number = resolveEasing(easing(EASING_OUT))(0.5);
    expect(result).toBe(0.75);
  });

  test("easeInOut は前半が easeIn の半分", () => {
    const result: number = resolveEasing(easing(EASING_IN_OUT))(0.25);
    expect(result).toBe(0.125);
  });

  test("両端は種類によらず 0 と 1", () => {
    const kinds: Picture_EasingKind[] = [
      EASING_LINEAR,
      EASING_IN,
      EASING_OUT,
      EASING_IN_OUT,
    ];
    kinds.forEach((kind) => {
      expect(resolveEasing(easing(kind))(0)).toBe(0);
      expect(resolveEasing(easing(kind))(1)).toBe(1);
    });
  });

  test("exponent が変われば結果も変わる", () => {
    const squared: number = resolveEasing({ kindId: EASING_IN, exponent: 2 })(
      0.5,
    );
    const cubed: number = resolveEasing({ kindId: EASING_IN, exponent: 3 })(0.5);
    expect(squared).toBe(0.25);
    expect(cubed).toBe(0.125);
  });
});

describe("calcEasing", () => {
  test("resolveEasing と同じ結果になる", () => {
    const expected: number = resolveEasing(easing(EASING_IN))(0.5);
    const result: number = calcEasing(easing(EASING_IN), 0.5);
    expect(result).toBe(expected);
  });
});

describe("toEasingKind", () => {
  test("0..3 はそのまま通す", () => {
    const expected: Picture_EasingKind[] = [
      EASING_LINEAR,
      EASING_IN,
      EASING_OUT,
      EASING_IN_OUT,
    ];
    const result: Picture_EasingKind[] = [0, 1, 2, 3].map(toEasingKind);
    expect(result).toEqual(expected);
  });

  test("範囲外は線形として扱う", () => {
    // Game_Picture.calcEasing の default 分岐に合わせる
    expect(toEasingKind(4)).toBe(EASING_LINEAR);
    expect(toEasingKind(-1)).toBe(EASING_LINEAR);
  });
});
