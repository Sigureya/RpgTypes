import type {
  Command_ShowMessageHeader,
  Command_ChangeActorName,
  Command_ChangeActorProfile,
  Command_ChangeActorNickName,
  Command_ShowMessageBody,
  Command_ShowChoices,
  Command_CommentHeader,
  EventCommand,
  Command_CommentBody,
  Command_ScrollTextBody,
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
import { replaceTextByMap } from "./utils";

export const replaceEventCommandTexts = (
  list: ReadonlyArray<EventCommand>,
  map: ReadonlyMap<string, string>
): EventCommand[] => {
  return list.map((command) => {
    switch (command.code) {
      case SHOW_MESSAGE:
        return replaceTextForCommandShowMessage(command, map);
      case SHOW_CHOICES:
        return replaceTextForCommandShowChoices(command, map);
      case SHOW_MESSAGE_BODY:
      case COMMENT_HEAD:
      case COMMENT_BODY:
      case SHOW_SCROLLING_TEXT_BODY:
        return replaceTextForCommand2(command, map);
      case CHANGE_NAME:
      case CHANGE_NICKNAME:
      case CHANGE_PROFILE:
        return replaceTextForCommandActor(command, map);
      default:
        return command;
    }
  });
};

export const replaceTextForCommand2 = (
  command:
    | Command_ShowMessageBody
    | Command_CommentHeader
    | Command_CommentBody
    | Command_ScrollTextBody,
  map: ReadonlyMap<string, string>
) => {
  const newText: string = replaceTextByMap(command.parameters[0], map);
  return {
    code: command.code,
    indent: command.indent,
    parameters: [newText] satisfies [string],
  };
};

export const replaceTextForCommandShowMessage = (
  command: Command_ShowMessageHeader,
  map: ReadonlyMap<string, string>
): Command_ShowMessageHeader => {
  const newText = replaceTextByMap(command.parameters[4], map);
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

export const replaceTextForCommandActor = <
  Command extends
    | Command_ChangeActorName
    | Command_ChangeActorProfile
    | Command_ChangeActorNickName
>(
  command: Command,
  map: ReadonlyMap<string, string>
) => {
  const newName = replaceTextByMap(command.parameters[1], map);
  return {
    code: command.code,
    indent: command.indent,
    parameters: [command.parameters[0], newName],
  } satisfies
    | Command_ChangeActorName
    | Command_ChangeActorProfile
    | Command_ChangeActorNickName;
};

export const replaceTextForCommandShowChoices = (
  command: Command_ShowChoices,
  map: ReadonlyMap<string, string>
): Command_ShowChoices => {
  const newChoices: string[] = command.parameters[0].map((choice) =>
    replaceTextByMap(choice, map)
  );
  return {
    code: command.code,
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
