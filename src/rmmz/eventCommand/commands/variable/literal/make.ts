import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type {
  Command_ControlVariables_FromConstant,
  ParamArray_VariableFromConstant,
  ParamObject_VariableFromConstant,
} from "./types";

export const variableFromLiteral = (
  params: ParamArray_VariableFromConstant,
): number => {
  return params[4];
};

export const makeCommandVariableFromConstant = (
  params: ParamObject_VariableFromConstant,
  indent: number = 0,
): Command_ControlVariables_FromConstant => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params),
  };
};

const paramToArray = (
  params: ParamObject_VariableFromConstant,
): ParamArray_VariableFromConstant => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  0,
  params.value,
];
