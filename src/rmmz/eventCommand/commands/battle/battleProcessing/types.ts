import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type {
  BATTLE_DIRECT,
  BATTLE_ENCOUNT,
  BATTLE_VARIABLE,
} from "./constants";

export interface Command_BattleProcessing extends EventCommandLike<301> {
  parameters: ParamArray_BattleProcessing;
}

export type ParamArray_BattleProcessing =
  | ParamArray_BattleProcessing_Direct
  | ParamArray_BattleProcessing_Variable
  | ParamArray_BattleProcessing_Encount;

export type ParamArray_BattleProcessing_Direct = [
  designation: typeof BATTLE_DIRECT,
  troopId: number,
  canEscape: boolean,
  canLose: boolean
];

export type ParamArray_BattleProcessing_Variable = [
  designation: typeof BATTLE_VARIABLE,
  troopId: number,
  canEscape: boolean,
  canLose: boolean
];

export type ParamArray_BattleProcessing_Encount = [
  designation: typeof BATTLE_ENCOUNT,
  troopId: number,
  canEscape: boolean,
  canLose: boolean
];
