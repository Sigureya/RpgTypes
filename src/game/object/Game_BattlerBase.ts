import { Data_State } from "../data";
import {
  Data_Equipment,
  Data_Weapon,
  Data_Armor,
} from "../data/item/equipment";
import { Data_Skill } from "../data/item/skill";
import { IBattlerBase } from "./types/interface/battler/base";
import { ParamId } from "./types/interface/battler/base/param";

export declare class Game_BattlerBase implements IBattlerBase {
  canEquip(item: Data_Equipment): boolean;
  canEquipWeapon(weapon: Data_Weapon): boolean;
  canEquipArmor(armor: Data_Armor): boolean;
  paramMin(paramId: ParamId): number;
  paramMax(paramId: ParamId): number;
  attackSkillId(): number;
  guardSkillId(): number;
  canInput(): boolean;
  canMove(): boolean;
  isConfused(): boolean;
  confusionLevel(): boolean;
  isSkillWtypeOk(skill: Data_Skill): boolean;
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
  states(): Data_State[];
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
