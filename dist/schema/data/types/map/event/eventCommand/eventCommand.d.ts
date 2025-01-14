import type { CommandParameters } from "./paramTable";
import type * as $ from "./codes";
export * from "./paramTable";
export * from "./paramaters";
export * from "./codes";
type EventCodeTable = typeof $;
export type EventCode = EventCodeTable[keyof EventCodeTable];
export type EventCommandTypes = {
    [CommandName in keyof EventCodeTable]: {
        code: EventCodeTable[CommandName];
        indent: number;
        parameters: CommandParameters[CommandName];
    };
};
export type EventCommand = EventCommandTypes[keyof EventCommandTypes];
export type EventCommandFromCode<Code extends EventCode> = Extract<EventCommand, {
    code: Code;
}>;
export type EventCommandTable = {
    [Key in EventCode]: EventCommandFromCode<Key>;
};
