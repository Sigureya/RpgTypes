import type { PrimitiveParam } from "./paramUnion";

export interface PluginParam {
  name: string;
  attr: PrimitiveParam;
}

export interface PluginParamEx<T extends PrimitiveParam> {
  name: string;
  attr: T;
}
