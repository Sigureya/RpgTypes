import type {
  PluginParam,
  StructRefParam,
  StructArrayRefParam,
  ScalaParam,
  ArrayParamTypes,
} from "./core";
import type { PluginParamType2 } from "./core/pluginSchemaType";

export interface ScalaStruct {
  scalas: PluginParam<ScalaParam>[];
  scalaArrays: PluginParam<ArrayParamTypes>[];
}

export interface ClassifiedPluginParams extends ScalaStruct {
  structs: PluginParam<StructRefParam>[];
  structArrays: PluginParam<StructArrayRefParam>[];
  scalas: PluginParam<ScalaParam>[];
  scalaArrays: PluginParam<ArrayParamTypes>[];
}

export interface ClassifiedPluginParamsEx<T> {
  structs: Extract<PluginParamType2<T>, { attr: StructRefParam }>[];
  structArrays: Extract<PluginParamType2<T>, { attr: StructArrayRefParam }>[];
  scalas: Extract<PluginParamType2<T>, { attr: ScalaParam }>[];
  scalaArrays: Extract<PluginParamType2<T>, { attr: ArrayParamTypes }>[];
}
