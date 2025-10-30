import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginParamEx,
} from "./arraySchemaTypes";
import type { StructRefParam, StructArrayRefParam } from "./primitiveParams";

export interface SSSS {
  struct: string;
  params: PluginParamEx<StructRefParam | StructArrayRefParam>[];
}

export type PP = PluginParamEx<StructRefParam | StructArrayRefParam>;

export interface PluginCommandSchemaArrayGGG<T extends PluginParam>
  extends PluginCommandSchemaArray {
  command: string;
  desc?: string;
  text?: string;
  args: T[];
}
