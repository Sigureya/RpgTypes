import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_ENEMY_STATE } from "@RpgTypes/rmmz/rpg";
import type { ADD_STATE, REMOVE_STATE } from "./constants";

export interface Command_ChangeEnemyState
  extends EventCommandLike2<typeof CHANGE_ENEMY_STATE> {}

export type ParamArray_ChangeEnemyState = [
  enemyIndex: number,
  operation: typeof ADD_STATE | typeof REMOVE_STATE,
  stateId: number
];

export interface ParamObject_ChangeEnemyState {
  enemyIndex: number;
  stateId: number;
}
