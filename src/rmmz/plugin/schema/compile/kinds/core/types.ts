import type { PrimitiveParam } from "./primitiveParams";

export interface PluginParam {
  name: string;
  attr: PrimitiveParam;
}

export interface PluginCommandEx {
  command: string;
  desc?: string;
  text?: string;
  args: PluginParam[];
}

export interface PluginStructEx {
  struct: string;
  params: PluginParam[];
}

export interface PluginXXX {
  commands: PluginCommandEx[];
  params: PluginParam[];
  structs: PluginStructEx[];
}
