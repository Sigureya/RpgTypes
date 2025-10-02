import { withTexts } from "@RpgTypes/features/pluguinJSONSchema/scala/base/basicMetaField";
import type {
  RpgDataIdParam,
  SystemDataIdParam,
} from "@RpgTypes/rmmz/plugin/schema/compile";
import { lookupKind } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/rpgData/lookup";
import { withDefault } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/utils";
import type { JSONSchemaType } from "ajv";
import type { X_Param } from "./x-param/base/x-rpg-param";
import { xparamBaseData } from "./x-param/base/x-rpg-param";
export const makeRpgIdField = (data: RpgDataIdParam | SystemDataIdParam) =>
  ({
    type: "integer",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<number>);

export const makeRpgIdFieldWithXParam = (
  data: RpgDataIdParam | SystemDataIdParam
) => {
  return {
    type: "integer",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(xparamBaseData(data, lookupKind(data.kind)) satisfies X_Param),
  } satisfies JSONSchemaType<number>;
};
