import type { PluginParam, PrimitiveParam } from "@RpgTypes/rmmz/plugin";
import type { JSONPathType } from "./jsonPathString";

export interface ParamJSONPath<Param = PluginParam<PrimitiveParam>> {
  parent: string;
  path: string;
  param: Param;
}

export interface ParamJSONPathSturct {
  struct: string;
  scala: ParamJSONPath[];
  params: ParamJSONPath[];
}

export interface ParamJSONPath2<T> {
  path: JSONPathType<T>;
  parent: string;
  param: PluginParam<PrimitiveParam>;
}

export interface ParamJSONPathSturct2<T> {
  struct: string;
  scala: ParamJSONPath2<T>[];
  structs: ParamJSONPath2<T>[];
  structArrays: ParamJSONPath2<T>[];
  sclaArrays: ParamJSONPath2<T>[];
}
