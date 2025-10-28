import type { PluginParam } from "./arraySchemaTypes";
import type { StructRefParam, StructArrayRefParam } from "./primitiveParams";

export interface SSSS {
  struct: string;
  params: PluginParam<StructRefParam | StructArrayRefParam>[];
}
