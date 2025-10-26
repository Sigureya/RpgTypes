import type {
  PrimitiveParam,
  ParamKinds,
  PrimitiveStringParam,
  ScalaParam,
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

const TABLE = {
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
} as const satisfies {
  [key in ParamKinds]?: { type: string };
};

export const isStringValueParam = (
  param: ScalaParam
): param is Extract<PrimitiveParam, { default: string }> => {
  const info = TABLE[param.kind];
  return info.type === "string";
};
