import type { Data_State } from "../../../../../../schema";

export interface IState {
  clearStates(): void;
  eraseState(stateId: number): void;
  isStateAffected(stateId: number): boolean;
  isDeathStateAffected(): boolean;
  deathStateId(): number;
  resetStateCounts(stateId: number): void;
  isStateExpired(stateId: number): boolean;
  updateStateTurns(): void;

  sortStates(): number;
  restriction(): number;
  addNewState(stateId: number): void;

  stateMotionIndex(): number;
  stateOverlayIndex(): number;

  isDead(): boolean;
  isAlive(): boolean;

  states(): Data_State[];
}
