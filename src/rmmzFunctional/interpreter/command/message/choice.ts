import type { Command_ShowChoices } from "@RpgTypes/rmmz/eventCommand";
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
