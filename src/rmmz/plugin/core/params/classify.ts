/* eslint-disable @functional/no-return-void */

import type {
  PluginStructSchemaArray,
  PluginParamEx,
  StructRefParam,
  StructArrayRefParam,
  ScalaParam,
  ArrayParamTypes,
  ClassifiedPluginParams,
  PluginParam,
  FileParam,
  FileArrayParam,
  ClassifiedPluginParamsEx2,
  PrimitiveStringParam,
  ClassifiedPluginFileParams,
  ClassifiedTextParams,
} from "./types";
import {
  isStructParam,
  isStructArrayAttr,
  isArrayAttr,
  hasTextAttr,
} from "./typeTest";

export const classifyPluginParams = (
  structSchema: PluginStructSchemaArray
): ClassifiedPluginParams => {
  return classifyPluginParamsCore(
    structSchema,
    (p): p is PluginParamEx<ScalaParam> => true,
    (p): p is PluginParamEx<ArrayParamTypes> => true
  );
};

export const classifyFileParams = (
  structSchema: PluginStructSchemaArray
): ClassifiedPluginFileParams => {
  return classifyPluginParamsCore(
    structSchema,
    (p): p is PluginParamEx<FileParam> => p.attr.kind === "file",
    (p): p is PluginParamEx<FileArrayParam> => p.attr.kind === "file[]"
  );
};

export const classifyTextParams = (
  structSchema: PluginStructSchemaArray
): ClassifiedTextParams => {
  return classifyPluginParamsCore(
    structSchema,
    (p): p is PluginParamEx<PrimitiveStringParam> => hasTextAttr(p),
    (p) => hasTextAttr(p)
  );
};

const classifyPluginParamsCore = <
  T extends ScalaParam,
  A extends ArrayParamTypes
>(
  structSchema: PluginStructSchemaArray,
  predicate: (param: PluginParam) => param is PluginParamEx<T>,
  arrayPredicate: (
    param: PluginParamEx<ArrayParamTypes>
  ) => param is PluginParamEx<A>
): ClassifiedPluginParamsEx2<T, A> => {
  const structs: PluginParamEx<StructRefParam>[] = [];
  const structArrays: PluginParamEx<StructArrayRefParam>[] = [];
  const scalas: PluginParamEx<T>[] = [];
  const scalaArrays: PluginParamEx<A>[] = [];
  structSchema.params.forEach((p) => {
    if (isStructParam(p.attr)) {
      structs.push({ name: p.name, attr: p.attr });
      return;
    }
    if (isStructArrayAttr(p)) {
      structArrays.push(p);
      return;
    }
    if (isArrayAttr(p)) {
      if (arrayPredicate(p)) {
        scalaArrays.push(p);
        return;
      }
    } else {
      if (predicate(p)) {
        scalas.push(p);
      }
    }
  });
  return { structs, structArrays, scalas, scalaArrays };
};
