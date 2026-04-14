import { OPERATION_MINUS } from "./constants";
import { OPERATION_PLUS } from "./constants";
import type {
  Command_ChangeEnemyTP,
  Command_ChangeEnemyMP,
  ParamObject_ChangeEnemyTp,
  ParamArray_ChangeEnemyTP,
} from "./types";
import type {
  ParamArray_ChangeEnemyMP,
  ParamObject_ChangeEnemyMp,
  ParamObject_ChangeEnemyMp2,
} from "./types/changeMp";

type Operation = typeof OPERATION_PLUS | typeof OPERATION_MINUS;
const OPERAND = {
  direct: 0,
  variable: 1,
} as const;

const ENEMY_EACH = -1 as const;
// export const makeCommandGainHP = (
//   params: ParamObject_ChangeEnemyHP,
//   indent: number = 0
// ): Command_ChangeEnemyHP => ({
//   code: 331,
//   indent,
//   parameters: changeHpSingleDirect(OPERATION_PLUS, params),
// });

// export const makeCommandLoseHP = (
//   params: ParamObject_ChangeEnemyHP,
//   indent: number = 0
// ): Command_ChangeEnemyHP => ({
//   code: 331,
//   indent,
//   parameters: changeHpSingleDirect(OPERATION_MINUS, params),
// });

// const changeHpSingleDirect = (
//   operation: Operation,
//   params: ParamObject_ChangeEnemyHP
// ): ParamArray_ChangeEnemyHP => {
//   return [
//     params.targetType === "variable" ? OPERAND.variable : OPERAND.direct,
//     params.targetType === "each" ? 0 : params.target,
//     operation,
//     OPERAND[params.operand.mode],
//     params.operand.value,
//     params.allowDeath,
//   ];
// };
export const makeCommandGainEnemyMP2 = (
  param: ParamObject_ChangeEnemyMp2,
  indent: number = 0,
): Command_ChangeEnemyMP => ({
  code: 332,
  indent,
  parameters: [
    param.targetVariableId,
    OPERATION_PLUS,
    OPERAND.variable,
    param.operandVariableId,
  ],
});

export const makeCommandGainEnemyMP = (
  param: ParamObject_ChangeEnemyMp,
  indent: number = 0,
): Command_ChangeEnemyMP => ({
  code: 332,
  indent,
  parameters: changeValueSingleDirect(OPERATION_PLUS, param),
});

export const makeCommandLoseEnemyMP = (
  param: ParamObject_ChangeEnemyMp,
  indent: number = 0,
): Command_ChangeEnemyMP => ({
  code: 332,
  indent,
  parameters: changeValueSingleDirect(OPERATION_MINUS, param),
});

export const makeCommandGainEnemyTP = (
  param: ParamObject_ChangeEnemyTp,
  indent: number = 0,
): Command_ChangeEnemyTP => ({
  code: 342,
  indent,
  parameters: changeValueSingleDirect(OPERATION_PLUS, param),
});

export const makeCommandLoseEnemyTP = (
  param: ParamObject_ChangeEnemyTp,
  indent: number = 0,
): Command_ChangeEnemyTP => ({
  code: 342,
  indent,
  parameters: changeValueSingleDirect(OPERATION_MINUS, param),
});

const changeValueSingleDirect = (
  operation: Operation,
  params: ParamObject_ChangeEnemyMp | ParamObject_ChangeEnemyTp,
): ParamArray_ChangeEnemyMP | ParamArray_ChangeEnemyTP => {
  return [
    params.targetIndex ?? ENEMY_EACH,
    operation,
    OPERAND[params.operand.mode],
    params.operand.value,
  ];
};
