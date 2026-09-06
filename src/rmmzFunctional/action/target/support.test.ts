import { describe, expect, test } from "vitest";
import { repeatTargets, smoothTarget } from "./support";

describe("repeatTargets", () => {
  test("1 回なら並びも長さも変わらない", () => {
    const battlers = ["a", "b", "c"];
    const expected: string[] = ["a", "b", "c"];
    const result: string[] = repeatTargets(battlers, 1);
    expect(result).toEqual(expected);
    expect(result).not.toBe(battlers);
  });

  test("n 回なら各対象が連続して並ぶ", () => {
    const expected: string[] = ["a", "a", "a", "b", "b", "b"];
    const result: string[] = repeatTargets(["a", "b"], 3);
    expect(result).toEqual(expected);
  });

  test("空なら空", () => {
    expect(repeatTargets([], 3)).toEqual([]);
  });

  test("0 回なら空", () => {
    expect(repeatTargets(["a", "b"], 0)).toEqual([]);
  });
});

describe("smoothTarget", () => {
  const alive = (v: string) => v !== "dead";

  test("指定の添字が条件を満たすならそれを返す", () => {
    expect(smoothTarget(["a", "b"], 1, alive)).toBe("b");
  });

  test("満たさないなら別の該当者を探す", () => {
    expect(smoothTarget(["a", "dead", "c"], 1, alive)).toBe("a");
  });

  test("誰も満たさないなら undefined", () => {
    expect(smoothTarget(["dead", "dead"], 0, alive)).toBe(undefined);
  });

  test("空なら undefined", () => {
    expect(smoothTarget([], 0, alive)).toBe(undefined);
  });
});
