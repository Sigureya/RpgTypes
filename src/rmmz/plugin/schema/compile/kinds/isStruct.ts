import type {
  PrimitiveParam,
  StructArrayRefParam,
  StructRefParam,
} from "./core/primitiveParams";

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
