import type {
  PluginParam,
  PrimitiveParam,
  ArrayParam,
  StructParam,
} from "./core";
import { isArrayParam, isStructParam } from "./typeTest";

export const isArrayParamEx2 = (
  param: PluginParam
): param is PluginParam<Extract<PrimitiveParam, ArrayParam>> => {
  return isArrayParam(param.attr);
};

export const isStructParamEx2 = (
  param: PluginParam
): param is PluginParam<Extract<PrimitiveParam, StructParam>> => {
  return isStructParam(param.attr);
};
