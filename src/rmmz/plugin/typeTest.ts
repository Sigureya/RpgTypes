import type { ParamKinds, PrimitiveParam, PrimitiveStringParam } from "./core";
import type {
  ArrayParam,
  StructArrayRefParam,
  StructRefParam,
} from "./core/primitiveParams";

export const isArrayParam = <T extends PrimitiveParam>(
  param: T
): param is Extract<T, ArrayParam> => {
  return param.kind.endsWith("[]");
};

export const isArrayParamEx = <T extends PrimitiveParam, K extends ParamKinds>(
  param: T,
  kind: K
): param is Extract<T, ArrayParam & { kind: `${K}[]` }> => {
  if (isArrayParam(param)) {
    return param.kind === `${kind}[]`;
  }
  return false;
};

export const isStructParam = (
  param: PrimitiveParam
): param is StructRefParam => {
  return param.kind === "struct";
};

export const isStructArrayParam = (
  param: PrimitiveParam
): param is StructArrayRefParam => {
  return param.kind === "struct[]";
};

const TABLE: ReadonlyArray<string> = ["string", "multiline_string", "select"];
export const paramHasText = (
  param: PrimitiveParam
): param is PrimitiveStringParam => {
  return TABLE.includes(param.kind);
};
