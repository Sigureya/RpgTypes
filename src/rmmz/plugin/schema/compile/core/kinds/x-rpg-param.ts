import type {
  KindBase,
  KindOfBoolean,
  KindOfNumber,
  KindOfNumberArray,
} from "./primitiveParams";

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
) => ({
  [X_RPG_PARM]: {
    kind: param.kind,
    ...(param.parent ? { parent: param.parent } : {}),
    data: data,
  },
});

export const xparamNumber = (data: KindOfNumber | KindOfNumberArray) =>
  xparamBaseData(
    data,
    typeof data.digit === "number" ? { digit: data.digit } : {}
  );

export const xparamBoolean = (data: KindOfBoolean) =>
  xparamBaseData(data, {
    ...(typeof data.on === "string" ? { on: data.on } : {}),
    ...(typeof data.off === "string" ? { off: data.off } : {}),
  });
