import type { PluginParam, PluginParamEx } from "./arraySchemaTypes";
import type { StructRefParam, StructArrayRefParam } from "./primitiveParams";
import { isStructParam, isStructArrayParam } from "./typeTest";

export const isStructAttr = (
  param: PluginParam
): param is PluginParamEx<StructRefParam | StructArrayRefParam> => {
  return isStructParam(param.attr) || isStructArrayParam(param.attr);
};
