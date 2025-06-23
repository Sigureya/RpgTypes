import type { JSONSchemaType } from "ajv";
import type { ParamBase } from "./kindBase";

export const X_RPG_PARM = "x-rpg-param" as const;
export interface X_Param {
  [X_RPG_PARM]: X_RmmzParamBaee;
}

export type JSONSchemaTypeWithRpgParam<V, X = object> = JSONSchemaType<V> & {
  [X_RPG_PARM]: X_RmmzParamInput<X>;
};

export type ExtractXParam<T extends ParamBase> = Omit<
  T,
  "default" | keyof ParamBase
>;

export interface X_RmmzParamBaee {
  parent?: string | null;
  kind: string;
  data: object;
}

export interface X_RmmzParamInput<T, Kind extends string = string> {
  parent?: string | null;
  kind: Kind;
  data: T;
}

export const xparamBaseData = <T extends ParamBase, D extends ExtractXParam<T>>(
  param: T,
  data: D
) =>
  ({
    [X_RPG_PARM]: {
      kind: param.kind,
      ...(param.parent ? { parent: param.parent } : {}),
      data: data,
    },
  } satisfies X_Param);
