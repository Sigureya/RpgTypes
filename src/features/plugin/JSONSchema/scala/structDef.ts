import type { StructRefParam } from "@RpgTypes/rmmz/plugin";
import { withTexts } from "./base/basicMetaField";
import type { X_RPG_PARM, X_RmmzParam } from "./x-param/base/x-rpg-param";
import { xparamBaseData } from "./x-param/base/x-rpg-param";

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
