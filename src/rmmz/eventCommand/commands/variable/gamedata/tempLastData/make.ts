import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { VARIABLE_SRC_LAST } from "./dataSource";
import type {
  ParamObject_VariableFromLastData,
  Command_ControlVariables_FromLastData,
  ParamArray_VariableFromLastData,
} from "./types";
import {
  LAST_DATA_TARGET_ENEMY_INDEX,
  LAST_DATA_LAST_ACTOR_ID,
  LAST_DATA_LAST_ENEMY_INDEX,
  LAST_DATA_LAST_TARGET_ACTOR_ID,
  LAST_DATA_LAST_USED_ITEM_ID,
  LAST_DATA_LAST_USED_SKILL_ID,
} from "./constants";

export const makeCommandVariableFromLastUsedSkillId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, LAST_DATA_LAST_USED_SKILL_ID),
  };
};

export const makeCommandVariableFromLastUsedItemId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, LAST_DATA_LAST_USED_ITEM_ID),
  };
};

export const makeCommandVariableDataLastActorId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, LAST_DATA_LAST_ACTOR_ID),
  };
};

export const makeCommandVariableFromLastEnemyIndex = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, LAST_DATA_LAST_ENEMY_INDEX),
  };
};

export const makeCommandVariableFromLastTargetActorId = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, LAST_DATA_LAST_TARGET_ACTOR_ID),
  };
};

export const makeCommandVariableFromLastTargetEnemyIndex = (
  params: ParamObject_VariableFromLastData,
  indent: number = 0,
): Command_ControlVariables_FromLastData => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, LAST_DATA_TARGET_ENEMY_INDEX),
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
