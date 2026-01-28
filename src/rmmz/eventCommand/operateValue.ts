import type {
  Command_ChangeArmors,
  Command_ChangeItems,
  Command_ChangeWeapons,
} from "./commands/item/change";
import { OPERAND_DIRECT } from "./commands/item/change/types/constants";
import type { Command_ChangeGold } from "./commands/party/types/changeGold";
import type { OperateValueHandlers } from "./runtime/operateValue/types";

export const OPERATION_POSITIVE = 0 as const;

export const operateValue = <Result, T>(
  operation: number,
  operandType: number,
  operand: number,
  handlers: OperateValueHandlers<Result, T>,
): Result => {
  const value: T =
    operandType === OPERAND_DIRECT
      ? handlers.directValue(operand)
      : handlers.variableValue(operand);

  return operation === OPERATION_POSITIVE
    ? handlers.postiveValue(value)
    : handlers.negativeValue(value);
};

export const operateValueChangeGoods = <T, V>(
  {
    parameters,
  }: Command_ChangeArmors | Command_ChangeItems | Command_ChangeWeapons,
  handlers: OperateValueHandlers<T, V>,
): T => {
  const operation = parameters[1];
  const operandType = parameters[2];
  const operand = parameters[3];
  return operateValue(operation, operandType, operand, handlers);
};

export const operateValueChangeGold = <T, V>(
  command: Command_ChangeGold,
  handlers: OperateValueHandlers<T, V>,
): T => {
  const operation = command.parameters[0];
  const operandType = command.parameters[1];
  const operand = command.parameters[2];
  return operateValue(operation, operandType, operand, handlers);
};
