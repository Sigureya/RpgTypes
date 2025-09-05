import { CHANGE_ITEMS } from "@RpgTypes/rmmz/rpg";
import {
  OPERAND_DIRECT,
  OPERAND_VARIABLE,
  OPERATION_GAIN,
  OPERATION_LOSE,
} from "./types/constants";
import type {
  Command_ChangeItems,
  ParamArray_ChangeItems,
  ParamObject_ChangeItemsFullset,
  ParamObject_ChangeItems,
  ParamObject_ChangeItemsV,
} from "./types/item";

export const fromArrayChangeItems = (
  arr: ParamArray_ChangeItems
): ParamObject_ChangeItemsFullset => ({
  operation: arr[0],
  itemId: arr[1],
  value: arr[2],
  operand: arr[3],
});

export const makeCommandChangeItems = (
  param: ParamObject_ChangeItemsFullset,
  indent: number = 0
): Command_ChangeItems => ({
  code: CHANGE_ITEMS,
  indent,
  parameters: [param.operation, param.itemId, param.value, param.operand],
});

export const makeCommandGainItem = (
  param: ParamObject_ChangeItems,
  indent: number = 0
): Command_ChangeItems => ({
  code: CHANGE_ITEMS,
  indent,
  parameters: [OPERATION_GAIN, param.itemId, param.value, OPERAND_DIRECT],
});

export const makeCommandGainItemV = (
  param: ParamObject_ChangeItemsV,
  indent: number = 0
): Command_ChangeItems => ({
  code: CHANGE_ITEMS,
  indent,
  parameters: [
    OPERATION_GAIN,
    param.itemId,
    param.variableId,
    OPERAND_VARIABLE,
  ],
});

export const makeCommandLoseItem = (
  param: ParamObject_ChangeItems,
  indent: number = 0
): Command_ChangeItems => ({
  code: CHANGE_ITEMS,
  indent,
  parameters: [OPERATION_LOSE, param.itemId, param.value, OPERAND_DIRECT],
});

export const makeCommandLoseItemV = (
  param: ParamObject_ChangeItemsV,
  indent: number = 0
): Command_ChangeItems => ({
  code: CHANGE_ITEMS,
  indent,
  parameters: [
    OPERATION_LOSE,
    param.itemId,
    param.variableId,
    OPERAND_VARIABLE,
  ],
});
