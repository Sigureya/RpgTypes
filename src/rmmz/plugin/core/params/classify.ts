/* eslint-disable @functional/no-return-void */

import type {
  PluginStructSchemaArray,
  PluginParamEx,
  StructRefParam,
  StructArrayRefParam,
  ScalaParam,
  ArrayParamTypes,
  ClassifiedPluginParams,
} from "./types";
import { isStructParam, isStructArrayParam, isArrayParam } from "./typeTest";

export const classifyPluginParams = (
  structSchema: PluginStructSchemaArray
): ClassifiedPluginParams => {
  const structs: PluginParamEx<StructRefParam>[] = [];
  const structArrays: PluginParamEx<StructArrayRefParam>[] = [];
  const scalas: PluginParamEx<ScalaParam>[] = [];
  const scalaArrays: PluginParamEx<ArrayParamTypes>[] = [];
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
        attr: p.attr,
      });
      return;
    }
    scalas.push({ name: p.name, attr: p.attr });
  });
  return { structs, structArrays, scalas, scalaArrays };
};
