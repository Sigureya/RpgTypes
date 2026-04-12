import { CONTROL_VARIABLES } from "@RpgTypes/libs";
import type {
  Command_ControlVariables_FromEnemy,
  ParamArray_VariableFromEnemyStatus,
  ParamObject_VariableFromEnemy,
} from "./types";

export const makeCommandVariableFromEnemyCurrentHp = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 0),
  };
};

export const makeCommandVariableFromEnemyCurrentMp = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 1),
  };
};

export const makeCommandVariableFromEnemyCurrentTp = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 10),
  };
};

export const makeCommandVariableFromEnemyMaxHp = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 2),
  };
};

export const makeCommandVariableFromEnemyMaxMp = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 3),
  };
};

export const makeCommandVariableFromEnemyAtk = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 4),
  };
};

export const makeCommandVariableFromEnemyDef = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 5),
  };
};

export const makeCommandVariableFromEnemyMat = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 6),
  };
};

export const makeCommandVariableFromEnemyMdf = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 7),
  };
};

export const makeCommandVariableFromEnemyAgi = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 8),
  };
};

export const makeCommandVariableFromEnemyLuk = (
  params: ParamObject_VariableFromEnemy,
  indent: number = 0,
): Command_ControlVariables_FromEnemy => {
  return {
    code: CONTROL_VARIABLES,
    indent,
    parameters: paramToArray(params, 9),
  };
};

const paramToArray = (
  params: ParamObject_VariableFromEnemy,
  enemyParamId: number,
): ParamArray_VariableFromEnemyStatus => [
  params.startId,
  params.endId ?? params.startId,
  params.operation ?? 0,
  3,
  4,
  params.enemyIndex,
  enemyParamId,
];
