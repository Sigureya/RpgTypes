import type { Command_ChangeEncounter } from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_PlayerCharactor, Rmmz_System } from "@RpgTypes/rmmzRuntime";

export const commandChangeEncounter = (
  command: Command_ChangeEncounter,
  system: Rmmz_System,
  player: Rmmz_PlayerCharactor,
): boolean => {
  if (command.parameters[0] === 0) {
    system.disableEncounter();
  } else {
    system.enableEncounter();
  }
  player.makeEncounterCount();
  return true;
};
