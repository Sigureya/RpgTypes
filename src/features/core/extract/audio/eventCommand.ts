import { makeAudioFileParams } from "@RpgTypes/libs";
import type {
  CommandUnion_AnyAudio,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import { isCommandAnyAudio } from "@RpgTypes/rmmz/eventCommand";
import type { AudioCommandParameter } from "./types/result";

export const extractAudioCommands = (
  commands: ReadonlyArray<EventCommand>,
): AudioCommandParameter[] => {
  return commands.filter(isCommandAnyAudio).map(xxx);
};

const xxx = (command: CommandUnion_AnyAudio): AudioCommandParameter => ({
  code: command.code,
  paramIndex: 0,
  value: makeAudioFileParams(command.parameters[0]),
});
