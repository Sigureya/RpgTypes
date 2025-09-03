import type { Command_ShowMessageHeader } from "@RpgTypes/rmmz";

export const pickSpeakerName = (command: Command_ShowMessageHeader): string => {
  return command.parameters[4] ? command.parameters[4].trimEnd() : "";
};
