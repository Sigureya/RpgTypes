import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type { ValueOf } from "src/libs/templates/valueOf";
import type {
  Command_ControlVariables_FromSystem,
  ParamArray_VariableFromSystem,
  ParamObject_VariableFromSystem,
} from "./types";
import type { OTHER } from "../types/operand";

export const makeCommandVariableFromSystemMapId = (
  params: ParamObject_VariableFromSystem,
  indent: number = 0,
): Command_ControlVariables_FromSystem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 0),
  };
};

export const makeCommandVariableFromSystemPartyMemberCount = (
  params: ParamObject_VariableFromSystem,
  indent: number = 0,
): Command_ControlVariables_FromSystem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 1),
  };
};

export const makeCommandVariableFromSystemGold = (
  params: ParamObject_VariableFromSystem,
  indent: number = 0,
): Command_ControlVariables_FromSystem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 2),
  };
};

export const makeCommandVariableFromSystemSteps = (
  params: ParamObject_VariableFromSystem,
  indent: number = 0,
): Command_ControlVariables_FromSystem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 3),
  };
};

export const makeCommandVariableFromSystemPlayTime = (
  params: ParamObject_VariableFromSystem,
  indent: number = 0,
): Command_ControlVariables_FromSystem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 4),
  };
};

export const makeCommandVariableFromSystemTimer = (
  params: ParamObject_VariableFromSystem,
  indent: number = 0,
): Command_ControlVariables_FromSystem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 5),
  };
};

export const makeCommandVariableFromSystemSaveCount = (
  params: ParamObject_VariableFromSystem,
  indent: number = 0,
): Command_ControlVariables_FromSystem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 6),
  };
};

export const makeCommandVariableFromSystemBattleCount = (
  params: ParamObject_VariableFromSystem,
  indent: number = 0,
): Command_ControlVariables_FromSystem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 7),
  };
};

export const makeCommandVariableFromSystemWinCount = (
  params: ParamObject_VariableFromSystem,
  indent: number = 0,
): Command_ControlVariables_FromSystem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 8),
  };
};

export const makeCommandVariableFromSystemEscapeCount = (
  params: ParamObject_VariableFromSystem,
  indent: number = 0,
): Command_ControlVariables_FromSystem => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 9),
  };
};

const paramToArray = (
  params: ParamObject_VariableFromSystem,
  param: ValueOf<OTHER>,
): ParamArray_VariableFromSystem => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  3,
  7,
  param,
];
