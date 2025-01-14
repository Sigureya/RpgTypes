import type { ParamID } from "../../../../../../schema";
export interface Buff {
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
