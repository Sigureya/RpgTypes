import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_GOLD } from "@RpgTypes/rmmz/rpg";
import type { Operation_PlusMinus } from "@RpgTypes/rmmz/utils";

export interface Command_ChangeGold extends EventCommandLike<
  typeof CHANGE_GOLD
> {
  parameters: ParamArray_ChangeGold;
}

export type ParamArray_ChangeGold = [
  operation: ValueOf<Operation_PlusMinus>,
  operandType: number,
  operand: number,
];

export interface ParamObject_ChangeGold {
  operation: ValueOf<Operation_PlusMinus>;
  operandType: number;
  operand: number;
}
