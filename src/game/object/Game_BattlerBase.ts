import type {
  Data_State,
  Data_Equipment,
  Data_Weapon,
  Data_Armor,
  Data_Skill,
  ParamID,
  Data_UsableItem,
} from "../../schema";
import type { IBattlerBase } from "./types/interface/battler/base";

export declare class Game_BattlerBase implements IBattlerBase {
  canEquip(item: Data_Equipment): boolean;
  canEquipWeapon(weapon: Data_Weapon): boolean;
  canEquipArmor(armor: Data_Armor): boolean;
  paramMin(paramId: ParamID): number;
  paramMax(paramId: ParamID): number;
  attackSkillId(): number;
  guardSkillId(): number;
  canInput(): boolean;
  canMove(): boolean;
  canUse(item: Data_UsableItem): boolean;
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
  eraseBuff(paramId: ParamID): void;
  buff(paramId: ParamID): number;
  isBuffAffected(paramId: ParamID): boolean;
  isDebuffAffected(paramId: ParamID): boolean;
  isBuffOrDebuffAffected(paramId: ParamID): boolean;
  isMaxBuffAffected(paramId: ParamID): boolean;
  isMaxDebuffAffected(paramId: ParamID): boolean;
  increaseBuff(paramId: ParamID): boolean;
  decreaseBuff(paramId: ParamID): boolean;
  overwriteBuffTurns(paramId: ParamID, turns: number): boolean;
  isBuffExpired(paramId: ParamID): boolean;
  updateBuffTurns(): void;
}
