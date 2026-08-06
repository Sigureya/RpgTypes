import type { ParamID } from "@RpgTypes/rmmz/rpg";

export interface Rmmz_BattlerBuffs {
  clearBuffs(): void;
  eraseBuff(paramId: ParamID): void;
  buff(paramId: ParamID): number;
  isBuffAffected<T extends number = ParamID>(paramId: T): boolean;
  isDebuffAffected<T extends number = ParamID>(paramId: T): boolean;
  isBuffOrDebuffAffected(paramId: ParamID): boolean;
  isMaxBuffAffected(paramId: ParamID): boolean;
  isMaxDebuffAffected(paramId: ParamID): boolean;
  increaseBuff(paramId: ParamID): boolean;
  decreaseBuff(paramId: ParamID): boolean;
  overwriteBuffTurns(paramId: ParamID, turns: number): boolean;
  isBuffExpired(paramId: ParamID): boolean;
  updateBuffTurns(): void;
}
