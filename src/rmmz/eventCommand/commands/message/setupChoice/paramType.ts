import type { Command_ShowChoices } from "./body/types";

export const choiceCancelType = (command: Command_ShowChoices): number => {
  const choicse = command.parameters[0];
  const cancelType = command.parameters[1];
  return cancelType < choicse.length ? cancelType : -2;
};

export const choiceDefaultType = (command: Command_ShowChoices): number => {
  return command.parameters.length > 2 ? command.parameters[2] : 0;
};

export const choicePositionType = (command: Command_ShowChoices): number => {
  return command.parameters.length > 3 ? command.parameters[3] : 2;
};

export const choiceBackground = (command: Command_ShowChoices): number => {
  return command.parameters.length > 4 ? command.parameters[4] : 0;
};
