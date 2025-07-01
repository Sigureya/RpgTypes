import type { PluginCommandBody } from "./pluginEntriesEx";
import type { PrimitiveStructParams } from "./pluginSchemaType";
import type { PrimitiveParam } from "./primitiveParams";

export interface PluginStructType<T extends object> {
  struct: string;
  params: PrimitiveStructParams<T>;
}

export interface PluginCommandType<T extends object> {
  command: string;
  desc?: string;
  text?: string;
  args: PrimitiveStructParams<T>;
}

export interface PluginParamType {
  plugin: "param";
  params: PrimitiveStructParams<object>;
}

export interface PluginType {
  plugindesc: string;
  commands: PluginCommandType<object>[];
  structs: PluginStructType<object>[];
  params: PrimitiveStructParams<object>;
}
export interface PluginJSON {
  target: string;
  meta: Record<string, string>;
  commands: Record<string, PluginCommandBody>;
  params: Record<string, PrimitiveParam>;
  dependencies?: {
    [key: string]: string;
  };
}
