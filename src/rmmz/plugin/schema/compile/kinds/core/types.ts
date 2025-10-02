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

export interface PluginStructSchemaArray<T = PrimitiveParam> {
  struct: string;
  params: PluginParam<T>[];
}

export interface XXX<T> {
  struct: string;
  params: T[];
}

export interface PluginSchemaArray<T = PrimitiveParam> {
  commands: PluginCommandSchemaArray<T>[];
  params: PluginParam<T>[];
  structs: PluginStructSchemaArray<T>[];
}
