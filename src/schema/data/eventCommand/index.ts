import { CommandParameters } from "./table";

export * from "./table";
export * from "./paramaters";
export * from "./codes";

export type EventCommandTable = {
  [EveneCodeConstant in keyof CommandParameters]: {
    code: EveneCodeConstant;
    indent: number;
    parameters: CommandParameters[EveneCodeConstant];
  };
};
export type EventCommand = EventCommandTable[keyof CommandParameters];
