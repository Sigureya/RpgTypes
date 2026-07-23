import type { Data_Skill, Data_State, Enemy_Action } from "@RpgTypes/rmmz";
import {
  ENEMY_ACTION_CONDITION_HP_RATE,
  ENEMY_ACTION_CONDITION_MP_RATE,
  ENEMY_ACTION_CONDITION_PARTY_LEVEL,
  ENEMY_ACTION_CONDITION_STATE,
  ENEMY_ACTION_CONDITION_SWITCH,
  ENEMY_ACTION_CONDITION_TURN,
  filterUsableSkillsEx,
} from "@RpgTypes/rmmz";
import type {
  Rmmz_Enemy,
  Rmmz_Party,
  Rmmz_Switches,
} from "@RpgTypes/rmmzRuntime";

export const filterUsableEnemyActions = (
  actions: ReadonlyArray<Enemy_Action>,
  battler: Rmmz_Enemy,
  party: Rmmz_Party,
  switches: Rmmz_Switches,
  skillFn: (action: Enemy_Action) => Data_Skill | null | undefined,
): Enemy_Action[] => {
  return filterUsableSkillsEx(
    actions,
    battler.allTraits(),
    { mp: battler.mp, tp: battler.tp }, // この2個しか使わないと明言する。オブジェクト1個の作成なのでコストも小さい
    (act): Data_Skill | null | undefined => {
      if (!enemyActionMeetsCondition(act, battler, party, switches)) {
        // 事前に枝刈り
        return null;
      }
      return skillFn(act);
    },
  );
};

export const filterEnemyActionByRating = (
  actions: ReadonlyArray<Enemy_Action>,
  ratingDistance: number = 3, // デフォルト値はRPGツクールMZの仕様に合わせる
): Enemy_Action[] => {
  const maxRating: number = findMaxRating(actions);
  const ratingZero: number = maxRating - ratingDistance;
  return actions.filter((action) => action.rating > ratingZero);
};

const findMaxRating = (actions: ReadonlyArray<Enemy_Action>): number => {
  return actions.reduce((max, action) => Math.max(max, action.rating), 0);
};

export const enemyActionMeetsCondition = (
  action: Enemy_Action,
  enemy: Rmmz_Enemy,
  party: Rmmz_Party,
  switches: Rmmz_Switches,
): boolean => {
  switch (action.conditionType) {
    case ENEMY_ACTION_CONDITION_TURN:
      return enemyActionMeetsConditionTurn(action, enemy.turnCount());
    case ENEMY_ACTION_CONDITION_HP_RATE:
      return enemyActionMeetsConditionPointRate(action, enemy.hpRate());
    case ENEMY_ACTION_CONDITION_MP_RATE:
      return enemyActionMeetsConditionPointRate(action, enemy.mpRate());
    case ENEMY_ACTION_CONDITION_PARTY_LEVEL:
      return enemyActionMeetsConditionHighestLevel(action, party);
    case ENEMY_ACTION_CONDITION_STATE:
      return enemyActionMeetsConditionState(action, enemy.states());
    case ENEMY_ACTION_CONDITION_SWITCH:
      return enemyActionMeetsConditionSwitch(action, switches);
  }
  return true;
};

const enemyActionMeetsConditionHighestLevel = (
  action: Enemy_Action,
  party: Rmmz_Party,
): boolean => {
  return party.highestLevel() >= action.conditionParam1;
};

const enemyActionMeetsConditionSwitch = (
  action: Enemy_Action,
  switches: Rmmz_Switches,
): boolean => {
  return switches.value(action.conditionParam1);
};

const enemyActionMeetsConditionTurn = (
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
// 1つの関数の引数は可能な限り異なる型にする方針による実装
const enemyActionMeetsConditionPointRate = (
  action: Enemy_Action,
  point: number,
): boolean => {
  return point >= action.conditionParam1 && point <= action.conditionParam2;
};

const enemyActionMeetsConditionState = (
  action: Enemy_Action,
  states: ReadonlyArray<Data_State>,
): boolean => {
  return states.some((state) => state.id === action.conditionParam1);
};
