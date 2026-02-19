import type {
  EventCommandLike,
  CHANGE_GOLD,
} from "@RpgTypes/libs/eventCommand";
import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
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
  value: number;
}

export interface ParamObject_ChangeGoldV {
  variableId: number;
}
