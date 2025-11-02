import type {
  PrimitiveParam,
  ArrayParam,
  ParamKinds,
  ScalaParam,
  StructRefParam,
  PluginParam,
  PluginParamEx,
  StructArrayRefParam,
  PrimitiveStringParam,
  StringArrayParam,
  ArrayParamTypes,
  RpgVariableParam,
  RpgVariableArrayParam,
  FileParam,
  FileArrayParam,
} from "./types";

export const isArrayParam = <T extends PrimitiveParam>(
  param: T
): param is Extract<T, ArrayParam> => {
  return param.kind.endsWith("[]");
};

export const isArrayAttr = <T extends PrimitiveParam>(
  param: PluginParamEx<T>
): param is PluginParamEx<Extract<T, ArrayParam>> => {
  return isArrayParam(param.attr);
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
  return param.kind !== "struct" && !isArrayParam(param);
};

export const isStructParam = (
  param: PrimitiveParam
): param is StructRefParam => {
  return param.kind === "struct";
};

export const hasStructAttr = (
  param: PluginParam
): param is PluginParamEx<StructRefParam | StructArrayRefParam> => {
  return isStructParam(param.attr) || isStructArrayParam(param.attr);
};

export const isStructArrayParam = (
  param: PrimitiveParam
): param is StructArrayRefParam => {
  return param.kind === "struct[]";
};

export const isStructArrayAttr = (
  param: PluginParam
): param is PluginParamEx<StructArrayRefParam> => {
  return param.attr.kind === "struct[]";
};

export const paramHasText = (
  param: PrimitiveParam
): param is PrimitiveStringParam | StringArrayParam => {
  return TABLE[param.kind]?.hasText === true;
};

export const hasTextAttr = <P extends PrimitiveParam>(
  param: PluginParamEx<P>
): param is PluginParamEx<
  Extract<P, PrimitiveStringParam | StringArrayParam>
> => {
  return TABLE[param.attr.kind]?.hasText === true;
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

export const hasNumberValueParam = (
  param: PrimitiveParam
): param is Extract<PrimitiveParam, { default: number | number[] }> => {
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

export const isNumberAttr = (
  param: PluginParam
): param is PluginParamEx<
  Extract<PrimitiveParam, { default: number[] | number }>
> => {
  return TABLE[param.attr.kind]?.type === "number";
};

export const isStringArrayParam = (
  param: ArrayParam
): param is Extract<ArrayParamTypes, { default: string[] }> => {
  const info = TABLE[param.kind.replace("[]", "") as ParamKinds];
  return info.type === "string";
};

export const isVariableAttr = (
  param: PluginParam
): param is
  | PluginParamEx<RpgVariableParam>
  | PluginParamEx<RpgVariableArrayParam> => {
  return param.attr.kind === "variable" || param.attr.kind === "variable[]";
};

export const isFileAttr = (
  param: PluginParam
): param is PluginParamEx<FileParam | FileArrayParam> => {
  return param.attr.kind === "file" || param.attr.kind === "file[]";
};

interface TableInfo {
  type: string;
  hasText?: boolean;
}

const HAS_TEXT = { type: "string", hasText: true } as const satisfies TableInfo;
const DATA_ID = { type: "number", hasText: false } as const satisfies TableInfo;
const NUMBER_TYPE = {
  type: "number",
  hasText: false,
} as const satisfies TableInfo;

const NUMBER_ARRAY_TYPE = {
  type: "number",
  hasText: false,
} as const satisfies TableInfo;
const TABLE: Record<string, TableInfo> = {
  string: HAS_TEXT,
  number: NUMBER_TYPE,
  boolean: { type: "boolean" },
  armor: DATA_ID,
  actor: DATA_ID,
  class: DATA_ID,
  enemy: DATA_ID,
  skill: DATA_ID,
  state: DATA_ID,
  item: DATA_ID,
  weapon: DATA_ID,
  common_event: DATA_ID,
  switch: DATA_ID,
  variable: DATA_ID,
  troop: DATA_ID,
  multiline_string: HAS_TEXT,
  file: { type: "string", hasText: false },
  "file[]": { type: "string", hasText: false },
  "multiline_string[]": HAS_TEXT,
  "string[]": HAS_TEXT,
  combo: HAS_TEXT,
  select: HAS_TEXT,
  any: HAS_TEXT,
  struct: { type: "struct" },
  "actor[]": NUMBER_ARRAY_TYPE,
  "enemy[]": NUMBER_ARRAY_TYPE,
  "class[]": NUMBER_ARRAY_TYPE,
  "skill[]": NUMBER_ARRAY_TYPE,
  "state[]": NUMBER_ARRAY_TYPE,
  "item[]": NUMBER_ARRAY_TYPE,
  "weapon[]": NUMBER_ARRAY_TYPE,
  "common_event[]": NUMBER_ARRAY_TYPE,
  "troop[]": NUMBER_ARRAY_TYPE,
  "armor[]": NUMBER_ARRAY_TYPE,
  "switch[]": NUMBER_ARRAY_TYPE,
  "variable[]": NUMBER_ARRAY_TYPE,
  "number[]": NUMBER_ARRAY_TYPE,
} as const satisfies {
  [key in PrimitiveParam["kind"]]?: TableInfo;
};
