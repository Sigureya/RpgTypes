import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type {
  Command_ControlVariables_FromRandom,
  ParamArray_VariableFromRandom,
  ParamObject_VariableFromRandom,
} from "./types";

export const makeCommandVariableFromRandom = (
  params: ParamObject_VariableFromRandom,
  indent: number = 0,
): Command_ControlVariables_FromRandom => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params),
  };
};

const paramToArray = (
  params: ParamObject_VariableFromRandom,
): ParamArray_VariableFromRandom => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  2,
  params.min,
  params.max,
];
