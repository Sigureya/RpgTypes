import type { PrimitiveParam } from "./paramUnion";
import type { PluginParamType2 } from "./pluginSchemaType";

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

export interface PluginSchemaArray<T = PrimitiveParam> {
  commands: PluginCommandSchemaArray<T>[];
  params: PluginParam<T>[];
  structs: PluginStructSchemaArray<PluginParam<T>>[];
}

export type PluginStructSchemaArray3<T> = {
  struct: string;
  params: PluginParamType2<T>[];
};
