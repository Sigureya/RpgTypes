import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type {
  Command_ControlVariables_FromOthre,
  ParamArray_VariableFromOther,
  ParamObject_VariableFromOther,
} from "./types";

export const makeCommandVariableFromMapId = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 0),
  };
};

export const makeCommandVariableFromPartySize = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 1),
  };
};

export const makeCommandVariableFromPartyGold = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 2),
  };
};

export const makeCommandVariableFromPartySteps = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 3),
  };
};

const paramToArray = (
  params: ParamObject_VariableFromOther,
  param: number,
): ParamArray_VariableFromOther => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  3,
  7,
  param,
];
