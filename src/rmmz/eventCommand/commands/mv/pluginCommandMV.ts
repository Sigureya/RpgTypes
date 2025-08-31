import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand";

export interface Command_PluginCommandMV extends EventCommandLike2<356> {
  parameters: ParamArray_PluginCommandMV;
}

export type ParamArray_PluginCommandMV = [nameAndArg: string];
