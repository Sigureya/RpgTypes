import type { JSONSchemaType } from "ajv";
import { withTexts } from "./core/primitive";
import type { KindOfCombo } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";
import { withDefault } from "./utils";

export const compileComboField = (data: KindOfCombo) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const compileComboFieldWithXparam = (
  data: KindOfCombo
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {
    options: [...data.options],
  }),
});
