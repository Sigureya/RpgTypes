import type {
  Command_ShowMessageHeader,
  Command_ChangeActorName,
  Command_ChangeActorProfile,
  Command_ChangeActorNickName,
  Command_ShowMessageBody,
  Command_ShowChoices,
  Command_CommentHeader,
  Command_CommentBody,
  Command_ScrollTextBody,
  Command_PluginCommandMZ,
  NormalizedEventCommand,
} from "@RpgTypes/rmmz";
import {
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  COMMENT_BODY,
  COMMENT_HEAD,
  makeCommandShowMessage,
  SHOW_CHOICES,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  SHOW_SCROLLING_TEXT_BODY,
} from "@RpgTypes/rmmz";
import { replaceTextByFunction } from "./utils";

export const replaceBasicEventCommandTexts = (
  command: Exclude<NormalizedEventCommand, Command_PluginCommandMZ>,
  fn: (key: string) => string | undefined
): NormalizedEventCommand => {
  switch (command.code) {
    case SHOW_MESSAGE:
      return replaceTextForCommandShowMessage(command, fn);
    case SHOW_CHOICES:
      return replaceTextForCommandShowChoices(command, fn);
    case SHOW_MESSAGE_BODY:
    case COMMENT_HEAD:
    case COMMENT_BODY:
    case SHOW_SCROLLING_TEXT_BODY:
      return replaceTextForCommand(command, fn);
    case CHANGE_NAME:
    case CHANGE_NICKNAME:
    case CHANGE_PROFILE:
      return replaceTextForCommandActor(command, fn);
    default:
      return command;
  }
};

const replaceTextForCommand = <
  Command extends
    | Command_ShowMessageBody
    | Command_CommentHeader
    | Command_CommentBody
    | Command_ScrollTextBody
>(
  command: Command,
  fn: (key: string) => string | undefined
) => {
  const newText: string = replaceTextByFunction(command.parameters[0], fn);
  return {
    code: command.code,
    indent: command.indent,
    parameters: [newText] satisfies [string],
  } satisfies
    | Command_ShowMessageBody
    | Command_CommentHeader
    | Command_CommentBody
    | Command_ScrollTextBody;
};

const replaceTextForCommandShowMessage = (
  command: Command_ShowMessageHeader,
  fn: (key: string) => string | undefined
): Command_ShowMessageHeader => {
  const newText: string = command.parameters[4]
    ? replaceTextByFunction(command.parameters[4], fn)
    : "";
  return makeCommandShowMessage(
    {
      facename: command.parameters[0],
      faceIndex: command.parameters[1],
      background: command.parameters[2],
      positionType: command.parameters[3],
      speakerName: newText,
    },
    command.indent
  );
};

const replaceTextForCommandActor = <
  Command extends
    | Command_ChangeActorName
    | Command_ChangeActorProfile
    | Command_ChangeActorNickName
>(
  command: Command,
  fn: (key: string) => string | undefined
) => {
  const newName = replaceTextByFunction(command.parameters[1], fn);
  return {
    code: command.code,
    indent: command.indent,
    parameters: [command.parameters[0], newName],
  } satisfies
    | Command_ChangeActorName
    | Command_ChangeActorProfile
    | Command_ChangeActorNickName;
};

const replaceTextForCommandShowChoices = (
  command: Command_ShowChoices,
  fn: (key: string) => string | undefined
): Command_ShowChoices => {
  const newChoices: string[] = command.parameters[0].map((choice) =>
    replaceTextByFunction(choice, fn)
  );
  return {
    code: SHOW_CHOICES,
    indent: command.indent,
    parameters: [
      newChoices,
      command.parameters[1],
      command.parameters[2],
      command.parameters[3],
      command.parameters[4],
    ],
  };
};
