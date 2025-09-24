import type {
  ArrayParam,
  ParamKinds,
  PrimitiveParam,
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
