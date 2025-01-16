import type { EventCode, EventCommandTable, EventCommandTypes } from "../";

export const createEventCommand = <Code extends EventCode>(
  code: Code,
  params: EventCommandTable[Code]["parameters"],
  indent = 0
): {
  code: Code;
  parameters: EventCommandTable[Code]["parameters"];
  indent: number;
} => {
  return { code: code, parameters: params, indent };
};

export const showMessage = (
  command: EventCommandTypes["SHOW_MESSAGE"]
): 101 => {
  return command.code;
};
