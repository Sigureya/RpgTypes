import type { Command_ChangeWindowColor } from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_System } from "@RpgTypes/rmmzRuntime";

export const commandChangeWindowColor = (
  command: Command_ChangeWindowColor,
  system: Rmmz_System,
): void => {
  system.setWindowTone(command.parameters[0]);
};
