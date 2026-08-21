import type {
  NormalizedEventCommand,
  Command_PlaySE,
  Command_PluginCommandMZ,
} from "@RpgTypes/rmmz";
import {
  PLAY_SE,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  groupByMessageCommands,
} from "@RpgTypes/rmmz";

interface Handlers {
  createVoiceCommand(): null | Command_PlaySE[];
  isVoiceCommand(command: Command_PlaySE): boolean;
}

const xxx = (
  list: ReadonlyArray<NormalizedEventCommand>,
  handlers: Handlers,
) => {
  const voiceRemoved = list.filter((command) => {
    if (command.code === PLAY_SE) {
      return handlers.isVoiceCommand(command);
    }
    return true;
  });
  return voiceRemoved.flatMap((command, index) => {
    if (command.code === SHOW_MESSAGE_BODY) {
      return null;
    }
  });
};
