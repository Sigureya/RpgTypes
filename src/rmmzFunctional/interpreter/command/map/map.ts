import type {
  Command_ChangeBattleBackground,
  Command_ChangeMapNameDisplay,
  Command_ChangeParallax,
  Command_ChangeTileset,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Map } from "@RpgTypes/rmmzRuntime";

export const commandChangeMapNameDisplay = (
  command: Command_ChangeMapNameDisplay,
  map: Rmmz_Map,
): boolean => {
  if (command.parameters[0] === 0) {
    map.enableNameDisplay();
  } else {
    map.disableNameDisplay();
  }
  return true;
};

export const commandChangeTileset = (
  command: Command_ChangeTileset,
  map: Rmmz_Map,
): boolean => {
  map.changeTileset(command.parameters[0]);
  return true;
};

export const commandChangeBattleBackground = (
  command: Command_ChangeBattleBackground,
  map: Rmmz_Map,
): boolean => {
  map.changeBattleback(command.parameters[0], command.parameters[1]);
  return true;
};

export const commandChangeParallax = (
  command: Command_ChangeParallax,
  map: Rmmz_Map,
): boolean => {
  map.changeParallax(
    command.parameters[0],
    command.parameters[1],
    command.parameters[2],
    command.parameters[3],
    command.parameters[4],
  );
  return true;
};
