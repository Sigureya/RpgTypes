import { afterAll, beforeAll, describe, expect, test } from "vitest";
import type { Enemy_Action } from "@RpgTypes/rmmz";
import {
  enemyActionRatingZero,
  filterEnemyActionsByRating,
  selectEnemyActionByWeight,
} from "@RpgTypes/rmmzFunctional";
import { Game_Enemy } from "./rmmz_objects";

/** Game_Enemy.selectAction は this を使わないので、実体を作らずに呼べる */
const coreSelectAction = (
  actionList: Enemy_Action[],
  ratingZero: number,
): Enemy_Action | null => {
  return (Game_Enemy as any).prototype.selectAction.call(
    null,
    actionList,
    ratingZero,
  );
};

/** Game_Enemy.selectAllActions の前半 (絞り込み) をそのまま写したもの */
const coreRatingZero = (actionList: Enemy_Action[]): number => {
  return Math.max(...actionList.map((a) => a.rating)) - 3;
};

const coreFilter = (
  actionList: Enemy_Action[],
  ratingZero: number,
): Enemy_Action[] => {
  return actionList.filter((a) => a.rating > ratingZero);
};

let randomValue = 0;
let originalRandomInt: unknown;

beforeAll(() => {
  // rmmz_core.js の拡張。乱数は差し替えて決め打ちにする
  originalRandomInt = (Math as any).randomInt;
  (Math as any).randomInt = () => randomValue;
});

afterAll(() => {
  (Math as any).randomInt = originalRandomInt;
});

const action = (skillId: number, rating: number): Enemy_Action => ({
  skillId,
  rating,
  conditionType: 0,
  conditionParam1: 0,
  conditionParam2: 0,
});

const cases: { name: string; actions: Enemy_Action[] }[] = [
  { name: "1 つだけ", actions: [action(1, 5)] },
  { name: "同じ rating", actions: [action(1, 5), action(2, 5)] },
  {
    name: "ばらけた rating",
    actions: [action(1, 5), action(2, 4), action(3, 2), action(4, 1)],
  },
  {
    name: "最大が後ろ",
    actions: [action(1, 1), action(2, 3), action(3, 9)],
  },
  {
    name: "rating 1 のみ",
    actions: [action(1, 1), action(2, 1), action(3, 1)],
  },
];

describe("行動の絞り込みがコアスクリプトと一致する", () => {
  cases.forEach(({ name, actions }) => {
    describe(name, () => {
      test("ratingZero", () => {
        const expected: number = coreRatingZero(actions);
        const result: number = enemyActionRatingZero(actions);
        expect(result).toBe(expected);
      });

      test("絞り込みの結果", () => {
        const ratingZero = coreRatingZero(actions);
        const expected: Enemy_Action[] = coreFilter(actions, ratingZero);
        const result: Enemy_Action[] = filterEnemyActionsByRating(
          actions,
          ratingZero,
        );
        expect(result).toEqual(expected);
      });
    });
  });
});

describe("重み付き抽選がコアスクリプトと一致する", () => {
  cases.forEach(({ name, actions }) => {
    const ratingZero = coreRatingZero(actions);
    const rated = coreFilter(actions, ratingZero);
    const sum = rated.reduce((r, a) => r + a.rating - ratingZero, 0);

    describe(name, () => {
      // 取りうる乱数を全部試す
      for (let value = 0; value < sum; value++) {
        test(`乱数 ${value} / ${sum}`, () => {
          randomValue = value;
          const expected = coreSelectAction(rated, ratingZero);
          const result = selectEnemyActionByWeight(
            rated,
            ratingZero,
            () => value,
          );
          expect(result).toBe(expected);
        });
      }
    });
  });
});
