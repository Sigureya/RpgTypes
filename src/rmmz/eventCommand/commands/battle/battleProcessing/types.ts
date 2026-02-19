import type {
  EventCommandLike,
  BATTLE_PROCESSING,
} from "@RpgTypes/libs/eventCommand";
import type {
  BATTLE_DIRECT,
  BATTLE_ENCOUNT,
  BATTLE_VARIABLE,
} from "./constants";

export interface Command_BattleProcessing extends EventCommandLike<
  typeof BATTLE_PROCESSING
> {
  parameters: ParamArray_BattleProcessing;
}

export type Command_BattleProcessing_Variable = EventCommandLike<
  typeof BATTLE_PROCESSING,
  ParamArray_BattleProcessing_Variable
>;

export interface ParamObject_BattleBase {
  canEscape: boolean;
  canLose: boolean;
}

export interface ParamObject_BattleProcessing_Direct extends Partial<ParamObject_BattleBase> {
  troopId: number;
}

export interface ParamObject_BattleProcessing_Variable extends Partial<ParamObject_BattleBase> {
  variableId: number;
}

export type ParamArray_BattleProcessing =
  | ParamArray_BattleProcessing_Direct
  | ParamArray_BattleProcessing_Variable
  | ParamArray_BattleProcessing_Encount;

export type ParamArray_BattleProcessing_Direct = [
  designation: typeof BATTLE_DIRECT,
  troopId: number,
  canEscape: boolean,
  canLose: boolean,
];

export type ParamArray_BattleProcessing_Variable = [
  designation: typeof BATTLE_VARIABLE,
  troopId: number,
  canEscape: boolean,
  canLose: boolean,
];

export type ParamArray_BattleProcessing_Encount = [
  designation: typeof BATTLE_ENCOUNT,
  troopId: number,
  canEscape: boolean,
  canLose: boolean,
];
