import { withTexts } from "./core/basciMetaField";
import type { KindOfStructRef } from "./core/primitiveParams";
import type { X_RmmzParamInput, X_RPG_PARM } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";
import type { KindOfStruct, KindOfStructArray, StructParam } from "./plugin";

export const isStructDef = (
  value: StructParam
): value is KindOfStruct<object> => {
  return value.kind === "struct_def";
};

export const isStructDefArray = (
  value: StructParam
): value is KindOfStructArray<object> => {
  return value.kind === "struct_def[]";
};

export interface JSONSchemaStructRef {
  $ref: string;
  description?: string;
  title?: string;
}

export const makeStructRef = (ref: KindOfStructRef): JSONSchemaStructRef => ({
  $ref: `#/definitions/${ref.struct}`,
  ...withTexts(ref),
});

type SchemaType = JSONSchemaStructRef & {
  [X_RPG_PARM]: X_RmmzParamInput<{ struct: string }>;
};

export const makeStructRefWithXParam = (ref: KindOfStructRef) =>
  ({
    $ref: `#/definitions/${ref.struct}`,
    ...withTexts(ref),
    ...xparamBaseData(ref, {
      struct: ref.struct,
    }),
  } satisfies SchemaType);
