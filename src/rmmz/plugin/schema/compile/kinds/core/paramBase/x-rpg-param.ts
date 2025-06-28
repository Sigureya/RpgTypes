import type { JSONSchemaType } from "ajv";
import type { ParamBase } from "./paramBase";

// JSONSchemaの拡張データ型。
// 拡張プロパティはx-**なので、型名も同様にX_**とする

export const X_RPG_PARM = "x-rpg-param" as const;
export interface X_Param {
  [X_RPG_PARM]: X_RmmzParamBase;
}

export type JSONSchemaTypeWithRpgParam<
  V,
  X extends object = object
> = JSONSchemaType<V> & {
  [X_RPG_PARM]: X_RmmzParam<X>;
};

type ExtractParamData<T extends ParamBase> = Omit<
  T,
  "default" | keyof ParamBase
>;

export type X_ParamData<T extends ParamBase> = X_RmmzParam<
  ExtractParamData<T>,
  T extends { kind: infer K } ? K : string
>;

export interface X_RmmzParamBase {
  kind: string;
  parent?: string | null;
  data: object;
}

export interface X_RmmzParam<T, Kind extends string = string> {
  kind: Kind;
  parent?: string | null;
  data: T;
}

export const xparamBaseData = <
  T extends ParamBase,
  D extends ExtractParamData<T>
>(
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
