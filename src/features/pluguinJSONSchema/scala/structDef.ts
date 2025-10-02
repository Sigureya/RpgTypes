import { withTexts } from "../../../rmmz/plugin/schema/compile/kinds/core/paramBase/basicMetaField";
import type { X_RPG_PARM, X_RmmzParam } from "./base/x-rpg-param";
import { xparamBaseData } from "./base/x-rpg-param";
import type { StructRefParam } from "../../../rmmz/plugin/schema/compile/kinds/core/primitiveParams";

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
