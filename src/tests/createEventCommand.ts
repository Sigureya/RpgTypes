import type { EventCode, EventCommandByCode, EventCommandTable } from "../";

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
