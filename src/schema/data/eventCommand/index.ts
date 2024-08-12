import type { CommandParameters } from "./table";
import type * as $ from "./codes";

export * from "./table";
export * from "./paramaters";
export * from "./codes";

export type EventCommandTypes = {
  [EveneCodeConstant in keyof CommandParameters]: {
    code: (typeof $)[EveneCodeConstant];
    indent: number;
    parameters: CommandParameters[EveneCodeConstant];
  };
};

export type EventCommand = EventCommandTypes[keyof EventCommandTypes];

export type EventCode = EventCommand["code"];

export type EventCommandFind<Code extends EventCode> = Extract<
  EventCommand,
  { code: Code }
>;

export type EventCommandTable = {
  [Key in EventCode]: EventCommandFind<Key>;
};
