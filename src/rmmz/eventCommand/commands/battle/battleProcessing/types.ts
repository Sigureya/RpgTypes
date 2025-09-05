import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { Designation } from "@RpgTypes/rmmz/rpg";

export interface Command_BattleProcessing extends EventCommandLike<301> {
  parameters: ParamArray_BattleProcessing;
}

export type ParamArray_BattleProcessing = [
  designation: ValueOf<Designation> | 2,
  troopId: number,
  canEscape: boolean,
  canLose: boolean
];
