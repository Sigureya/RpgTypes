import type { JSONSchemaType } from "ajv";
import { withTexts } from "./core/paramBase/basicMetaField";
import type { JSONSchemaTypeWithRpgParam } from "./core/paramBase/x-rpg-param";
import { xparamBaseData } from "./core/paramBase/x-rpg-param";
import type { StringParam } from "./core/primitiveParams";
import { withDefault } from "./utils";

export const compileStringField = (
  data: StringParam
): JSONSchemaType<string> => ({
  type: "string",
  ...withTexts(data),
  ...withDefault(data.default),
});

export const compileStringFieldWithXparam = (
  data: StringParam
): JSONSchemaTypeWithRpgParam<StringParam> => ({
  type: "string",
  ...withTexts(data),
  ...withDefault(data.default),
  ...xparamBaseData(data, {}),
});
