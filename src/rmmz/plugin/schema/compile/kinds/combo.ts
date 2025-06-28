import type { JSONSchemaType } from "ajv";
import { withTexts } from "./core/paramBase/basicMetaField";
import type { JSONSchemaTypeWithRpgParam } from "./core/paramBase/x-rpg-param";
import { xparamBaseData } from "./core/paramBase/x-rpg-param";
import type { ComboParam } from "./core/primitiveParams";
import { withDefault } from "./utils";

export const compileComboField = (
  data: ComboParam
): JSONSchemaType<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
});

export const compileComboFieldWithXparam = (
  data: ComboParam
): JSONSchemaTypeWithRpgParam<ComboParam> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {
    options: [...data.options],
  }),
});
