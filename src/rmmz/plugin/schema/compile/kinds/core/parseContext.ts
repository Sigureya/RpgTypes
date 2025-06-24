import type { PluginCommandType, PluginStructType } from "./pluginEnties";
import type { PrimitiveParams } from "./pluginSchemaType";

export type ContextUnion =
  | Context_PluginCommand
  | Context_PluginParam
  | Context_PluginStruct;

export interface Context_PluginCommand extends PluginCommandType<object> {
  context: "command";
}

export interface Context_PluginParam {
  context: "param";
  params: PrimitiveParams<object>;
}

export interface Context_PluginStruct extends PluginStructType<object> {
  context: "struct";
}
