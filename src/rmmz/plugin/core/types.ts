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

export interface PluginStructSchemaArray<T = PluginParam<PrimitiveParam>> {
  struct: string;
  params: T[];
}

export interface PluginSchemaArrayEx<T> {
  commands: PluginCommandSchemaArray<T>[];
  params: PluginParam<T>[];
  structs: PluginStructSchemaArray<PluginParam<T>>[];
}

export interface PluginSchemaArray {
  commands: PluginCommandSchemaArray[];
  params: PluginParam[];
  structs: PluginStructSchemaArray<PluginParam>[];
}

export type PluginStructSchemaArray3<T> = {
  struct: string;
  params: PluginStructParamTypeEx<T>[];
};
