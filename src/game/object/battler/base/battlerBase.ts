import { DataState } from "src/game/data";
import { Buff } from "./buff";
import { ParamArray, ParamId } from "./param";
import { State } from "./state";

interface Members {
  _buffs: ParamArray;
  _buffTurns: ParamArray;
  _hp: number;
  _mp: number;
  _tp: number;
  _hidden: number;
  _paramPlus: ParamArray;
}

export declare class Game_BattlerBase implements Members, Buff, State {
  sortStates(): number;
  restriction(): number;
  addNewState(stateId: number): void;
  stateMotionIndex(): number;
  stateOverlayIndex(): number;
  isDead(): boolean;
  isAlive(): boolean;
  _buffs: ParamArray;
  _buffTurns: ParamArray;
  _hp: number;
  _mp: number;
  _tp: number;
  _hidden: number;
  _paramPlus: ParamArray;
  clearStates(): void;
  eraseState(stateId: number): void;
  isStateAffected(stateId: number): boolean;
  isDeathStateAffected(): boolean;
  deathStateId(): number;
  resetStateCounts(stateId: number): void;
  isStateExpired(stateId: number): boolean;
  updateStateTurns(): void;
  states(): DataState[];
  clearBuffs(): void;
  eraseBuff(paramId: ParamId): void;
  buff(paramId: ParamId): number;
  isBuffAffected(paramId: ParamId): boolean;
  isDebuffAffected(paramId: ParamId): boolean;
  isBuffOrDebuffAffected(paramId: ParamId): boolean;
  isMaxBuffAffected(paramId: ParamId): boolean;
  isMaxDebuffAffected(paramId: ParamId): boolean;
  increaseBuff(paramId: ParamId): boolean;
  decreaseBuff(paramId: ParamId): boolean;
  overwriteBuffTurns(paramId: ParamId, turns: number): boolean;
  isBuffExpired(paramId: ParamId): boolean;
  updateBuffTurns(): void;
}
