import type {
  Command_InputNumber,
  Command_SelectItem,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Message } from "@RpgTypes/rmmzRuntime";

export const commandSetupItemChpice = (
  command: Command_SelectItem,
  message: Rmmz_Message,
): boolean => {
  if (message.isBusy()) {
    return false;
  }
  message.setItemChoice(command.parameters[0], command.parameters[1] || 2);
  return true;
};

export const commandInputNumber = (
  command: Command_InputNumber,
  message: Rmmz_Message,
) => {
  if (message.isBusy()) {
    return false;
  }
  message.setNumberInput(command.parameters[0], command.parameters[1] || 0);
  return true;
};
