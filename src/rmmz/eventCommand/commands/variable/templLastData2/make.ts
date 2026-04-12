import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type {
  Command_ControlVariables_FromLastData,
  ParamArray_VariableFromLastData,
  ParamObject_VariableFromLastData,
} from "./types";

export const makeCommandVariableFromLastDataLastUsedSkillId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 0),
  };
};

export const makeCommandVariableFromLastDataLastUsedItemId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 1),
  };
};

export const makeCommandVariableFromLastDataLastActorId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 2),
  };
};

export const makeCommandVariableFromLastDataLastEnemyIndex = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 3),
  };
};

export const makeCommandVariableFromLastDataLastTargetActorId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 4),
  };
};

export const makeCommandVariableFromLastDataLastTargetEnemyIndex = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 5),
  };
};

const paramToArray = (
  params: ParamObject_VariableFromLastData,
  index: number,
): ParamArray_VariableFromLastData => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  3,
  8,
  index,
];
