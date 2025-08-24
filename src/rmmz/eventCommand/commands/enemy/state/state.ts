import { ADD_STATE, REMOVE_STATE, ITERATE_EACH } from "./constants";
import type {
  Command_ChangeEnemyState,
  ParamObject_ChangeEnemyState,
} from "./types";

export const makeCommandAddEnemyState = (
  param: ParamObject_ChangeEnemyState,
  indent = 0
): Command_ChangeEnemyState => {
  return {
    code: 333,
    parameters: [param.enemyIndex, ADD_STATE, param.stateId],
    indent,
  };
};

export const makeCommandRemoveEnemyState = (
  param: ParamObject_ChangeEnemyState,
  indent = 0
): Command_ChangeEnemyState => {
  return {
    code: 333,
    parameters: [param.enemyIndex, REMOVE_STATE, param.stateId],
    indent,
  };
};

export const makeCommandAddEachEnemyState = (
  param: ParamObject_ChangeEnemyState,
  indent = 0
): Command_ChangeEnemyState => {
  return {
    code: 333,
    parameters: [ITERATE_EACH, ADD_STATE, param.stateId],
    indent,
  };
};

export const makeCommandRemoveEachEnemyState = (
  param: ParamObject_ChangeEnemyState,
  indent = 0
): Command_ChangeEnemyState => {
  return {
    code: 333,
    parameters: [ITERATE_EACH, REMOVE_STATE, param.stateId],
    indent,
  };
};
