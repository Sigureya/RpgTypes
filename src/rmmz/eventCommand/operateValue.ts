import type {
  Command_ChangeArmors2,
  Command_ChangeItems2,
  Command_ChangeWeapons2,
} from "./commands/item/types";
import { operateValue } from "./runtime/operateValue/operateValue";
import type { OperateValueHandlers } from "./runtime/operateValue/types";

export const operateValueItemXXX = <T>(
  command:
    | Command_ChangeArmors2
    | Command_ChangeItems2
    | Command_ChangeWeapons2,
  handlers: OperateValueHandlers<number, T>
): T => {
  const operation = command.parameters[0];
  const operandType = command.parameters[1];
  const operand = command.parameters[2];

  return operateValue(operation, operandType, operand, handlers);
};
