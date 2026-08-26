import type { Command_ChangeWindowColor } from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_System } from "@RpgTypes/rmmzRuntime";

export const commandChangeWindowColor = (
  command: Command_ChangeWindowColor,
  system: Rmmz_System,
): boolean => {
  system.setWindowTone(command.parameters[0]);
  return true;
};
