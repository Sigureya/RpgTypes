import { withTexts } from "@RpgTypes/features/pluguinJSONSchema/scala/base/basicMetaField";
import type { ComboParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import { withDefault } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/utils";
import type { JSONSchemaType } from "ajv";
import type { JSONSchemaTypeWithRpgParam } from "./x-param/base/x-rpg-param";
import { xparamBaseData } from "./x-param/base/x-rpg-param";

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
