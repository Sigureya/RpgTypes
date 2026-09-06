import { describe, expect, test } from "vitest";
import { battlersRandomTarget } from "./randomSelect";
import type { Targetable } from "./types";

type Battler = Targetable & { name: string };

const battler = (name: string, tgr: number): Battler => ({
  name,
  tgr,
  isAlive: () => true,
  isDead: () => false,
  states: () => [],
  allTraits: () => [],
});

/** tgr の合計は 4。境界は 1 / 2 / 4 */
const unit = [battler("a", 1), battler("b", 1), battler("c", 2)];

describe("battlersRandomTarget", () => {
  test("空なら空", () => {
    expect(battlersRandomTarget([], () => 0)).toEqual([]);
  });

  test("1 人なら repeat の数だけその 1 人が並ぶ", () => {
    const only = battler("solo", 1);
    const result = battlersRandomTarget([only], () => 0.5, 3);
    expect(result).toEqual([only, only, only]);
  });

  test("重みの小さい側は乱数が小さいときに当たる", () => {
    expect(battlersRandomTarget(unit, () => 0)[0]).toBe(unit[0]);
    expect(battlersRandomTarget(unit, () => 0.2)[0]).toBe(unit[0]);
  });

  test("重みの区切りで対象が変わる", () => {
    // 合計 4。0.3*4=1.2 → 2 人目、0.6*4=2.4 → 3 人目
    expect(battlersRandomTarget(unit, () => 0.3)[0]).toBe(unit[1]);
    expect(battlersRandomTarget(unit, () => 0.6)[0]).toBe(unit[2]);
  });

  test("乱数が上限なら最後の 1 人になる", () => {
    expect(battlersRandomTarget(unit, () => 1)[0]).toBe(unit[2]);
  });

  test("repeat の回数だけ乱数を引く", () => {
    const values = [0, 0.3, 0.6];
    let index = 0;
    const randomFn = () => values[index++];
    const result = battlersRandomTarget(unit, randomFn, 3);
    expect(result).toEqual([unit[0], unit[1], unit[2]]);
    expect(index).toBe(3);
  });

  test("tgr が 0 の対象は、乱数が正なら選ばれない", () => {
    const zero = [battler("zero", 0), battler("one", 1)];
    expect(battlersRandomTarget(zero, () => 0.5)[0]).toBe(zero[1]);
    // 乱数が厳密に 0 のときだけ先頭が当たる。コアスクリプトの
    // Game_Unit.randomTarget と同じ縁の挙動 (tgrRand <= 0)
    expect(battlersRandomTarget(zero, () => 0)[0]).toBe(zero[0]);
  });

  test("tgr は 1 人につき 1 回しか読まない", () => {
    // tgr は値ではなく計算 (sparam -> traitsPi -> allTraits)。
    // 読み直すとバトラーごとに配列を作り直すことになる。
    const counts: number[] = [0, 0, 0];
    const counted = counts.map((_, index) =>
      Object.defineProperty(battler(`b${index}`, 1), "tgr", {
        get: () => {
          counts[index] += 1;
          return 1;
        },
      }),
    );
    battlersRandomTarget(counted, () => 0.5, 3);
    expect(counts).toEqual([1, 1, 1]);
  });
});
