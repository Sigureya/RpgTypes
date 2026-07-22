import {
  ENEMY_ACTION_CONDITION_HP_RATE,
  ENEMY_ACTION_CONDITION_MP_RATE,
  ENEMY_ACTION_CONDITION_PARTY_LEVEL,
  ENEMY_ACTION_CONDITION_STATE,
  ENEMY_ACTION_CONDITION_SWITCH,
  ENEMY_ACTION_CONDITION_TURN,
  enemyActionMeetsConditionPointRate,
  enemyActionMeetsConditionTurn,
  enemyActionMeetsCondtionState,
  type Enemy_Action,
} from "@RpgTypes/rmmz";
import type { Rmmz_Enemy, Rmmz_Party } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_Switches } from "@RpgTypes/rmmzRuntime/objects/core/variables";

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
      return enemyActionMeetsCondtionState(action, enemy.states());
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
