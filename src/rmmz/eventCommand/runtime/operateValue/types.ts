export interface OperateValueHandlers<T, Result> {
  directValue(operand: number): T;
  variableValue(operand: number): T;
  negativeValue(value: T): Result;
  postiveValue(value: T): Result;
}
