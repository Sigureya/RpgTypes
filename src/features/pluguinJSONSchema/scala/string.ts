import type { JSONSchemaType } from "ajv";
import { withTexts } from "../../../rmmz/plugin/schema/compile/kinds/core/paramBase/basicMetaField";
import type { JSONSchemaTypeWithRpgParam } from "./base/x-rpg-param";
import { xparamBaseData } from "./base/x-rpg-param";
import type { StringParam } from "../../../rmmz/plugin/schema/compile/kinds/core/primitiveParams";
import { withDefault } from "../../../rmmz/plugin/schema/compile/kinds/utils";

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
