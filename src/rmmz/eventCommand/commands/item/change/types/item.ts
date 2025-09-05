import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { CHANGE_ITEMS, Operation_PlusMinus } from "@RpgTypes/rmmz/rpg";
import type { OPERAND_DIRECT, OPERAND_VARIABLE } from "./constants";

export interface Command_ChangeItems
  extends EventCommandLike<typeof CHANGE_ITEMS> {
  parameters: ParamArray_ChangeItems;
}

export interface Command_ChangeItemsDirect
  extends EventCommandLike<typeof CHANGE_ITEMS> {
  parameters: ParamArray_ChangeItemsDirect;
}

export interface Command_ChangeItemsByVariable
  extends EventCommandLike<typeof CHANGE_ITEMS> {
  parameters: ParamArray_ChangeItemsVariable;
}

export type ParamArray_ChangeItems =
  | ParamArray_ChangeItemsDirect
  | ParamArray_ChangeItemsVariable;

export type ParamArray_ChangeItemsDirect = [
  operation: ValueOf<Operation_PlusMinus>,
  dataId: number,
  value: number,
  direct: typeof OPERAND_DIRECT
];

export type ParamArray_ChangeItemsVariable = [
  operation: ValueOf<Operation_PlusMinus>,
  dataId: number,
  value: number,
  byVariable: typeof OPERAND_VARIABLE
];

export interface ParamObject_ChangeItemsFullset {
  operation: ValueOf<Operation_PlusMinus>;
  itemId: number;
  value: number;
  operand: typeof OPERAND_DIRECT | typeof OPERAND_VARIABLE;
}

export interface ParamObject_ChangeItems {
  itemId: number;
  value: number;
}

export interface ParamObject_ChangeItemsV {
  itemId: number;
  variableId: number;
}
