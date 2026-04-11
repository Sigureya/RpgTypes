import { makeAudioFileParams, PLUGIN_COMMAND_MZ } from "@RpgTypes/libs";
import type {
  Command_PluginCommandMZ,
  CommandUnion_AnyAudio,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import {
  assetDirectoryName,
  isCommandAnyAudio,
} from "@RpgTypes/rmmz/eventCommand";
import type { AudioPluginCommandParameter } from "./types";
import type { AudioCommandParameter } from "./types/result";

export const extractAudioCommands = <T extends AudioPluginCommandParameter>(
  commands: ReadonlyArray<EventCommand>,
  pluginCommandEvaltor: (command: Command_PluginCommandMZ) => T[] = () => [],
): (AudioCommandParameter | T)[] => {
  return extractAudioCommandsCore(commands, pluginCommandEvaltor);
};

const extractAudioCommandsCore = <T extends AudioPluginCommandParameter>(
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

const isPluginCommandOrAudioCommand = (command: EventCommand) => {
  return command.code === PLUGIN_COMMAND_MZ || isCommandAnyAudio(command);
};

const pickAudioParam = (
  command: CommandUnion_AnyAudio,
): AudioCommandParameter => ({
  code: command.code,
  paramIndex: 0,
  value: makeAudioFileParams(command.parameters[0]),
  directory: assetDirectoryName(command.code),
});
