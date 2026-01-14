import type {
  Command_ShowChoices,
  Command_PluginCommandMZ,
  EventCommand,
  ExtractCommandByCode,
  Command_ShowMessageHeader,
  Command_ShowMessageBody,
} from "@RpgTypes/rmmz";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  PLUGIN_COMMAND_MZ,
  SHOW_CHOICES,
  SHOW_MESSAGE_BODY,
} from "@RpgTypes/rmmz";
import type { EventCommandGroup_Message, GroopMapper } from "./commandGroup";
import { getGroupHandlingFunc } from "./commandGroup/mapping";

export const normalizeEventCommands = (
  commands: ReadonlyArray<EventCommand>
): EventCommand[] => {
  return commands
    .map((command, index) => {
      return forCommand(command, index, commands, (c) => c);
    })
    .filter((v) => v !== undefined)
    .flat();
};

const forCommand = (
  command: EventCommand,
  index: number,
  list: ReadonlyArray<EventCommand>,
  pluginCommandFn: (command: Command_PluginCommandMZ) => Command_PluginCommandMZ
): EventCommand[] | EventCommand | undefined => {
  if (command.code === 401 || command.code === 402) {
    return undefined;
  }
  const fn = getGroupHandlingFunc(command.code);
  if (fn) {
    return fn<EventCommand[]>(
      list,
      index,
      groupMapper
    ) satisfies EventCommand[];
  }

  if (command.code === SHOW_CHOICES) {
    return normalizeChoiceCommand(command);
  }

  if (command.code === 101) {
    return messageHeader(command);
  }

  if (
    command.code === CHANGE_NICKNAME ||
    command.code === CHANGE_PROFILE ||
    command.code === CHANGE_NAME
  ) {
    return normalizePluginCommand(command);
  }
  if (command.code === PLUGIN_COMMAND_MZ) {
    return pluginCommandFn(command);
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
  comment: (g) => g.normalizedCommands(),
  script: (g) => g.normalizedCommands(),
  showMessage: (g: EventCommandGroup_Message) => {
    const nexText = g.getBodyText().trimEnd();
    const newBody: Command_ShowMessageBody = {
      code: SHOW_MESSAGE_BODY,
      indent: g.header.indent,
      parameters: [nexText],
    };
    return [messageHeader(g.header), newBody];
  },
  showScrollingText: (g) => g.normalizedCommands(),
} as const satisfies GroopMapper<EventCommand[]>;

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
