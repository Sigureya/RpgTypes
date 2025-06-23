import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/kindBase/basciMetaField";
import type { X_Param } from "./core/kindBase/x-rpg-param";
import { xparamBaseData } from "./core/kindBase/x-rpg-param";
import type { RpgDataIdParam, SystemDataIdParam } from "./core/primitiveParams";
import { lookupKind } from "./core/rpgData/lookup";

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
