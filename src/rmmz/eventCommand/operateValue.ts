import type {
  Command_ChangeArmors2,
  Command_ChangeItems2,
  Command_ChangeWeapons2,
} from "./commands/item/types";
import type { Command_ChangeGold2 } from "./commands/party/gold/changeGold";
import type { EventCommandLike2 } from "./frame";
import { operateValue } from "./runtime/operateValue/operateValue";
import type { OperateValueHandlers } from "./runtime/operateValue/types";

export const operateValueChangeGoods = <T>(
  command:
    | Command_ChangeArmors2
    | Command_ChangeItems2
    | Command_ChangeWeapons2,
  handlers: OperateValueHandlers<T, number>
): T => {
  return basicOperate(command, handlers);
};

export const operateValueChangeGold = <T>(
  command: Command_ChangeGold2,
  handlers: OperateValueHandlers<T, number>
): T => {
  return basicOperate(command, handlers);
};

const basicOperate = <
  Command extends EventCommandLike2<number, [number, number, number]>,
  Result
>(
  command: Command,
  handlers: OperateValueHandlers<Result, number>
): Result => {
  const operation = command.parameters[0];
  const operandType = command.parameters[1];
  const operand = command.parameters[2];
  return operateValue(operation, operandType, operand, handlers);
};
