import type {
  FileParam,
  PrimitiveParam,
  PrimitiveStringParam,
  ScalaParam,
  StringParam,
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray,
} from "./core";
import { isNumberValueParam, isScalarParam } from "./core";

const xxx = (schema: PluginSchemaArray) => {
  return {
    commands: schema.params.filter(attrXX),
  };
};

const attrXX = (
  param: PluginParam
): param is PluginParam<PrimitiveStringParam | FileParam> => {
  const attr: PrimitiveParam = param.attr;
  return isScalarParam(attr) && isNumberValueParam(attr);
};

const sss = (struct: PluginStructSchemaArray) => {
  return {
    struct: struct.struct,
    params: struct.params.filter(attrXX),
  } satisfies PluginStructSchemaArray;
};
