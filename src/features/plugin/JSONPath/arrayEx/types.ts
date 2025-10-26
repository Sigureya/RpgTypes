import type {
  ArrayParamTypes,
  PluginParam,
  PluginParamType2,
} from "@RpgTypes/rmmz/plugin";
import type { JSONPathType } from "../types";

export interface ArrayPathPair {
  path: string;
  param: PluginParam<ArrayParamTypes>;
}

export interface ArrayParamPairEx<T> {
  path: JSONPathType<T>;
  param: PluginParamType2<T>;
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
