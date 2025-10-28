import type { PluginCommandSchemaArray, PluginParam } from "./arraySchemaTypes";
import type { StructRefParam, StructArrayRefParam } from "./primitiveParams";

export interface SSSS {
  struct: string;
  params: PluginParam<StructRefParam | StructArrayRefParam>[];
}

export type PP = PluginParam<StructRefParam | StructArrayRefParam>;

export interface PluginCommandSchemaArrayGGG<T extends PluginParam>
  extends PluginCommandSchemaArray {
  command: string;
  desc?: string;
  text?: string;
  args: T[];
}
