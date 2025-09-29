import type { PrimitiveParam } from "./primitiveParams";

export interface PluginParam {
  name: string;
  attr: PrimitiveParam;
}

export interface PluginCommandSchemaArray {
  command: string;
  desc?: string;
  text?: string;
  args: PluginParam[];
}

export interface PluginStructSchemaArray {
  struct: string;
  params: PluginParam[];
}

export interface PluginSchemaArray {
  commands: PluginCommandSchemaArray[];
  params: PluginParam[];
  structs: PluginStructSchemaArray[];
}
