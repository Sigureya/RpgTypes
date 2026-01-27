import { CONTROL_VARIABLES } from "@RpgTypes/rmmz/rpg";
import { OPERAND_VARIABLE } from "./constants";
import type { MakeOtherParam } from "./otherTypes";
import type {
  Command_ControlVariables,
  Operand_Variable,
  ParamObject_Operand_Variable,
  ParamObject_WritingTarget,
} from "./types";

export const isCommandOperandVariables = (
  command: Command_ControlVariables,
): command is Command_ControlVariables<Operand_Variable> => {
  return command.parameters[2] === OPERAND_VARIABLE;
};

export const toArrayOperandVariable = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Variable,
  operation: number = 0,
): Operand_Variable => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_VARIABLE,
  value.variableId,
];

export const makeCommandVariableFromVariable = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Variable,
  other: MakeOtherParam = {},
): Command_ControlVariables<Operand_Variable> => {
  return {
    code: CONTROL_VARIABLES,
    indent: other.indent ?? 0,
    parameters: toArrayOperandVariable(target, value, other.operation ?? 0),
  };
};
