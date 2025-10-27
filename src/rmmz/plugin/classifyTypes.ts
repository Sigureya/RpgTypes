import type {
  PluginParam,
  StructRefParam,
  StructArrayRefParam,
  ScalaParam,
  ArrayParamTypes,
} from "./core";
import type { PluginStructParamTypeEx } from "./core/pluginSchemaType";

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

export interface ClassifiedPluginParamsEx<T> extends ClassifiedPluginParams {
  structs: Extract<PluginStructParamTypeEx<T>, { attr: StructRefParam }>[];
  structArrays: Extract<
    PluginStructParamTypeEx<T>,
    { attr: StructArrayRefParam }
  >[];
  scalas: Extract<PluginStructParamTypeEx<T>, { attr: ScalaParam }>[];
  scalaArrays: Extract<PluginStructParamTypeEx<T>, { attr: ArrayParamTypes }>[];
}
