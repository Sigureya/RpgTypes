import { CHANGE_ITEMS } from "@RpgTypes/libs/eventCommand";
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
  Command_ChangeItemsByVariable,
  Command_ChangeItemsDirect,
} from "./types/item";

export const isUsingVaribleCommandChangingItems = (
  command: Command_ChangeItems,
): command is Command_ChangeItemsByVariable => {
  return command.parameters[3] === OPERAND_VARIABLE;
};

export const fromArrayChangeItems = (
  arr: ParamArray_ChangeItems,
): ParamObject_ChangeItemsFullset => ({
  operation: arr[1],
  itemId: arr[0],
  value: arr[3],
  operand: arr[2],
});

export const makeCommandChangeItems = (
  param: ParamObject_ChangeItemsFullset,
  indent: number = 0,
): Command_ChangeItems => ({
  code: CHANGE_ITEMS,
  indent,
  parameters: [param.itemId, param.operation, param.operand, param.value],
});

export const makeCommandGainItem = (
  param: ParamObject_ChangeItems,
  indent: number = 0,
): Command_ChangeItemsDirect => ({
  code: CHANGE_ITEMS,
  indent,
  parameters: [param.itemId, OPERATION_GAIN, OPERAND_DIRECT, param.value],
});

export const makeCommandGainItemV = (
  param: ParamObject_ChangeItemsV,
  indent: number = 0,
): Command_ChangeItems => ({
  code: CHANGE_ITEMS,
  indent,
  parameters: [
    param.itemId,
    OPERATION_GAIN,
    OPERAND_VARIABLE,
    param.variableId,
  ],
});

export const makeCommandLoseItem = (
  param: ParamObject_ChangeItems,
  indent: number = 0,
): Command_ChangeItemsDirect => {
  return {
    code: CHANGE_ITEMS,
    indent,
    parameters: [param.itemId, OPERATION_LOSE, OPERAND_DIRECT, param.value],
  };
};
export const makeCommandLoseItemV = (
  param: ParamObject_ChangeItemsV,
  indent: number = 0,
): Command_ChangeItemsByVariable => {
  return {
    code: CHANGE_ITEMS,
    indent,
    parameters: [
      param.itemId,
      OPERATION_LOSE,
      OPERAND_VARIABLE,
      param.variableId,
    ],
  };
};
