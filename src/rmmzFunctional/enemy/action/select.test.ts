import { describe, expect, test, vi } from "vitest";
import type { Enemy_Action } from "@RpgTypes/rmmz";
import {
  enemyActionRatingMax,
  enemyActionRatingZero,
  enemyActionWeightTotal,
  filterEnemyActionsByRating,
  selectEnemyActionByWeight,
  selectEnemyActions,
} from "./select";

const action = (skillId: number, rating: number): Enemy_Action => ({
  skillId,
  rating,
  conditionType: 0,
  conditionParam1: 0,
  conditionParam2: 0,
});

/** rating 5 / 4 / 2 / 1。既定の ratingDistance=3 なら ratingZero=2 */
const actions: Enemy_Action[] = [
  action(101, 5),
  action(102, 4),
  action(103, 2),
  action(104, 1),
];

describe("enemyActionRatingMax", () => {
  test("最大の rating", () => {
    expect(enemyActionRatingMax(actions)).toBe(5);
  });

  test("空なら 0", () => {
    // コアは Math.max(...[]) で -Infinity になるが、
    // 空の行動リストは selectAllActions へ渡らない (makeActions が弾く)
    expect(enemyActionRatingMax([])).toBe(0);
  });

  test("rating が負でも 0 を下回らない", () => {
    expect(enemyActionRatingMax([action(1, -5)])).toBe(0);
  });
});

describe("enemyActionRatingZero", () => {
  test("既定は最大 - 3", () => {
    expect(enemyActionRatingZero(actions)).toBe(2);
  });

  test("距離を指定できる", () => {
    expect(enemyActionRatingZero(actions, 1)).toBe(4);
    expect(enemyActionRatingZero(actions, 5)).toBe(0);
  });
});

describe("filterEnemyActionsByRating", () => {
  test("ratingZero より大きいものだけ残る", () => {
    const expected: Enemy_Action[] = [actions[0], actions[1]];
    const result: Enemy_Action[] = filterEnemyActionsByRating(actions, 2);
    expect(result).toEqual(expected);
  });

  test("同値は残らない", () => {
    expect(filterEnemyActionsByRating(actions, 5)).toEqual([]);
  });
});

describe("enemyActionWeightTotal", () => {
  test("rating - ratingZero の合計", () => {
    // 5-2=3, 4-2=2, 残り 2 つは 0 以下なので 0
    expect(enemyActionWeightTotal(actions, 2)).toBe(5);
  });

  test("負の重みは 0 として扱う", () => {
    // コアは絞り込み済みの一覧しか渡さないので負は出ない。
    // ここでは絞り込み前を渡されても合計が減らないことを固定する
    expect(enemyActionWeightTotal([action(1, 0)], 2)).toBe(0);
  });

  test("空なら 0", () => {
    expect(enemyActionWeightTotal([], 2)).toBe(0);
  });
});

describe("selectEnemyActionByWeight", () => {
  const rated: Enemy_Action[] = [actions[0], actions[1]]; // 重み 3 と 2、合計 5

  test("乱数の位置で対象が変わる", () => {
    const picked = [0, 1, 2, 3, 4].map(
      (value) => selectEnemyActionByWeight(rated, 2, () => value)?.skillId,
    );
    expect(picked).toEqual([101, 101, 101, 102, 102]);
  });

  test("合計が 0 なら null。乱数も引かない", () => {
    const random = vi.fn(() => 0);
    expect(selectEnemyActionByWeight([action(1, 2)], 2, random)).toBe(null);
    expect(random).not.toHaveBeenCalled();
  });

  test("空なら null", () => {
    expect(selectEnemyActionByWeight([], 2, () => 0)).toBe(null);
  });

  test("合計を上限として乱数を引く", () => {
    const random = vi.fn(() => 0);
    selectEnemyActionByWeight(rated, 2, random);
    expect(random).toHaveBeenCalledWith(5);
    expect(random).toHaveBeenCalledOnce();
  });
});

describe("selectEnemyActions", () => {
  test("行動回数のぶんだけ選ぶ", () => {
    const result = selectEnemyActions(actions, 3, () => 0);
    expect(result).toHaveLength(3);
    expect(result.map((a) => a?.skillId)).toEqual([101, 101, 101]);
  });

  test("回数ごとに乱数を引く", () => {
    const random = vi.fn(() => 0);
    selectEnemyActions(actions, 3, random);
    expect(random).toHaveBeenCalledTimes(3);
  });

  test("行動回数が 0 以下なら空", () => {
    const random = vi.fn(() => 0);
    expect(selectEnemyActions(actions, 0, random)).toEqual([]);
    expect(selectEnemyActions(actions, -1, random)).toEqual([]);
    expect(random).not.toHaveBeenCalled();
  });

  test("絞り込みは 1 回だけ行う", () => {
    // rating 2 以下は候補に入らない
    const values = [0, 3];
    let index = 0;
    const result = selectEnemyActions(actions, 2, () => values[index++]);
    expect(result.map((a) => a?.skillId)).toEqual([101, 102]);
  });

  test("距離を広げれば候補が増える", () => {
    // ratingDistance=5 なら ratingZero=0、rating 1 の行動も候補になる
    const result = selectEnemyActions(actions, 1, () => 11, 5);
    expect(result[0]?.skillId).toBe(104);
  });
});
