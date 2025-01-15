import type { CommandParameters } from "./paramTable";
import type * as EventCommandCodes from "./eventCommandCodes";
import type { CommandTemplate } from "./types/template";
import type { ValueOf } from "./paramaters";

export * from "./paramTable";
export * from "./paramaters";
export * from "./eventCommandCodes";

type XXXX = CommandTemplate<
  typeof EventCommandCodes,
  {
    indent: number;
    parameters: unknown[];
    code: ValueOf<typeof EventCommandCodes>;
  },
  "code",
  "parameters",
  CommandParameters
>;

type EventCodeTable = typeof EventCommandCodes;
export type EventCode = EventCodeTable[keyof EventCodeTable];

export type EventCommandTypes = {
  [CommandName in keyof EventCodeTable]: {
    code: EventCodeTable[CommandName];
    indent: number;
    parameters: CommandParameters[CommandName];
  };
};

export type EventCommand = EventCommandTypes[keyof EventCommandTypes];

export type EventCommandFromCode<Code extends EventCode> = Extract<
  EventCommand,
  { code: Code }
>;

export type EventCommandTable = {
  [Key in EventCode]: EventCommandFromCode<Key>;
};
