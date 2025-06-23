import type { JSONSchemaType } from "ajv";
import { withTexts } from "./core/kindBase/basciMetaField";
import type { JSONSchemaTypeWithRpgParam } from "./core/kindBase/x-rpg-param";
import { xparamBaseData } from "./core/kindBase/x-rpg-param";
import type { KindOfCombo } from "./core/primitiveParams";
import { withDefault } from "./utils";

export const compileComboField = (
  data: KindOfCombo
): JSONSchemaType<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
});

export const compileComboFieldWithXparam = (
  data: KindOfCombo
): JSONSchemaTypeWithRpgParam<
  string,
  {
    options: string[];
  }
> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {
    options: [...data.options],
  }),
});
