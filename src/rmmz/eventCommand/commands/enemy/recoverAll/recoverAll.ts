import type { Command_EnemyRecoverAllEach } from "./types";
import type {
  Command_EnemyRecoverAll,
  ParamArray_EnemyRecoverAll,
} from "./types";

export const makeCommandEnemyRecoverAllEach = (
  indent: number = 0
): Command_EnemyRecoverAllEach => {
  return {
    code: 334,
    indent,
    parameters: [0],
  };
};

export const makeCommandEnemyRecoverAll = (
  param: { enemyIndex: number },
  indent: number = 0
): Command_EnemyRecoverAll => {
  return {
    code: 334,
    indent,
    parameters: [param.enemyIndex] satisfies ParamArray_EnemyRecoverAll,
  };
};
