import type {
  Data_Armor,
  Data_Equipment,
  Data_Skill,
  Data_State,
  Data_UsableItem,
  Data_Weapon,
  ParamID,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "./core";

export declare class Game_BattlerBase implements Rmmz_BattlerBase {
  get mhp(): number;
  get mmp(): number;
  get atk(): number;
  get def(): number;
  get mat(): number;
  get mdf(): number;
  get agi(): number;
  get luk(): number;
  get hp(): number;
  get mp(): number;
  get tp(): number;

  addState(stateId: number): void;
  removeState(stateId: number): void;
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
