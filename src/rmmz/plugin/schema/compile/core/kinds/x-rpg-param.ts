import type { KindBase, KindOfNumber, KindOfNumberArray } from "./kinds";
import type {
  DataKind_RpgUnion,
  DataKind_SystemUnion,
} from "./rpgData/rpgDataTypesNames";

export const X_RPG_PARM = "x-rpg-param" as const;
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

export const xparamBaseData = <T, P extends KindBase>(param: P, data: T) => ({
  kind: param.kind,
  ...(param.parent ? { parent: param.parent } : {}),
  data: data,
});

export const xparamDataId = <
  Kind extends DataKind_RpgUnion | DataKind_SystemUnion
>(
  dataId: KindOfAnyData<Kind>
) => ({});

export const xparamNumber = (data: KindOfNumber | KindOfNumberArray) => ({
  [X_RPG_PARM]: {
    ...xparamBaseData(
      data,
      typeof data.digit === "number" ? { digit: data.digit } : {}
    ),
  } satisfies X_RmmzParamInput<{ digit?: number }>,
});
