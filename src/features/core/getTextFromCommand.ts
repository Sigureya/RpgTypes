import type { Command_PluginCommandMZ, EventCommand } from "@RpgTypes/rmmz";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  PLUGIN_COMMAND_MZ,
  SHOW_CHOICES,
} from "@RpgTypes/rmmz";
import type { GroopMapper } from "./eventCommand/commandGroup";
import { getGroupHandlingFunc } from "./eventCommand/commandGroup/mapping";
import type {
  PluginCommandMzParameter,
  TextCommandParameter,
} from "./extract/text/eventCommand";
import {
  extractTextFromActorCommand,
  extractTextParamsFromChoice,
} from "./extract/text/eventCommand";
import {
  extractTextParamFromComment,
  extractTextParamFromMessage,
  extractTextParamFromScript,
  extractTextParamFromShowScrollingText,
} from "./extractGroupText";

export const extractTextFromEventCommands = (
  list: ReadonlyArray<EventCommand>
): TextCommandParameter[] => {
  return extractTextFromEventCommandsCore(
    list,
    (): PluginCommandMzParameter[] => []
  );
};

export const extractTextFromEventCommandsEx = <
  T extends PluginCommandMzParameter
>(
  list: ReadonlyArray<EventCommand>,
  pluginCommandFn: (command: Command_PluginCommandMZ) => T[]
): TextCommandParameter[] => {
  return extractTextFromEventCommandsCore(list, pluginCommandFn);
};

const extractTextFromEventCommandsCore = <T extends PluginCommandMzParameter>(
  list: ReadonlyArray<EventCommand>,
  pluginCommandFn: (command: Command_PluginCommandMZ) => T[]
): (TextCommandParameter | T)[] => {
  return list.reduce<TextCommandParameter[]>((acc, command, index) => {
    if (command.code === SHOW_CHOICES) {
      return [...acc, ...extractTextParamsFromChoice(command)];
    }
    const fn = getGroupHandlingFunc(command.code);
    if (fn) {
      const textCommand = fn<TextCommandParameter | undefined>(
        list,
        index,
        groupMapper
      );
      if (textCommand !== undefined) {
        return [...acc, textCommand];
      }
    }
    if (command.code === CHANGE_NICKNAME) {
      return [...acc, extractTextFromActorCommand(command)];
    }
    if (command.code === CHANGE_NAME) {
      return [...acc, extractTextFromActorCommand(command)];
    }
    if (command.code === CHANGE_PROFILE) {
      return [...acc, extractTextFromActorCommand(command)];
    }
    if (command.code === PLUGIN_COMMAND_MZ) {
      return [...acc, ...pluginCommandFn(command)];
    }

    return acc;
  }, []);
};

const groupMapper = {
  comment: (g) => extractTextParamFromComment(g),
  showMessage: (g) => extractTextParamFromMessage(g),
  script: (group) => extractTextParamFromScript(group),
  showScrollingText: (group) => extractTextParamFromShowScrollingText(group),
} as const satisfies GroopMapper<TextCommandParameter | undefined>;
