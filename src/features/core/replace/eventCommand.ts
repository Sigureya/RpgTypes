import type {
  Command_ShowMessageHeader,
  Command_ChangeActorName,
  Command_ChangeActorProfile,
  Command_ChangeActorNickName,
  Command_ShowMessageBody,
  Command_ShowChoices,
  Command_CommentHeader,
} from "@RpgTypes/rmmz";
import { makeCommandShowMessage } from "@RpgTypes/rmmz";
import { replaceXXXX } from "./utils";

export const replaceTextForCommand2 = (
  command: Command_ShowMessageBody | Command_CommentHeader,
  map: ReadonlyMap<string, string>
) => {
  const newText: string = replaceXXXX(command.parameters[0], map);
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
  const newText = replaceXXXX(command.parameters[4], map);
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
  const newName = replaceXXXX(command.parameters[1], map);
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
    replaceXXXX(choice, map)
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
