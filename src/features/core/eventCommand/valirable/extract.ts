import { INPUT_NUMBER, SELECT_ITEM } from "@RpgTypes/libs/eventCommand";
import type { Command_InputNumber, Command_SelectItem } from "@RpgTypes/rmmz";
import type { VariableParam } from "./types";

export const extractVariableInputNumber = (
  command: Command_InputNumber,
): VariableParam => {
  return {
    code: INPUT_NUMBER,
    variableId: command.parameters[0],
  };
};

export const extractVariableSelectItem = (
  command: Command_SelectItem,
): VariableParam => {
  return {
    code: SELECT_ITEM,
    variableId: command.parameters[0],
  };
};
