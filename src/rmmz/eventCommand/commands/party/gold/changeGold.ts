import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_GOLD, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";

export interface Command_ChangeGold
  extends EventCommandLike<typeof CHANGE_GOLD> {
  parameters: ParamArray_ChangeGold;
}

export type ParamArray_ChangeGold = [
  operation: ValueOf<Operation_PlusMinus>,
  operandType: number,
  operand: number
];
