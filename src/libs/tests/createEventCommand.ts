import type {
  EventCode,
  EventCommand,
  EventCommandByCode,
  EventCommandTable,
} from "@RpgTypes/rmmz/rpg";

export const createEventCommand = <Code extends EventCode>(
  code: Code,
  params: EventCommandByCode[Code]["parameters"],
  indent = 0
): {
  code: Code;
  parameters: EventCommandByCode[Code]["parameters"];
  indent: number;
} => {
  return { code: code, parameters: params, indent };
};

export const showMessage = (
  command: EventCommandTable["SHOW_MESSAGE"]
): 101 => {
  return command.code;
};

const showChoices = (command: EventCommandTable["SHOW_CHOICES"]): 102 => {
  return command.code;
};

export const eventCommandEx = (command: EventCommand) => {
  switch (command.code) {
    case 101:
      return showMessage(command);
    case 102:
      return showChoices(command);
    default:
      return command.code;
  }
};
