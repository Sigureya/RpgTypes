import type {
  Command_ChangeFormationAccess,
  Command_ChangeMenuAccess,
  Command_ChangeSaveAccess,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_System } from "@RpgTypes/rmmzRuntime";

const isEnabled = (value: number): boolean => value !== 0;

export const commandChangeSaveAccess = (
  command: Command_ChangeSaveAccess,
  system: Rmmz_System,
): boolean => {
  if (isEnabled(command.parameters[0])) {
    system.enableSave();
  } else {
    system.disableSave();
  }
  return true;
};

export const commandChangeMenuAccess = (
  command: Command_ChangeMenuAccess,
  system: Rmmz_System,
): boolean => {
  if (isEnabled(command.parameters[0])) {
    system.enableMenu();
  } else {
    system.disableMenu();
  }
  return true;
};

export const commandChangeFormationAccess = (
  command: Command_ChangeFormationAccess,
  system: Rmmz_System,
): boolean => {
  if (isEnabled(command.parameters[0])) {
    system.enableFormation();
  } else {
    system.disableFormation();
  }
  return true;
};
