import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_ITEMS, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";
import type { OPERAND_DIRECT, OPERAND_VARIABLE } from "./constants";

export interface Command_ChangeItems2
  extends EventCommandLike2<typeof CHANGE_ITEMS> {
  parameters: ParamArray_ChangeItems2;
}

export type ParamArray_ChangeItems2 = [
  operation: ValueOf<Operation_PlusMinus>,
  itemId: number,
  value: number,
  direct: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE,
  includesEquip: boolean
];

export interface ParamObject_ChangeItemsFullset {
  operation: ValueOf<Operation_PlusMinus>;
  itemId: number;
  value: number;
  operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
  includesEquip: boolean;
}

export interface ParamObject_ChangeItems {
  itemId: number;
  value: number;
}

export interface ParamObject_ChangeItemsV {
  itemId: number;
  variableId: number;
}
