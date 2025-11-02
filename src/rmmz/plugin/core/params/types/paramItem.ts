import type { PrimitiveParam } from "./paramUnion";
import type { StructArrayRefParam, StructRefParam } from "./primitive";

export interface PluginParam {
  name: string;
  attr: PrimitiveParam;
}

export interface PluginParamEx<T extends PrimitiveParam> {
  name: string;
  attr: T;
}

export type StructPluginParam = PluginParamEx<
  StructRefParam | StructArrayRefParam
>;
