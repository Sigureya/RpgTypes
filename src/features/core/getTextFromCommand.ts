import {
  SHOW_CHOICES,
  CHANGE_NICKNAME,
  CHANGE_NAME,
  CHANGE_PROFILE,
  PLUGIN_COMMAND_MZ,
} from "@RpgTypes/libs/eventCommand";
import type { Command_PluginCommandMZ, EventCommand } from "@RpgTypes/rmmz";
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
  list: ReadonlyArray<EventCommand>,
): TextCommandParameter[] => {
  return extractTextFromEventCommandsCore(list, () => []);
};

export const extractTextFromEventCommandsEx = <
  T extends PluginCommandMzParameter,
>(
  list: ReadonlyArray<EventCommand>,
  pluginCommandFn: (command: Command_PluginCommandMZ) => T[],
): (TextCommandParameter | T)[] => {
  return extractTextFromEventCommandsCore(list, pluginCommandFn);
};

const extractTextFromEventCommandsCore = <T extends PluginCommandMzParameter>(
  list: ReadonlyArray<EventCommand>,
  pluginCommandFn: (command: Command_PluginCommandMZ) => T[],
): (TextCommandParameter | T)[] => {
  return list
    .flatMap(
      (
        command,
        index,
      ): null | TextCommandParameter[] | TextCommandParameter => {
        return forCommand(command, index, list, pluginCommandFn);
      },
    )
    .filter((v) => v !== null);
};

const forCommand = <T extends PluginCommandMzParameter>(
  command: EventCommand,
  index: number,
  list: ReadonlyArray<EventCommand>,
  pluginCommandFn: (command: Command_PluginCommandMZ) => T[],
) => {
  if (command.code === SHOW_CHOICES) {
    return extractTextParamsFromChoice(command);
  }
  const fn = getGroupHandlingFunc(command.code);
  if (fn) {
    const textCommand = fn<TextCommandParameter | undefined>(
      list,
      index,
      groupMapper,
    );
    if (textCommand !== undefined) {
      return [textCommand];
    }
  }
  if (command.code === CHANGE_NICKNAME) {
    return extractTextFromActorCommand(command);
  }
  if (command.code === CHANGE_NAME) {
    return extractTextFromActorCommand(command);
  }
  if (command.code === CHANGE_PROFILE) {
    return extractTextFromActorCommand(command);
  }

  if (command.code === PLUGIN_COMMAND_MZ) {
    return pluginCommandFn(command);
  }
  return null;
};

const groupMapper = {
  comment: (g) => extractTextParamFromComment(g),
  showMessage: (g) => extractTextParamFromMessage(g),
  script: (group) => extractTextParamFromScript(group),
  showScrollingText: (group) => extractTextParamFromShowScrollingText(group),
} as const satisfies GroopMapper<TextCommandParameter | undefined>;
