import type { Data_State } from "@RpgTypes/rmmz";
import { BATTLE_OPERATION_REMOVE_STATUS_BY_DAMAGE } from "./constants";
import type { BattleOperation_RemoveState, NewState } from "./types";

export const cloneStateInstance = (state: NewState): NewState => {
  return {
    stateId: state.stateId,
    startTurn: state.startTurn,
    turnLimit: state.turnLimit,
    sourceBattlerId: state.sourceBattlerId,
    instanceId: state.instanceId,
  };
};

export const xxxx = (
  states: readonly NewState[],
  stateFn: (id: number) => Data_State | undefined,
  chanceFn: (data: Data_State, instance: NewState) => boolean,
): BattleOperation_RemoveState[] => {
  return states
    .filter((state) => {
      return isDamageRemovable(state, stateFn, chanceFn);
    })
    .map(createRemoveStateOperation);
};

export const createRemoveStateOperation = (
  states: NewState,
): BattleOperation_RemoveState => {
  return {
    code: BATTLE_OPERATION_REMOVE_STATUS_BY_DAMAGE,
    instanceId: states.instanceId,
    targetBattlerId: states.sourceBattlerId,
    stateId: states.stateId,
  };
};

export const isDamageRemovable = (
  states: NewState,
  stateFn: (id: number) => Data_State | undefined,
  chanceFn: (data: Data_State, instance: NewState) => boolean,
): boolean => {
  const stateData = stateFn(states.stateId);
  if (!stateData) {
    return false;
  }
  if (!stateData.removeByDamage) {
    return false;
  }
  return chanceFn(stateData, states);
};

export const createRemoveStateByTurnEndOperation = (
  states: NewState,
): BattleOperation_RemoveState => {
  return {
    code: BATTLE_OPERATION_REMOVE_STATUS_BY_DAMAGE,
    instanceId: states.instanceId,
    targetBattlerId: states.sourceBattlerId,
    stateId: states.stateId,
  };
};
