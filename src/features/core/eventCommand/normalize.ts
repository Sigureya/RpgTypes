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
  GroopMapper,
} from "./commandGroup";
import { getGroupHandlingFunc } from "./commandGroup/mapping";

interface CommandNormalizeHandlers {
  pluginCommand: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ;
  comment: (
    command: EventCommandGroup_Comment
  ) => [Command_CommentHeader] | [Command_CommentHeader, Command_CommentBody];
}

export const normalizeEventCommands = (
  commands: ReadonlyArray<EventCommand>
): NormalizedEventCommand[] => {
  return commands
    .map((command, index) => {
      return forCommand(command, index, commands, {
        pluginCommand: (c) => c,
        comment: (g) => g.normalizedCommands(),
      });
    })
    .filter((v) => v !== undefined)
    .flat();
};

const forCommand = (
  command: EventCommand,
  index: number,
  list: ReadonlyArray<EventCommand>,
  handlers: CommandNormalizeHandlers
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
  if (command.code === PLUGIN_COMMAND_MZ) {
    return handlers.pluginCommand(command);
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

const groupMapper = {
  comment: (g): NormalizedEventCommand[] => g.normalizedCommands(),
  script: (g): [NormalizedEventCommand] => {
    const text = g.getBodyText().trimEnd();
    const newBody: Command_ScriptHeader = {
      code: SCRIPT_EVAL,
      indent: g.header.indent,
      parameters: [text],
    };
    return [newBody];
  },
  showMessage: (g: EventCommandGroup_Message): NormalizedEventCommand[] => {
    const nexText = g.getBodyText().trimEnd();
    const newBody: Command_ShowMessageBody = {
      code: SHOW_MESSAGE_BODY,
      indent: g.header.indent,
      parameters: [nexText],
    };
    return [messageHeader(g.header), newBody];
  },
  showScrollingText: (g): NormalizedEventCommand[] => g.normalizedCommands(),
} as const satisfies GroopMapper<NormalizedEventCommand[]>;

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
