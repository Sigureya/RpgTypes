import { describe, expect, test } from "vitest";
import { EASING_LINEAR } from "./easing";
import { updateMove, type Picture_MoveResult } from "./move";
import type { Picture_Target, Picture_Transform } from "./types";

const current: Picture_Transform = {
  x: 0,
  y: 0,
  scaleX: 100,
  scaleY: 100,
  opacity: 255,
};

const makeTarget = (duration: number): Picture_Target => ({
  value: { x: 100, y: 200, scaleX: 50, scaleY: 50, opacity: 0 },
  easing: { kindId: EASING_LINEAR, exponent: 2 },
  duration,
  wholeDuration: duration,
});

describe("updateMove", () => {
  test("移動していなければ何も変えない", () => {
    const result: Picture_MoveResult = updateMove(current, null);
    expect(result.current).toBe(current);
    expect(result.target).toBe(null);
  });

  test("duration が 0 の target は進まず、捨てられもしない", () => {
    const target = makeTarget(0);
    const result: Picture_MoveResult = updateMove(current, target);
    expect(result.current).toBe(current);
    expect(result.target).toBe(target);
  });

  test("線形なら duration 等分で近づく", () => {
    const expected: Picture_Transform = {
      x: 25,
      y: 50,
      scaleX: 87.5,
      scaleY: 87.5,
      opacity: 191.25,
    };
    const result: Picture_MoveResult = updateMove(current, makeTarget(4));
    expect(result.current).toEqual(expected);
    expect(result.target?.duration).toBe(3);
    expect(result.target?.wholeDuration).toBe(4);
  });

  test("最終フレームで目標値と一致し、target を捨てる", () => {
    const target = makeTarget(3);
    let result: Picture_MoveResult = updateMove(current, target);
    result = updateMove(result.current, result.target);
    expect(result.target).not.toBe(null);
    result = updateMove(result.current, result.target);

    expect(result.current).toEqual(target.value);
    expect(result.target).toBe(null);
  });

  test("渡した補間関数が target の kindId より優先される", () => {
    const byKind: Picture_MoveResult = updateMove(current, makeTarget(4));
    const byCallback: Picture_MoveResult = updateMove(
      current,
      makeTarget(4),
      (t) => t * t,
    );
    expect(byKind.current.x).toBe(25);
    expect(byCallback.current.x).toBe(6.25);
  });
});
