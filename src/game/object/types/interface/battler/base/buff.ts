import { ParamId } from "src/game/data/paramArray";

export interface Buff {
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
