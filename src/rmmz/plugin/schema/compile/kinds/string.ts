import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/kindBase/basciMetaField";
import type { JSONSchemaTypeWithRpgParam } from "./core/kindBase/x-rpg-param";
import { xparamBaseData } from "./core/kindBase/x-rpg-param";
import type { StringParam } from "./core/primitiveParams";

export const compileStringField = (
  data: StringParam
): JSONSchemaType<string> => ({
  type: "string",
  ...withTexts(data),
  ...withDefault(data.default),
});

export const compileStringFieldWithXparam = (
  data: StringParam
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withTexts(data),
  ...withDefault(data.default),
  ...xparamBaseData(data, {}),
});
