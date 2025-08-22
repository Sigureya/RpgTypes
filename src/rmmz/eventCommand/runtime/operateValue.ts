export interface XXX<T, Result> {
  directValue(operand: number): T;
  variableValue(operand: number): T;
  negativeValue(value: T): Result;
  postiveValue(value: T): Result;
}

export const OPERAND_DIRECT = 0 as const;

export const operateValue = <T, Result>(
  operation: number,
  operandType: number,
  operand: number,
  xx: XXX<T, Result>
): Result => {
  const value: T =
    operandType === OPERAND_DIRECT
      ? xx.directValue(operand)
      : xx.variableValue(operand);
  return operation === 0 ? xx.postiveValue(value) : xx.negativeValue(value);
};
