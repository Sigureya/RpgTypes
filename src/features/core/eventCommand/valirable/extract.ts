import type {
  Command_ChangeItemsByVariable,
  Command_InputNumber,
  Command_SelectItem,
} from "@RpgTypes/rmmz";
import { CHANGE_WEAPONS, INPUT_NUMBER, SELECT_ITEM } from "@RpgTypes/rmmz";
import type { VariableParam } from "./types";

export const extractVariableInputNumber = (
  command: Command_InputNumber
): VariableParam => {
  return {
    code: INPUT_NUMBER,
    variableId: command.parameters[0],
    paramIndex: 0,
  };
};

export const extractVariableGainItem = (
  command: Command_ChangeItemsByVariable
): VariableParam => {
  return {
    code: CHANGE_WEAPONS,
    variableId: command.parameters[2],
    paramIndex: 2,
  };
};

export const extractVariableSelectItem = (
  command: Command_SelectItem
): VariableParam => {
  return {
    code: SELECT_ITEM,
    variableId: command.parameters[0],
    paramIndex: 0,
  };
};
