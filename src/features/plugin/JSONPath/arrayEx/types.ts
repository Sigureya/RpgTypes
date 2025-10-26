import type { ArrayParamTypes, PluginParam } from "@RpgTypes/rmmz/plugin";

export interface ArrayPathPair {
  path: string;
  param: PluginParam<ArrayParamTypes>;
}

export interface SSP {
  values: string[];
  valueKind: "string";
  param: PluginParam<Extract<ArrayParamTypes, { default: string[] }>>;
}

export interface NNP {
  values: number[];
  valueKind: "number";
  param: PluginParam<Extract<ArrayParamTypes, { default: number[] }>>;
}
