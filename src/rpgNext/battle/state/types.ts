import type { BATTLE_OPERATION_REMOVE_STATUS_BY_DAMAGE } from "./constants";

export interface NewState {
  stateId: number;
  startTurn: number;
  turnLimit: number;
  sourceBattlerId: number;
  instanceId: number;
}

export interface BattleOperation_RemoveState {
  code: typeof BATTLE_OPERATION_REMOVE_STATUS_BY_DAMAGE;
  instanceId: number;
  targetBattlerId: number;
  stateId: number;
}
