import type {
  PrimitiveParam,
  StructArrayRefParam,
  StructRefParam,
} from "./core/primitiveParams";

export const isStruct = (param: PrimitiveParam): param is StructRefParam => {
  return param.kind === "struct";
};

export const isStructArray = (
  param: PrimitiveParam
): param is StructArrayRefParam => {
  return param.kind === "struct[]";
};
