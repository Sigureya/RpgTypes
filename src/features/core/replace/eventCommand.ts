import type {
  Command_ShowMessageHeader,
  Command_ChangeActorName,
  Command_ChangeActorProfile,
  Command_ChangeActorNickName,
  Command_ShowMessageBody,
} from "@RpgTypes/rmmz";
import { makeCommandShowMessage } from "@RpgTypes/rmmz";
import { replaceXXXX } from "./utils";

export const replaceTextForCommand2 = (
  command: Command_ShowMessageBody,
  map: ReadonlyMap<string, string>
): Command_ShowMessageBody => {
  const newText = replaceXXXX(command.parameters[0], map);
  return {
    code: command.code,
    indent: command.indent,
    parameters: [newText],
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
