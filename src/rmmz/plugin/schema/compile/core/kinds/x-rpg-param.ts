import type {
  KindBase,
  KindOfBoolean,
  KindOfNumber,
  KindOfNumberArray,
} from "./primitiveParams";
import { lookupKind } from "./rpgData/lookup";
import type {
  DataKind_RpgUnion,
  DataKind_SystemUnion,
} from "./rpgData/rpgDataTypesNames";

export const X_RPG_PARM = "x-rpg-param" as const;

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

interface KindOfAnyData<Kind extends DataKind_RpgUnion | DataKind_SystemUnion>
  extends KindBase {
  kind: Kind;
  text?: string;
  desc?: string;
  parent?: string;
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

export const xparamDataId = <
  Kind extends DataKind_RpgUnion | DataKind_SystemUnion
>(
  dataId: KindOfAnyData<Kind>
) => xparamBaseData(dataId, lookupKind(dataId.kind));

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
