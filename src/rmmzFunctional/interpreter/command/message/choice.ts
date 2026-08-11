import type {
  Command_ShowChoices,
  Command_ShowChoiceWhen,
} from "@RpgTypes/rmmz/eventCommand";
import {
  choiceBackground,
  choiceCancelType,
  choiceDefaultType,
  choicePositionType,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Message } from "@RpgTypes/rmmzRuntime";

export const setupChoice = (
  command: Command_ShowChoices,
  message: Rmmz_Message,
) => {
  message.setChoices(
    Array.from<string>(command.parameters[0]),
    choiceDefaultType(command),
    choiceCancelType(command),
  );
  message.setBackground(choiceBackground(command));
  message.setChoicePositionType(choicePositionType(command));
  return message;
};

export const needsSkipByChoiceWhen = (
  command: Command_ShowChoiceWhen,
  indent: number,
): boolean => {
  return indent !== command.parameters[0];
};

export const needsSkipByWhenCancel = (value: number): boolean => {
  return value >= 0;
};
