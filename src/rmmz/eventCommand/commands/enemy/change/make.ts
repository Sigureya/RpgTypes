import { OPERATION_MINUS } from "./constants";
import { OPERATION_PLUS } from "./constants";
import type {
  Command_ChangeEnemyTP,
  Command_ChangeEnemyMP,
  ParamObject_ChangeEnemyHp,
  ParamObject_ChangeEnemyTp,
  ParamArray_ChangeEnemyTP,
  Command_ChangeEnemyHP,
  ParamArray_ChangeEnemyHP,
} from "./types";
import type {
  ParamArray_ChangeEnemyMP,
  ParamObject_ChangeEnemyMp,
  ParamObject_ChangeEnemyMp2,
} from "./types/changeMp";
import type {
  ParamObject_ChangeEnemyValueDirect,
  ParamObject_ChangeEnemyValueVV,
} from "./types/value";

type Operation = typeof OPERATION_PLUS | typeof OPERATION_MINUS;
const OPERAND = {
  direct: 0,
  variable: 1,
} as const;

const ENEMY_EACH = -1 as const;
export const makeCommandGainHP = (
  params: ParamObject_ChangeEnemyHp,
  indent: number = 0,
): Command_ChangeEnemyHP => ({
  code: 331,
  indent,
  parameters: changeHpSingleDirect(OPERATION_PLUS, params),
});

export const makeCommandLoseHP = (
  params: ParamObject_ChangeEnemyHp,
  indent: number = 0,
): Command_ChangeEnemyHP => ({
  code: 331,
  indent,
  parameters: changeHpSingleDirect(OPERATION_MINUS, params),
});

const changeHpSingleDirect = (
  operation: Operation,
  params: ParamObject_ChangeEnemyHp,
): ParamArray_ChangeEnemyHP => {
  return [
    params.targetIndex ?? ENEMY_EACH,
    operation,
    OPERAND[params.operand.mode],
    params.operand.value,
    params.allowDeath,
  ];
};

export const makeCommandGainEnemyHPDirect = (
  param: ParamObject_ChangeEnemyValueDirect,
  allowDeath: boolean,
  indent: number = 0,
): Command_ChangeEnemyHP => ({
  code: 331,
  indent,
  parameters: [
    param.enemyIndex,
    OPERATION_PLUS,
    OPERAND.direct,
    param.operandValue,
    allowDeath,
  ],
});

export const makeCommandLoseEnemyHPDirect = (
  param: ParamObject_ChangeEnemyValueDirect,
  allowDeath: boolean,
  indent: number = 0,
): Command_ChangeEnemyHP => ({
  code: 331,
  indent,
  parameters: [
    param.enemyIndex,
    OPERATION_MINUS,
    OPERAND.direct,
    param.operandValue,
    allowDeath,
  ],
});

export const makeCommandGainEnemyHPVV = (
  param: ParamObject_ChangeEnemyValueVV,
  allowDeath: boolean,
  indent: number = 0,
): Command_ChangeEnemyHP => ({
  code: 331,
  indent,
  parameters: [
    param.enemyIndexVariableId,
    OPERATION_PLUS,
    OPERAND.variable,
    param.operandVariableId,
    allowDeath,
  ],
});

export const makeCommandLoseEnemyHPVV = (
  param: ParamObject_ChangeEnemyValueVV,
  allowDeath: boolean,
  indent: number = 0,
): Command_ChangeEnemyHP => ({
  code: 331,
  indent,
  parameters: [
    param.enemyIndexVariableId,
    OPERATION_MINUS,
    OPERAND.variable,
    param.operandVariableId,
    allowDeath,
  ],
});

export const makeCommandGainEnemyMP2 = (
  param: ParamObject_ChangeEnemyMp2,
  indent: number = 0,
): Command_ChangeEnemyMP => ({
  code: 332,
  indent,
  parameters: [
    param.enemyIndexVariableId,
    OPERATION_PLUS,
    OPERAND.variable,
    param.operandVariableId,
  ],
});

export const makeCommandGainEnemyMPDirect = (
  param: ParamObject_ChangeEnemyValueDirect,
  indent: number = 0,
): Command_ChangeEnemyMP => ({
  code: 332,
  indent,
  parameters: [
    param.enemyIndex,
    OPERATION_PLUS,
    OPERAND.direct,
    param.operandValue,
  ],
});

export const makeCommandLoseEnemyMPDirect = (
  param: ParamObject_ChangeEnemyValueDirect,
  indent: number = 0,
): Command_ChangeEnemyMP => ({
  code: 332,
  indent,
  parameters: [
    param.enemyIndex,
    OPERATION_MINUS,
    OPERAND.direct,
    param.operandValue,
  ],
});

export const makeCommandGainEnemyMPVV = (
  param: ParamObject_ChangeEnemyValueVV,
  indent: number = 0,
): Command_ChangeEnemyMP => ({
  code: 332,
  indent,
  parameters: [
    param.enemyIndexVariableId,
    OPERATION_PLUS,
    OPERAND.variable,
    param.operandVariableId,
  ],
});

export const makeCommandLoseEnemyMPVV = (
  param: ParamObject_ChangeEnemyValueVV,
  indent: number = 0,
): Command_ChangeEnemyMP => ({
  code: 332,
  indent,
  parameters: [
    param.enemyIndexVariableId,
    OPERATION_MINUS,
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

export const makeCommandGainEnemyTPDirect = (
  param: ParamObject_ChangeEnemyValueDirect,
  indent: number = 0,
): Command_ChangeEnemyTP => ({
  code: 342,
  indent,
  parameters: [
    param.enemyIndex,
    OPERATION_PLUS,
    OPERAND.direct,
    param.operandValue,
  ],
});

export const makeCommandLoseEnemyTPDirect = (
  param: ParamObject_ChangeEnemyValueDirect,
  indent: number = 0,
): Command_ChangeEnemyTP => ({
  code: 342,
  indent,
  parameters: [
    param.enemyIndex,
    OPERATION_MINUS,
    OPERAND.direct,
    param.operandValue,
  ],
});

export const makeCommandGainEnemyTPVV = (
  param: ParamObject_ChangeEnemyValueVV,
  indent: number = 0,
): Command_ChangeEnemyTP => ({
  code: 342,
  indent,
  parameters: [
    param.enemyIndexVariableId,
    OPERATION_PLUS,
    OPERAND.variable,
    param.operandVariableId,
  ],
});

export const makeCommandLoseEnemyTPVV = (
  param: ParamObject_ChangeEnemyValueVV,
  indent: number = 0,
): Command_ChangeEnemyTP => ({
  code: 342,
  indent,
  parameters: [
    param.enemyIndexVariableId,
    OPERATION_MINUS,
    OPERAND.variable,
    param.operandVariableId,
  ],
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
