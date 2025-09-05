import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand";

export interface Command_PluginCommandMV extends EventCommandLike<356> {
  parameters: ParamArray_PluginCommandMV;
}

export type ParamArray_PluginCommandMV = [nameAndArg: string];
