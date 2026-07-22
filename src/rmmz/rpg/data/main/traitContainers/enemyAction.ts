import type { Enemy_Action } from "./enemy";
import type { Data_State } from "./state";

export const enemyActionMeetsConditionTurn = (
  { conditionParam1: param1, conditionParam2: param2 }: Enemy_Action,
  turnCount: number,
): boolean => {
  if (param2 === 0) {
    return turnCount === param1;
  } else {
    return (
      turnCount > 0 &&
      turnCount >= param1 &&
      turnCount % param2 === param1 % param2
    );
  }
};

export const enemyActionMeetsConditionPointRate = (
  action: Enemy_Action,
  point: number,
): boolean => {
  return point >= action.conditionParam1 && point <= action.conditionParam2;
};

export const enemyActionMeetsCondtionState = (
  action: Enemy_Action,
  states: ReadonlyArray<Data_State>,
): boolean => {
  return states.some((state) => state.id === action.conditionParam1);
};
