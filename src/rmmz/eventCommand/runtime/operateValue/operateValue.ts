import type { OperateValueHandlers } from "./types";

export const OPERAND_DIRECT = 0 as const;

export const OPERATION_POSITIVE = 0 as const;

export const operateValue = <T, Result>(
  operation: number,
  operandType: number,
  operand: number,
  handlers: OperateValueHandlers<T, Result>
): Result => {
  const value: T =
    operandType === OPERAND_DIRECT
      ? handlers.directValue(operand)
      : handlers.variableValue(operand);

  return operation === OPERATION_POSITIVE
    ? handlers.postiveValue(value)
    : handlers.negativeValue(value);
};
