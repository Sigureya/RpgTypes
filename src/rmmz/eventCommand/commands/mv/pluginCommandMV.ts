import type {
  EventCommandLike,
  PLUGIN_COMMAND_MV,
} from "@RpgTypes/libs/eventCommand";

export interface Command_PluginCommandMV extends EventCommandLike<
  typeof PLUGIN_COMMAND_MV
> {
  parameters: ParamArray_PluginCommandMV;
}

export type ParamArray_PluginCommandMV = [nameAndArg: string];
