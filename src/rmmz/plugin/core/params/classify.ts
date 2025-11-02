/* eslint-disable @functional/no-return-void */

import type {
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
  params: ReadonlyArray<PluginParam>
): ClassifiedPluginParams => {
  return classifyPluginParamsCore(
    params,
    (p): p is PluginParamEx<ScalaParam> => true,
    (p): p is PluginParamEx<ArrayParamTypes> => true
  );
};

export const classifyFileParams = (
  params: ReadonlyArray<PluginParam>
): ClassifiedPluginFileParams => {
  return classifyPluginParamsCore(
    params,
    (p): p is PluginParamEx<FileParam> => p.attr.kind === "file",
    (p): p is PluginParamEx<FileArrayParam> => p.attr.kind === "file[]"
  );
};

export const classifyTextParams = (
  params: ReadonlyArray<PluginParam>
): ClassifiedTextParams => {
  return classifyPluginParamsCore(
    params,
    (p): p is PluginParamEx<PrimitiveStringParam> => hasTextAttr(p),
    (p) => hasTextAttr(p)
  );
};

const classifyPluginParamsCore = <
  T extends ScalaParam,
  A extends ArrayParamTypes
>(
  paramArray: ReadonlyArray<PluginParam>,
  predicate: (param: PluginParam) => param is PluginParamEx<T>,
  arrayPredicate: (
    param: PluginParamEx<ArrayParamTypes>
  ) => param is PluginParamEx<A>
): ClassifiedPluginParamsEx2<T, A> => {
  const structs: PluginParamEx<StructRefParam>[] = [];
  const structArrays: PluginParamEx<StructArrayRefParam>[] = [];
  const scalas: PluginParamEx<T>[] = [];
  const scalaArrays: PluginParamEx<A>[] = [];
  paramArray.forEach((p) => {
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
