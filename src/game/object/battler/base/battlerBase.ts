import { DataState } from "src/game/data";
import { Buff } from "./buff";
import { ParamArray, ParamId } from "./param";
import { State } from "./state";
import { ItemUser } from "./itemUser";
import { DataSkill } from "src/game/data/item/skill";

export declare class Game_BattlerBase implements Buff, State, ItemUser {
  canInput(): boolean;
  canMove(): boolean;
  isConfused(): boolean;
  confusionLevel(): boolean;
  isSkillWtypeOk(skill: DataSkill): boolean;
  sortStates(): number;
  restriction(): number;
  addNewState(stateId: number): void;
  stateMotionIndex(): number;
  stateOverlayIndex(): number;
  isDead(): boolean;
  isAlive(): boolean;
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
