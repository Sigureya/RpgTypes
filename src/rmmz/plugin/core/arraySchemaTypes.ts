import type { PrimitiveParam } from "./paramUnion";
import type { PluginStructParamTypeEx } from "./pluginSchemaType";

export interface PluginParam<T = PrimitiveParam> {
  name: string;
  attr: T;
}

export interface PluginCommandSchemaArray {
  command: string;
  desc?: string;
  text?: string;
  args: PluginParam[];
}

export interface PluginCommandSchemaArrayEx<ArgStruct> {
  command: string;
  desc?: string;
  text?: string;
  args: PluginStructParamTypeEx<ArgStruct>[];
}

export interface PluginStructSchemaArray {
  struct: string;
  params: PluginParam[];
}

export interface PluginStructSchemaArrayEx<T extends PluginParam> {
  struct: string;
  params: T[];
}

export interface PluginSchemaArrayEx<T> {
  commands: PluginCommandSchemaArrayEx<T>[];
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

export interface GG {
  directs: PluginStructSchemaArray[];
  indirects: PluginStructSchemaArray[];
}
