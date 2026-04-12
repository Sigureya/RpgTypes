import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type { ValueOf } from "src/libs/templates/valueOf";
import type {
  Command_ControlVariables_FromLastData,
  ParamArray_VariableFromLastData,
  ParamObject_VariableFromLastData,
} from "./types";
import type { VARIABLE_SRC_LAST } from "./dataSource";

export const makeCommandVariableFromLastUsedSkillId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 0),
  };
};

export const makeCommandVariableFromLastUsedItemId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 1),
  };
};

export const makeCommandVariableDataLastActorId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 2),
  };
};

export const makeCommandVariableFromLastEnemyIndex = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 3),
  };
};

export const makeCommandVariableFromLastTargetActorId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 4),
  };
};

export const makeCommandVariableFromLastTargetEnemyIndex = (
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
  index: ValueOf<typeof VARIABLE_SRC_LAST>,
): ParamArray_VariableFromLastData => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  3,
  8,
  index,
];
