import type { JSONPathType } from "@RpgTypes/libs";
import type {
  ArrayParamTypes,
  PluginParam,
  PluginStructParamTypeEx,
  ScalaParam,
} from "@RpgTypes/rmmz/plugin";

export interface ArrayPathPair {
  path: string;
  param: PluginParam<ArrayParamTypes>;
}

export interface ArrayParamPairEx<T> {
  path: JSONPathType<T>;
  param: PluginStructParamTypeEx<T>;
}

export interface StringSequenceParamValues {
  values: string[];
  valueKind: "string";
  param: PluginParam<Extract<ArrayParamTypes, { default: string[] }>>;
}

export interface NumberSequenceParamValues {
  values: number[];
  valueKind: "number";
  param: PluginParam<Extract<ArrayParamTypes, { default: number[] }>>;
}

export interface ScalaPathResult {
  value: number | string | boolean;
  param: PluginParam<ScalaParam>;
}
