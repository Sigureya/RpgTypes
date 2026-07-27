import type {
  Command_ChangeDefeatME,
  Command_ChangeVictoryME,
  Command_ChangeBattleBGM,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_System } from "@RpgTypes/rmmzRuntime";

export const commandChangeDefeatMe = (
  command: Command_ChangeDefeatME,
  system: Rmmz_System,
): boolean => {
  system.setDefeatMe(command.parameters[0]);
  return true;
};

export const commandChangeVictoryMe = (
  command: Command_ChangeVictoryME,
  system: Rmmz_System,
): boolean => {
  system.setVictoryMe(command.parameters[0]);
  return true;
};

export const commandChangeBattleBgm = (
  command: Command_ChangeBattleBGM,
  system: Rmmz_System,
): boolean => {
  system.setBattleBgm(command.parameters[0]);
  return true;
};

export const commmandSaveBgm = (system: Rmmz_System) => {
  system.saveBgm();
  return true;
};
