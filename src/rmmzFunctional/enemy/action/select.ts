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

export const enemyActionWeightTotal = (
  actions: ReadonlyArray<Enemy_Action>,
  ratingZero: number,
): number => {
  return actions.reduce((acc, action) => {
    return acc + Math.max(0, action.rating - ratingZero);
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

  const value = random(totalWeight);
  const result = actions.reduce<{
    rest: number;
    selected: Enemy_Action | null;
  }>(
    (state, action) => {
      if (state.selected) {
        return state;
      }
      const weight = Math.max(0, action.rating - ratingZero);
      const rest = state.rest - weight;
      if (rest < 0) {
        return {
          rest,
          selected: action,
        };
      }
      return {
        rest,
        selected: null,
      };
    },
    {
      rest: value,
      selected: null,
    },
  );

  return result.selected;
};

export const selectEnemyActions = (
  actions: ReadonlyArray<Enemy_Action>,
  actionCount: number,
  random: (max: number) => number,
  ratingDistance: number = 3,
): (Enemy_Action | null)[] => {
  const ratingZero = enemyActionRatingZero(actions, ratingDistance);
  const ratedActions = filterEnemyActionsByRating(actions, ratingZero);
  return Array.from({ length: Math.max(0, actionCount) }, () => {
    return selectEnemyActionByWeight(ratedActions, ratingZero, random);
  });
};
