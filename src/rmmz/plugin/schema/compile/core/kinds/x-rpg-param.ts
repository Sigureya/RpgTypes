import type { KindBase } from "./primitiveParams";

export const X_RPG_PARM = "x-rpg-param" as const;
export interface X_Param {
  "x-rpg-param": X_RmmzParamBaee;
}

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

export const xparamBaseData = <T extends object, P extends KindBase>(
  param: P,
  data: T
) =>
  ({
    [X_RPG_PARM]: {
      kind: param.kind,
      ...(param.parent ? { parent: param.parent } : {}),
      data: data,
    },
  } satisfies X_Param);
