import { withTexts } from "./core/paramBase/basicMetaField";
import type { X_RPG_PARM, X_RmmzParam } from "./core/paramBase/x-rpg-param";
import { xparamBaseData } from "./core/paramBase/x-rpg-param";
import type { StructRefParam } from "./core/primitiveParams";

export interface JSONSchemaStructRef {
  $ref: string;
  description?: string;
  title?: string;
}

export const makeStructRef = (ref: StructRefParam): JSONSchemaStructRef => ({
  $ref: `#/definitions/${ref.struct}`,
  ...withTexts(ref),
});

type SchemaType = JSONSchemaStructRef & {
  [X_RPG_PARM]: X_RmmzParam<{ struct: string }>;
};

export const makeStructRefWithXParam = (ref: StructRefParam) =>
  ({
    $ref: `#/definitions/${ref.struct}`,
    ...withTexts(ref),
    ...xparamBaseData(ref, {
      struct: ref.struct,
    }),
  } satisfies SchemaType);
