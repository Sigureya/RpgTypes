import type {
  Command_EnemyTransform,
  ParamObject_EnemyTransform,
  ParamArray_EnemyTransfrom,
} from "./types";

export function makeCommandEnemyTransform(
  param: ParamObject_EnemyTransform,
  indent = 0
): Command_EnemyTransform {
  return {
    code: 336,
    parameters: [param.enemyId, param.newEnemyId],
    indent,
  };
}

export const fromArrayEnemyTransform = (
  arr: ParamArray_EnemyTransfrom
): ParamObject_EnemyTransform => {
  return {
    enemyId: arr[0],
    newEnemyId: arr[1],
  };
};
