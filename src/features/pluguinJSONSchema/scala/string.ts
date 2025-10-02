import type { JSONSchemaType } from "ajv";
import type { StringParam } from "../../../rmmz/plugin/schema/compile/kinds/core/primitiveParams";
import { withDefault } from "../../../rmmz/plugin/schema/compile/kinds/utils";
import { withTexts } from "./base/basicMetaField";
import type { JSONSchemaTypeWithRpgParam } from "./x-param/base/x-rpg-param";
import { xparamBaseData } from "./x-param/base/x-rpg-param";

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
