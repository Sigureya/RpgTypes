import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type {
  Command_ControlVariables_FromVariable,
  ParamArray_VariableFromVariable,
  ParamObject_VariableFromVariable,
} from "./types";

export const isCommandOperandVariables = (
  command: Command_ControlVariables_FromVariable,
): command is Command_ControlVariables_FromVariable => {
  return command.parameters[3] === 1;
};

export const makeCommandVariableFromVariable = (
  params: ParamObject_VariableFromVariable,
  indent: number = 0,
): Command_ControlVariables_FromVariable => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params),
  };
};

const paramToArray = (
  params: ParamObject_VariableFromVariable,
): ParamArray_VariableFromVariable => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  1,
  params.variableId,
];
