import type { JSONPathType } from "@RpgTypes/libs";
import type {
  PluginParamEx,
  ArrayParamTypes,
  PluginStructParamTypeEx,
} from "@RpgTypes/rmmz/plugin";

export interface ArrayPathPair {
  path: string;
  param: PluginParamEx<ArrayParamTypes>;
}

export interface ArrayParamPairEx<T> {
  path: JSONPathType<T>;
  param: PluginStructParamTypeEx<T>;
}
