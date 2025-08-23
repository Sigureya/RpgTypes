import type { Command_ChangeArmors2 } from "./commands/item/types/armor";
import type { Command_ChangeItems2 } from "./commands/item/types/item";
import type { Command_ChangeWeapons2 } from "./commands/item/types/weapon";
import type { Command_ChangeGold2 } from "./commands/party/gold/changeGold";
import { operateValue } from "./runtime/operateValue/operateValue";
import type { OperateValueHandlers } from "./runtime/operateValue/types";

export const operateValueChangeGoods = <T, V>(
  {
    parameters,
  }: Command_ChangeArmors2 | Command_ChangeItems2 | Command_ChangeWeapons2,
  handlers: OperateValueHandlers<T, V>
): T => {
  const operation = parameters[1];
  const operandType = parameters[2];
  const operand = parameters[3];
  return operateValue(operation, operandType, operand, handlers);
};

export const operateValueChangeGold = <T, V>(
  command: Command_ChangeGold2,
  handlers: OperateValueHandlers<T, V>
): T => {
  const operation = command.parameters[0];
  const operandType = command.parameters[1];
  const operand = command.parameters[2];
  return operateValue(operation, operandType, operand, handlers);
};
