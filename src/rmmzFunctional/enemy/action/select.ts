import type { Enemy_Action } from "@RpgTypes/rmmz";

export interface EnemyActionRandom {
  random(max: number): number;
}

export const enemyActionRatingMax = (
  actions: ReadonlyArray<Enemy_Action>,
): number => {
  return actions.reduce((max, action) => Math.max(max, action.rating), 0);
};

export const enemyActionRatingZero = (
  actions: ReadonlyArray<Enemy_Action>,
  ratingDistance: number = 3,
): number => {
  return enemyActionRatingMax(actions) - ratingDistance;
};

export const filterEnemyActionsByRating = (
  actions: ReadonlyArray<Enemy_Action>,
  ratingZero: number,
): Enemy_Action[] => {
  return actions.filter((action) => action.rating > ratingZero);
};

/** 1 つあたりの重み。絞り込み前を渡されても合計が減らないよう 0 で止める。 */
const enemyActionWeight = (
  action: Enemy_Action,
  ratingZero: number,
): number => {
  return Math.max(0, action.rating - ratingZero);
};

export const enemyActionWeightTotal = (
  actions: ReadonlyArray<Enemy_Action>,
  ratingZero: number,
): number => {
  return actions.reduce((acc, action) => {
    return acc + enemyActionWeight(action, ratingZero);
  }, 0);
};

export const selectEnemyActionByWeight = (
  actions: ReadonlyArray<Enemy_Action>,
  ratingZero: number,
  random: (max: number) => number,
): Enemy_Action | null => {
  const totalWeight = enemyActionWeightTotal(actions, ratingZero);
  if (totalWeight <= 0) {
    return null;
  }
  const state: SelectionState = actions.reduce(pickByRest(ratingZero), {
    rest: random(totalWeight),
    selected: null,
  });
  return state.selected;
};

const pickByRest =
  (ratingZero: number) =>
  (acc: SelectionState, action: Enemy_Action): SelectionState => {
    if (acc.selected === null) {
      acc.rest -= enemyActionWeight(action, ratingZero);
      if (acc.rest < 0) {
        acc.selected = action;
      }
    }
    return acc;
  };

/**
 * 走査中の状態。最初に 1 つだけ作り、書き足していく。
 * 要素ごとに作り直すと実測で 27ns → 16ns の差が付く (performance.md [FLAT])。
 */
interface SelectionState {
  rest: number;
  selected: Enemy_Action | null;
}

export const selectEnemyActions = (
  actions: ReadonlyArray<Enemy_Action>,
  actionCount: number,
  random: (max: number) => number,
  ratingDistance: number = 3,
): (Enemy_Action | null)[] => {
  const ratingZero = enemyActionRatingZero(actions, ratingDistance);
  const ratedActions = filterEnemyActionsByRating(actions, ratingZero);
  // Array.from({length}, fn) は array-like 経由の遅い道を通る。
  // 実測で 2 個作るのに 312ns、fill().map() で 60ns、埋めるだけなら 18ns。
  // performance.md [FROM]
  const count = Math.max(0, actionCount);
  return new Array<Enemy_Action | null>(count)
    .fill(null)
    .map(() => selectEnemyActionByWeight(ratedActions, ratingZero, random));
};
