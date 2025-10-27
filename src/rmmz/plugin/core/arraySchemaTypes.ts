import type { PrimitiveParam } from "./paramUnion";
import type { PluginStructParamTypeEx } from "./pluginSchemaType";

export interface PluginParam<T = PrimitiveParam> {
  name: string;
  attr: T;
}

export interface PluginCommandSchemaArray<T = PrimitiveParam> {
  command: string;
  desc?: string;
  text?: string;
  args: PluginParam<T>[];
}

export interface PluginStructSchemaArray {
  struct: string;
  params: PluginParam[];
}

export interface PluginSchemaArrayEx<T> {
  commands: PluginCommandSchemaArray<T>[];
  params: PluginParam<T>[];
  structs: PluginStructSchemaArray[];
}

export interface PluginSchemaArray {
  commands: PluginCommandSchemaArray[];
  params: PluginParam[];
  structs: PluginStructSchemaArray[];
}

export type PluginStructSchemaArray3<T> = {
  struct: string;
  params: PluginStructParamTypeEx<T>[];
};
