import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/basciMetaField";
import type { KindOfString } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";

export const compileStringField = (
  data: KindOfString
): JSONSchemaType<string> => ({
  type: "string",
  ...withTexts(data),
  ...withDefault(data.default),
});

export const compileStringFieldWithXparam = (
  data: KindOfString
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withTexts(data),
  ...withDefault(data.default),
  ...xparamBaseData(data, {}),
});
