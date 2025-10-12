/* eslint-disable @functional/no-return-void */

import type {
  ArrayParamTypes,
  PluginParam,
  PluginStructSchemaArray,
  ScalaParam,
  StructArrayRefParam,
  StructRefParam,
} from "./core";
import { isArrayParam, isStructArrayParam, isStructParam } from "./typeTest";

export interface ClassifiedPluginParams {
  structs: PluginParam<StructRefParam>[];
  structArrays: PluginParam<StructArrayRefParam>[];
  scalas: PluginParam<ScalaParam>[];
  scalaArrays: PluginParam<ArrayParamTypes>[];
}

export const classifyPluginParams = (
  structSchema: PluginStructSchemaArray
): ClassifiedPluginParams => {
  const structs: PluginParam<StructRefParam>[] = [];
  const structArrays: PluginParam<StructArrayRefParam>[] = [];
  const scalas: PluginParam<ScalaParam>[] = [];
  const scalaArrays: PluginParam<ArrayParamTypes>[] = [];
  structSchema.params.forEach((p) => {
    if (isStructParam(p.attr)) {
      structs.push({ name: p.name, attr: p.attr });
      return;
    }
    if (isStructArrayParam(p.attr)) {
      structArrays.push({ name: p.name, attr: p.attr });
      return;
    }
    if (isArrayParam(p.attr)) {
      scalaArrays.push({
        name: p.name,
        attr: p.attr as ArrayParamTypes,
      });
      return;
    }
    scalas.push({ name: p.name, attr: p.attr });
  });
  return { structs, structArrays, scalas, scalaArrays };
};
