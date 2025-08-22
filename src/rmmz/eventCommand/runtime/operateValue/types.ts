export interface OperateValueHandlers<Result, Value> {
  directValue(operand: number): Value;
  variableValue(operand: number): Value;
  negativeValue(value: Value): Result;
  postiveValue(value: Value): Result;
}
