import type {
  Command_ShowChoices,
  Command_PluginCommandMZ,
  EventCommand,
  ExtractCommandByCode,
  Command_ShowMessageHeader,
  Command_ShowMessageBody,
  Command_CommentBody,
  Command_CommentHeader,
  NormalizedEventCommand,
  Command_ScriptHeader,
  Command_ScrollTextBody,
} from "@RpgTypes/rmmz";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  COMMENT_BODY,
  PLUGIN_COMMAND_MZ,
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
  SHOW_CHOICES,
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT_BODY,
} from "@RpgTypes/rmmz";
import type {
  EventCommandGroup_Comment,
  EventCommandGroup_Message,
  EventCommandGroup_Script,
  EventCommandGroup_ScrollingText,
  GroopMapper,
} from "./commandGroup";
import { getGroupHandlingFunc } from "./commandGroup/mapping";

export interface CommandNormalizeHandlers {
  pluginCommand: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ;
  comment: (
    command: EventCommandGroup_Comment
  ) => [Command_CommentHeader] | [Command_CommentHeader, Command_CommentBody];
  script: (script: EventCommandGroup_Script) => Command_ScriptHeader;
}

export const normalizeEventCommands = (
  commands: ReadonlyArray<EventCommand>,
  handlers: CommandNormalizeHandlers = {
    pluginCommand: (c) => c,
    comment: (g) => g.normalizedCommands(),
    script: (g) => normalizeScript(g),
  }
): NormalizedEventCommand[] => {
  const mapper: GroopMapper<NormalizedEventCommand[]> = {
    comment: (g): NormalizedEventCommand[] => g.normalizedCommands(),
    script: (g) => [handlers.script(g)],
    showMessage: normalizeMessage,
    showScrollingText: normalizeScrollText,
  };

  return commands
    .map((command, index) => {
      return command.code === PLUGIN_COMMAND_MZ
        ? handlers.pluginCommand(command)
        : forCommand(command, index, commands, mapper);
    })
    .filter((v) => v !== undefined)
    .flat();
};

const forCommand = (
  command: Exclude<EventCommand, Command_PluginCommandMZ>,
  index: number,
  list: ReadonlyArray<EventCommand>,
  groupMapper: GroopMapper<NormalizedEventCommand[]>
): NormalizedEventCommand[] | NormalizedEventCommand | undefined => {
  if (
    command.code === SHOW_MESSAGE_BODY ||
    command.code === SHOW_SCROLLING_TEXT_BODY ||
    command.code === COMMENT_BODY
  ) {
    return undefined;
  }
  const fn = getGroupHandlingFunc(command.code);
  if (fn) {
    return fn<NormalizedEventCommand[]>(
      list,
      index,
      groupMapper
    ) satisfies NormalizedEventCommand[];
  }

  if (command.code === SHOW_CHOICES) {
    return normalizeChoiceCommand(command);
  }

  if (
    command.code === CHANGE_NAME ||
    command.code === CHANGE_NICKNAME ||
    command.code === CHANGE_PROFILE
  ) {
    return normalizePluginCommand(command);
  }
  if (command.code === SCRIPT_EVAL_BODY) {
    return undefined;
  }

  return command;
};

const normalizeChoiceCommand = (
  command: Readonly<Command_ShowChoices>
): Command_ShowChoices => {
  return {
    code: SHOW_CHOICES,
    indent: command.indent,
    parameters: [
      command.parameters[0].map((msg) => msg.trimEnd()),
      command.parameters[1],
      command.parameters[2],
      command.parameters[3],
      command.parameters[4],
    ],
  };
};

const normalizePluginCommand = (
  command: ExtractCommandByCode<
    typeof CHANGE_NICKNAME | typeof CHANGE_PROFILE | typeof CHANGE_NAME
  >
): ExtractCommandByCode<
  typeof CHANGE_NICKNAME | typeof CHANGE_PROFILE | typeof CHANGE_NAME
> => {
  return {
    code: command.code,
    indent: command.indent,
    parameters: [command.parameters[0], command.parameters[1].trimEnd()],
  };
};

const normalizeScript = (
  script: EventCommandGroup_Script
): Command_ScriptHeader => {
  return {
    code: SCRIPT_EVAL,
    indent: script.header.indent,
    parameters: [script.getBodyText().trimEnd()],
  };
};

const normalizeMessage = (
  g: EventCommandGroup_Message
): NormalizedEventCommand[] => {
  const nexText = g.getBodyText().trimEnd();
  const newBody: Command_ShowMessageBody = {
    code: SHOW_MESSAGE_BODY,
    indent: g.header.indent,
    parameters: [nexText],
  };
  return [messageHeader(g.header), newBody];
};

const normalizeScrollText = (
  g: EventCommandGroup_ScrollingText
): NormalizedEventCommand[] => {
  const nexText = g.getBodyText().trimEnd();
  const newBody: Command_ScrollTextBody = {
    code: SHOW_SCROLLING_TEXT_BODY,
    indent: g.header.indent,
    parameters: [nexText],
  };
  return [g.header, newBody];
};

const messageHeader = (
  commahd: Command_ShowMessageHeader
): Command_ShowMessageHeader => {
  const speaker = commahd.parameters[4] ? commahd.parameters[4].trimEnd() : "";
  return {
    code: commahd.code,
    indent: commahd.indent,
    parameters: [
      commahd.parameters[0],
      commahd.parameters[1],
      commahd.parameters[2],
      commahd.parameters[3],
      speaker,
    ],
  };
};
