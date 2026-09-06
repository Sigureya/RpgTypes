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
  return (
    Game_Enemy as unknown as {
      prototype: {
        selectAction(
          actionList: Enemy_Action[],
          ratingZero: number,
        ): Enemy_Action | null;
      };
    }
  ).prototype.selectAction.call(null, actionList, ratingZero);
};

let randomValue = 0;
let originalRandomInt: unknown;

beforeAll(() => {
  // rmmz_core.js の拡張。乱数は差し替えて決め打ちにする
  const math = Math as unknown as Record<string, unknown>;
  originalRandomInt = math.randomInt;
  math.randomInt = () => randomValue;
});

afterAll(() => {
  (Math as unknown as Record<string, unknown>).randomInt = originalRandomInt;
});

const action = (skillId: number, rating: number): Enemy_Action => ({
  skillId,
  rating,
  conditionType: 0,
  conditionParam1: 0,
  conditionParam2: 0,
});

interface TestCase {
  name: string;
  actions: Enemy_Action[];
  expected: {
    /** 最大 rating - 3 */
    ratingZero: number;
    /** 絞り込みで残る skillId */
    ratedSkillIds: number[];
    /** 重みの合計 */
    weightSum: number;
    /** 乱数 0..weightSum-1 のときに選ばれる skillId */
    picked: number[];
  };
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { actions, expected } = testCase;
    const ratingZero = expected.ratingZero;
    const rated = filterEnemyActionsByRating(actions, ratingZero);

    describe("function", () => {
      test("enemyActionRatingZero", () => {
        expect(enemyActionRatingZero(actions)).toBe(expected.ratingZero);
      });

      test("filterEnemyActionsByRating", () => {
        const result = filterEnemyActionsByRating(actions, ratingZero);
        expect(result.map((a) => a.skillId)).toEqual(expected.ratedSkillIds);
      });

      test("selectEnemyActionByWeight", () => {
        const result = expected.picked.map((_, value) => {
          return selectEnemyActionByWeight(rated, ratingZero, () => value)
            ?.skillId;
        });
        expect(result).toEqual(expected.picked);
      });

      test("重みの合計を上限として乱数を引く", () => {
        const maxValues: number[] = [];
        selectEnemyActionByWeight(rated, ratingZero, (max) => {
          maxValues.push(max);
          return 0;
        });
        expect(maxValues).toEqual([expected.weightSum]);
      });
    });

    describe("Enemy", () => {
      test("ratingZero", () => {
        const ratingMax = Math.max(...actions.map((a) => a.rating));
        expect(ratingMax - 3).toBe(expected.ratingZero);
      });

      test("絞り込み", () => {
        const result = actions.filter((a) => a.rating > ratingZero);
        expect(result.map((a) => a.skillId)).toEqual(expected.ratedSkillIds);
      });

      test("selectAction", () => {
        const result = expected.picked.map((_, value) => {
          randomValue = value;
          return coreSelectAction(rated, ratingZero)?.skillId;
        });
        expect(result).toEqual(expected.picked);
      });

      test("重みの合計", () => {
        const sum = rated.reduce((r, a) => r + a.rating - ratingZero, 0);
        expect(sum).toBe(expected.weightSum);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "1 つだけ",
    actions: [action(1, 5)],
    expected: {
      ratingZero: 2,
      ratedSkillIds: [1],
      // 5 - 2
      weightSum: 3,
      picked: [1, 1, 1],
    },
  },
  {
    name: "同じ rating",
    actions: [action(1, 5), action(2, 5)],
    expected: {
      ratingZero: 2,
      ratedSkillIds: [1, 2],
      // 3 + 3
      weightSum: 6,
      picked: [1, 1, 1, 2, 2, 2],
    },
  },
  {
    name: "ばらけた rating",
    actions: [action(1, 5), action(2, 4), action(3, 2), action(4, 1)],
    expected: {
      ratingZero: 2,
      // rating 2 以下は候補から外れる
      ratedSkillIds: [1, 2],
      // 3 + 2
      weightSum: 5,
      picked: [1, 1, 1, 2, 2],
    },
  },
  {
    name: "最大が後ろ",
    actions: [action(1, 1), action(2, 3), action(3, 9)],
    expected: {
      ratingZero: 6,
      ratedSkillIds: [3],
      // 9 - 6
      weightSum: 3,
      picked: [3, 3, 3],
    },
  },
  {
    name: "rating 1 のみ",
    actions: [action(1, 1), action(2, 1), action(3, 1)],
    expected: {
      // 1 - 3
      ratingZero: -2,
      ratedSkillIds: [1, 2, 3],
      // 3 + 3 + 3
      weightSum: 9,
      picked: [1, 1, 1, 2, 2, 2, 3, 3, 3],
    },
  },
];

testCases.forEach(runTestCase);
