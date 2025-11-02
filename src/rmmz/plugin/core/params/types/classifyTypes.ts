import type { PluginParamEx } from "./arrayParamItems";
import type { ScalaParam, ArrayParamTypes } from "./paramUnion";
import type { PluginStructParamTypeEx } from "./pluginSchemaType";
import type { StructRefParam, StructArrayRefParam } from "./primitive";

export interface ScalaStruct {
  scalas: PluginParamEx<ScalaParam>[];
  scalaArrays: PluginParamEx<ArrayParamTypes>[];
}

export interface ClassifiedPluginParams extends ScalaStruct {
  structs: PluginParamEx<StructRefParam>[];
  structArrays: PluginParamEx<StructArrayRefParam>[];
  scalas: PluginParamEx<ScalaParam>[];
  scalaArrays: PluginParamEx<ArrayParamTypes>[];
}

export interface ClassifiedPluginParamsEx<T> extends ClassifiedPluginParams {
  structs: Extract<PluginStructParamTypeEx<T>, { attr: StructRefParam }>[];
  structArrays: Extract<
    PluginStructParamTypeEx<T>,
    { attr: StructArrayRefParam }
  >[];
  scalas: Extract<PluginStructParamTypeEx<T>, { attr: ScalaParam }>[];
  scalaArrays: Extract<PluginStructParamTypeEx<T>, { attr: ArrayParamTypes }>[];
}
