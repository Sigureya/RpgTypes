import { makeAudioFileParams, PLUGIN_COMMAND_MZ } from "@RpgTypes/libs";
import type {
  Command_PluginCommandMZ,
  CommandUnion_AnyAudio,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import { isCommandAnyAudio } from "@RpgTypes/rmmz/eventCommand";
import type { PluginCommandMzParameter } from "../text/eventCommand";
import type { AudioCommandParameter } from "./types/result";

export const extractAudioCommands = <T extends PluginCommandMzParameter>(
  commands: ReadonlyArray<EventCommand>,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[] = () => [],
): (AudioCommandParameter | T)[] => {
  return extractAudioCommandsCore(commands, pluginCommandEvaltor);
};

const extractAudioCommandsCore = <T extends PluginCommandMzParameter>(
  commands: ReadonlyArray<EventCommand>,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[],
): (AudioCommandParameter | T)[] => {
  return commands
    .filter(isPluginCommandOrAudioCommand)
    .flatMap<
      T | AudioCommandParameter
    >((command): T[] | AudioCommandParameter => {
      if (command.code === PLUGIN_COMMAND_MZ) {
        return pluginCommandEvaltor(command);
      }
      return pickAudioParam(command);
    });
};

const isPluginCommandOrAudioCommand = (
  command: EventCommand,
): command is CommandUnion_AnyAudio | Command_PluginCommandMZ => {
  return command.code === PLUGIN_COMMAND_MZ || isCommandAnyAudio(command);
};

const pickAudioParam = (
  command: CommandUnion_AnyAudio,
): AudioCommandParameter => ({
  code: command.code,
  paramIndex: 0,
  value: makeAudioFileParams(command.parameters[0]),
});
