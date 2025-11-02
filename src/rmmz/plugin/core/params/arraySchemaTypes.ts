import type { PrimitiveParam } from "./paramUnion";
import type { PluginStructParamTypeEx } from "./pluginSchemaType";

export interface PluginParam {
  name: string;
  attr: PrimitiveParam;
}

export interface PluginParamEx<T extends PrimitiveParam> {
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

export interface PluginStructSchemaArrayFilterd<T extends PluginParam> {
  struct: string;
  params: T[];
}

export interface PluginSchemaArray {
  commands: PluginCommandSchemaArray[];
  params: PluginParam[];
  structs: PluginStructSchemaArray[];
}

export type PluginStructSchemaArrayEx<T> = {
  struct: string;
  params: PluginStructParamTypeEx<T>[];
};
