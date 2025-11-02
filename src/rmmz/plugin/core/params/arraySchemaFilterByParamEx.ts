import { filterPluginSchemaByParam as buildFilteredSchema } from "./arraySchemaFilterByParam";
import type {
  PluginSchemaArray,
  PluginTextSchema,
  PrimitiveStringParam,
  StringArrayParam,
  PluginParamEx,
  PrimitiveParam,
  PluginVariableSchema,
  RpgVariableParam,
  RpgVariableArrayParam,
  PluginFileParamsSchema,
  FileParam,
  FileArrayParam,
} from "./types";
import {
  hasTextAttr,
  isNumberAttr,
  isVariableAttr,
  isFileAttr,
} from "./typeTest";

export const filterPluginSchemaByStringParam = (
  schema: PluginSchemaArray
): PluginTextSchema => {
  type Type = PrimitiveStringParam | StringArrayParam;
  return buildFilteredSchema<PluginParamEx<Type>>(schema, hasTextAttr);
};

export const filterPluginSchemaByNumberParam = (schema: PluginSchemaArray) => {
  type Type = Extract<PrimitiveParam, { default: number[] | number }>;
  return buildFilteredSchema<PluginParamEx<Type>>(schema, isNumberAttr);
};

export const filterPluginSchemaByVariableParam = (
  schema: PluginSchemaArray
): PluginVariableSchema => {
  type Type = RpgVariableParam | RpgVariableArrayParam;
  return buildFilteredSchema<PluginParamEx<Type>>(schema, isVariableAttr);
};

export const filterPluginSchemaByFileParam = (
  schema: PluginSchemaArray
): PluginFileParamsSchema => {
  type Type = FileParam | FileArrayParam;
  return buildFilteredSchema<PluginParamEx<Type>>(schema, isFileAttr);
};
