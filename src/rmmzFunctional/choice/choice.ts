import type { Command_ShowChoiceWhen } from "@RpgTypes/rmmz/eventCommand";

export const commandChoiceWhenNeedsSkip = (
  command: Command_ShowChoiceWhen,
  value: number,
): boolean => {
  return command.parameters[0] !== value;
};
