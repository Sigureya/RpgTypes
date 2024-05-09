import type { CommandParameters } from "./paramaters";

export type EventCommandTable = {
  [EveneCodeConstant in keyof CommandParameters]: {
    code: EveneCodeConstant;
    indent: number;
    parameters: CommandParameters[EveneCodeConstant];
  };
};
export type EventCommand = EventCommandTable[keyof CommandParameters];
