//-----------------------------------------------------------------------------
// Game_ActionResult
//
// The game object class for a result of a battle action. For convinience, all
// member variables in this class are public.

import type { ParamID } from "../../schema";

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
  addedBuffs: ParamID[];
  addedDebuffs: ParamID[];
  removedBuffs: ParamID[];
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
  isBuffAdded(paramId: ParamID): boolean;
  pushAddedBuff(paramId: ParamID): void;
  isDebuffAdded(paramId: ParamID): boolean;
  pushAddedDebuff(paramId: ParamID): void;
  isBuffRemoved(paramId: ParamID): boolean;
  pushRemovedBuff(paramId: ParamID): void;
}
