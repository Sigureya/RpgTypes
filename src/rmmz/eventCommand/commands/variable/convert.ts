import { OPERAND_CONSTANT, OPERAND_VARIABLE } from "./constants/operand";
import type {
  Operand_Constatant,
  Operand_Variable,
  ParamObject_Operand_Constant,
  ParamObject_Operand_Variable,
  ParamObject_WritingTarget,
} from "./types";

export const toArrayOperandConstant = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Constant,
  operation: number = 0
): Operand_Constatant => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_CONSTANT,
  value.value,
];

export const toArrayOperandVariable = (
  target: ParamObject_WritingTarget,
  value: ParamObject_Operand_Variable,
  operation: number = 0
): Operand_Variable => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_VARIABLE,
  value.variableId,
];
