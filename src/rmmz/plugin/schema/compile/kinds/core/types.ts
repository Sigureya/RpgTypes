import type { PrimitiveParam } from "./primitiveParams";

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
