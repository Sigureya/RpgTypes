import type { Command_InputNumber } from "@RpgTypes/rmmz";
import {
  choiceBackground,
  choiceCancelType,
  choiceDefaultType,
  choicePositionType,
  SHOW_CHOICES,
  type Command_ShowChoices,
} from "@RpgTypes/rmmz";
import type { InterpreterState2 } from "./types";
import type { Rmmz_Message } from "@RpgTypes/rmmzRuntime";
import { waitXXX } from "./wait";

export const setupChoiceNN = (
  state: InterpreterState2,
  command: Command_ShowChoices,
  message: Rmmz_Message,
): InterpreterState2 => {
  if (message.isBusy()) {
    return state;
  }
  message.setChoices(
    Array.from<string>(command.parameters[0]),
    choiceDefaultType(command),
    choiceCancelType(command),
  );
  message.setBackground(choiceBackground(command));
  message.setChoicePositionType(choicePositionType(command));

  return waitXXX(state, SHOW_CHOICES);
};

export const setupNumberInputNN = (
  state: InterpreterState2,
  command: Command_InputNumber,
  message: Rmmz_Message,
): InterpreterState2 => {
  if (message.isBusy()) {
    return state;
  }
  message.setNumberInput(command.parameters[0], command.parameters[1]);
  return waitXXX(state, command.code);
};
