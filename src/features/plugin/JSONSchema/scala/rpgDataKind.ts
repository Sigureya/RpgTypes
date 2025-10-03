import type { RpgDataIdParam, SystemDataIdParam } from "@RpgTypes/rmmz";
import { lookupKind } from "@RpgTypes/rmmz/plugin/core/rpgData/lookup";
import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./base/basicMetaField";
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
