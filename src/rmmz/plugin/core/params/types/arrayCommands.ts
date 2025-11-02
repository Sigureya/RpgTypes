import type { PluginParam } from "./arrayParamItems";
import type { PluginStructParamTypeEx } from "./pluginSchemaType";

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

export interface PluginCommandSchemaArrayEx3<T extends PluginParam>
  extends PluginCommandSchemaArray {
  command: string;
  desc?: string;
  text?: string;
  args: T[];
}
