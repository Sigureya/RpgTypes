import { ParamId } from "./types/interface/battler/base/param";

//-----------------------------------------------------------------------------
// Game_ActionResult
//
// The game object class for a result of a battle action. For convinience, all
// member variables in this class are public.

export declare class Game_ActionResult {
  used: boolean;
  missed: boolean;
  evaded: boolean;
  physical: boolean;
  drain: boolean;
  critical: boolean;
  success: boolean;
  hpAffected: boolean;
  hpDamage: number;
  mpDamage: number;
  tpDamage: number;
  addedStates: number[];
  removedStates: number[];
  addedBuffs: ParamId[];
  addedDebuffs: ParamId[];
  removedBuffs: ParamId[];
  constructor();
  initialize(): void;
  clear(): void;
  addedStateObjects(): number[];
  removedStateObjects(): number;
  isStatusAffected(): boolean;
  isHit(): boolean;
  isStateAdded(stateId: number): boolean;
  pushAddedState(stateId: number): void;
  isStateRemoved(stateId: number): boolean;
  pushRemovedState(stateId: number): void;
  isBuffAdded(paramId: ParamId): boolean;
  pushAddedBuff(paramId: ParamId): void;
  isDebuffAdded(paramId: ParamId): boolean;
  pushAddedDebuff(paramId: ParamId): void;
  isBuffRemoved(paramId: ParamId): boolean;
  pushRemovedBuff(paramId: ParamId): void;
}
