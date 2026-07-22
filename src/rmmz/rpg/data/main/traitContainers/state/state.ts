import {
  STATE_RESTRICTION_CONFUSION_RANDOM_FRIEND,
  STATE_RESTRICTION_CONFUSION_RANDOM_OPPONENT,
  STATE_RESTRICTION_NOT_MOVE,
} from "./constants";
import type { Data_State } from "./types";

export const stateIcons = (states: ReadonlyArray<Data_State>): number[] => {
  return states
    .filter((state) => state.iconIndex > 0)
    .map((state): number => state.iconIndex);
};

export const canMoveStates = (state: ReadonlyArray<Data_State>): boolean => {
  return state.every(isMoveableState);
};

export const isMoveableState = (state: Data_State): boolean => {
  return state.restriction < STATE_RESTRICTION_NOT_MOVE;
};

export const isConfusedState = (state: Data_State): boolean => {
  return (
    STATE_RESTRICTION_CONFUSION_RANDOM_OPPONENT >= state.restriction &&
    state.restriction <= STATE_RESTRICTION_CONFUSION_RANDOM_FRIEND
  );
};

export const hasConfusedState = (
  states: ReadonlyArray<Data_State>,
): boolean => {
  return states.some(isConfusedState);
};

export const confusionLevel = (states: ReadonlyArray<Data_State>): number => {
  return states.reduce(confusionLevelAcc, 0);
};

const confusionLevelAcc = (level: number, state: Data_State): number => {
  return isConfusedState(state) ? Math.max(level, state.restriction) : level;
};

export const makeStateData = (data: Partial<Data_State> = {}): Data_State => ({
  name: data.name ?? "",
  id: data.id ?? 0,
  iconIndex: data.iconIndex ?? 0,
  message1: data.message1 ?? "",
  message2: data.message2 ?? "",
  message3: data.message3 ?? "",
  message4: data.message4 ?? "",
  traits: [],
  note: data.note ?? "",

  messageType: data.messageType ?? 0,
  releaseByDamage: data.releaseByDamage ?? false,
  restriction: data.restriction ?? 0,
  priority: data.priority ?? 0,
  motion: data.motion ?? 0,
  overlay: data.overlay ?? 0,
  removeAtBattleEnd: data.removeAtBattleEnd ?? false,
  removeByRestriction: data.removeByRestriction ?? false,
  autoRemovalTiming: data.autoRemovalTiming ?? 0,
  minTurns: data.minTurns ?? 0,
  maxTurns: data.maxTurns ?? 0,
  removeByDamage: data.removeByDamage ?? false,
  chanceByDamage: data.chanceByDamage ?? 0,
  removeByWalking: data.removeByWalking ?? false,
  stepsToRemove: data.stepsToRemove ?? 0,
});
