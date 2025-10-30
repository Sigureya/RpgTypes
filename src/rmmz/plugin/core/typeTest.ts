import type {
  PrimitiveParam,
  ParamKinds,
  PrimitiveStringParam,
  ScalaParam,
  ArrayParamTypes,
} from "./paramUnion";
import type {
  ArrayParam,
  StructRefParam,
  StructArrayRefParam,
} from "./primitiveParams";

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

export const isScalarParam = <T extends PrimitiveParam>(
  param: T
): param is Extract<T, ScalaParam> => {
  return !isArrayParam(param) && param.kind !== "struct";
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

const TABLE_S: ReadonlyArray<string> = [
  "string",
  "multiline_string",
  "select",
  "combo",
  "any",
];
export const paramHasText = (
  param: PrimitiveParam
): param is PrimitiveStringParam => {
  return TABLE_S.includes(param.kind);
};

const TABLE: Record<string, { type: string }> = {
  string: { type: "string" },
  number: { type: "number" },
  boolean: { type: "boolean" },
  armor: { type: "number" },
  actor: { type: "number" },
  class: { type: "number" },
  enemy: { type: "number" },
  skill: { type: "number" },
  state: { type: "number" },
  item: { type: "number" },
  weapon: { type: "number" },
  common_event: { type: "number" },
  switch: { type: "number" },
  variable: { type: "number" },
  troop: { type: "number" },
  multiline_string: { type: "string" },
  file: { type: "string" },
  combo: { type: "string" },
  select: { type: "string" },
  any: { type: "string" },
  struct: { type: "struct" },
  "actor[]": { type: "number" },
  "class[]": { type: "number" },
  "enemy[]": { type: "number" },
  "skill[]": { type: "number" },
  "item[]": { type: "number" },
  "weapon[]": { type: "number" },
  "armor[]": { type: "number" },
  "state[]": { type: "number" },
  "common_event[]": { type: "number" },
  "troop[]": { type: "number" },
  "switch[]": { type: "number" },
  "variable[]": { type: "number" },
  "number[]": { type: "number" },
} as const satisfies {
  [key in PrimitiveParam["kind"]]?: { type: string };
};

export const isStringValueParam = (
  param: ScalaParam
): param is Extract<PrimitiveParam, { default: string }> => {
  const info = TABLE[param.kind];
  return info.type === "string";
};

export const isNumberValueParam = (
  param: PrimitiveParam
): param is Extract<PrimitiveParam, { default: number }> => {
  return isScalarParam(param) && isNumberValueParamEx(param);
};

export const isNumberValueParamEx = (
  param: ScalaParam
): param is Extract<PrimitiveParam, { default: number }> => {
  const info = TABLE[param.kind];
  return info.type === "number";
};

export const isNumberValueParamGG = (param: PrimitiveParam) => {
  return isArrayParam(param)
    ? isNumberArrayParam(param)
    : isNumberValueParam(param);
};

export const isNumberArrayParam = (
  param: ArrayParam
): param is Extract<ArrayParam, { default: number[] }> => {
  const info = TABLE[param.kind.replace("[]", "") as ParamKinds];
  return info.type === "number";
};

export const isStringArrayParam = (
  param: ArrayParam
): param is Extract<ArrayParamTypes, { default: string[] }> => {
  const info = TABLE[param.kind.replace("[]", "") as ParamKinds];
  return info.type === "string";
};
