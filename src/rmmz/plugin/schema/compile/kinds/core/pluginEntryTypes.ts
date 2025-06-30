import type { PrimitiveStructParams } from "./pluginSchemaType";

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
