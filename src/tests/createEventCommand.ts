import type { EventCode, EventCommandTable } from "../";

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
