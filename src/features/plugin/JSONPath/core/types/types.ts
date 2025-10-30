import type { JSONPathType } from "@RpgTypes/libs";
import type { PluginParam } from "@RpgTypes/rmmz/plugin";

export interface ParamJSONPath {
  parent: string;
  path: string;
  param: PluginParam;
}

export interface ParamJSONPathSturct {
  scalas: ParamJSONPath[];
  structs: ParamJSONPath[];
  structArrays: ParamJSONPath[];
  scalaArrays: ParamJSONPath[];
}

export interface ParamJSONPathEx<T> extends ParamJSONPath {
  path: JSONPathType<T>;
  parent: string;
  param: PluginParam;
}

export interface ParamJSONPathSturctEx<T> extends ParamJSONPathSturct {
  scalas: ParamJSONPathEx<T>[];
  structs: ParamJSONPathEx<T>[];
  structArrays: ParamJSONPathEx<T>[];
  scalaArrays: ParamJSONPathEx<T>[];
}
