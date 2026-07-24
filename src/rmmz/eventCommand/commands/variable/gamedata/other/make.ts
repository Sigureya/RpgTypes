import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type {
  Command_ControlVariables_FromOthre,
  ParamArray_VariableFromOther,
  ParamObject_VariableFromOther,
} from "./types";

export const makeCommandVariableFromSystemMapId = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 0),
  };
};

export const makeCommandVariableFromSystemPartyMemberCount = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 1),
  };
};

export const makeCommandVariableFromSystemPlayTime = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 4),
  };
};

export const makeCommandVariableFromSystemTimer = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 5),
  };
};

export const makeCommandVariableFromSystemSaveCount = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 6),
  };
};

export const makeCommandVariableFromSystemBattleCount = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 7),
  };
};

export const makeCommandVariableFromSystemWinCount = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 8),
  };
};

export const makeCommandVariableFromSystemEscapeCount = (
  params: ParamObject_VariableFromOther,
  indent: number = 0,
): Command_ControlVariables_FromOthre => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 9),
  };
};

const paramToArray = (
  params: ParamObject_VariableFromOther,
  param: number,
): ParamArray_VariableFromOther => [
  params.variableId,
  params.variableId,
  params.operation ?? 0,
  3,
  7,
  param,
];
