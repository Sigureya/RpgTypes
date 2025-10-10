import type { PluginParam, PrimitiveParam } from "@RpgTypes/rmmz/plugin";

export interface ParamJSONPath<Param = PluginParam<PrimitiveParam>> {
  parent: string;
  path: string;
  param: Param;
}

export interface ParamJSONPathSturct {
  struct: string;
  params: ParamJSONPath[];
}
