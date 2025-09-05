import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_ENEMY_STATE } from "@RpgTypes/rmmz/rpg";
import type { ADD_STATE, REMOVE_STATE } from "./constants";

export interface Command_ChangeEnemyState
  extends EventCommandLike<typeof CHANGE_ENEMY_STATE> {
  parameters: ParamArray_ChangeEnemyState;
}

export type ParamArray_ChangeEnemyState = [
  enemyIndex: number,
  operation: typeof ADD_STATE | typeof REMOVE_STATE,
  stateId: number
];

export interface ParamObject_ChangeEnemyState {
  enemyIndex: number;
  stateId: number;
}
