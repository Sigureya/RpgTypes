import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Designation } from "@RpgTypes/rmmz/rpg";

export interface Command_BattleProcessing extends EventCommandLike2<301> {
  parameters: ParamArray_BattleProcessing;
}

export type ParamArray_BattleProcessing = [
  designation: ValueOf<Designation> | 2,
  troopId: number,
  canEscape: boolean,
  canLose: boolean
];
