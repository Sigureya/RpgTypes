import { OPERAND_VARIABLE } from "./constants";
import type { Command_ControlVariables, Operand_Variable } from "./types";

export const isCommandOperandVariables = (
  command: Command_ControlVariables
): command is Command_ControlVariables<Operand_Variable> => {
  return command.parameters[2] === OPERAND_VARIABLE;
};
