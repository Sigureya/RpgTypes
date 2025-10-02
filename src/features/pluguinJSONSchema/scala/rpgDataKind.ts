import type {
  RpgDataIdParam,
  SystemDataIdParam,
} from "@RpgTypes/rmmz/plugin/schema/compile";
import { withTexts } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/paramBase/basicMetaField";
import { lookupKind } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/rpgData/lookup";
import { withDefault } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/utils";
import type { JSONSchemaType } from "ajv";
import type { X_Param } from "./base/x-rpg-param";
import { xparamBaseData } from "./base/x-rpg-param";

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
