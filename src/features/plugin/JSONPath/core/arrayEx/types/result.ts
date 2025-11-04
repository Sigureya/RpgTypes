import type {
  ArrayParamTypes,
  PluginParam,
  PluginParamEx,
} from "@RpgTypes/rmmz/plugin";

export interface StringSequenceParamValues {
  values: string[];
  valueKind: "string";
  param: PluginParamEx<Extract<ArrayParamTypes, { default: string[] }>>;
}

export interface NumberSequenceParamValues {
  values: number[];
  valueKind: "number";
  param: PluginParamEx<Extract<ArrayParamTypes, { default: number[] }>>;
}

export interface ScalaPathResult {
  value: number | string | boolean;

  structName: string;
  param: PluginParam;
}
