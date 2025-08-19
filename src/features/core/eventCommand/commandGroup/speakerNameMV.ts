import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
  EventCommand,
} from "@RpgTypes/rmmz";
import type { SimpleEventCommandGroup } from "./core/simple";

export interface ResultXX<Command extends EventCommand> {
  spekerCommand: Command;
  messaege: string;
}

export const insertSpeakerCommand = <Command extends EventCommand>(
  commandGroup: SimpleEventCommandGroup<
    Command_ShowMessageHeader,
    Command_ShowMessageBody
  >,
  fn: (text: string) => ResultXX<Command> | undefined
): EventCommand[] => {
  const speaker = fn(commandGroup.getBodyText());
  if (!speaker) {
    return commandGroup.normalizedCommands();
  }

  const newBody: Command_ShowMessageBody = {
    code: 401,
    indent: commandGroup.header.indent,
    parameters: [speaker.messaege],
  };
  return [speaker.spekerCommand, commandGroup.header, newBody];
};
