import type { JSONSchemaType } from "ajv";
import { withTexts } from "../../../rmmz/plugin/schema/compile/kinds/core/paramBase/basicMetaField";
import type { SelectParam } from "../../../rmmz/plugin/schema/compile/kinds/core/primitiveParams";
import { withDefault } from "../../../rmmz/plugin/schema/compile/kinds/utils";
import type { JSONSchemaTypeWithRpgParam } from "./base/x-rpg-param";
import { xparamBaseData } from "./base/x-rpg-param";

export const compileSelectField = (
  data: SelectParam
): JSONSchemaType<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...(data.options ? { enum: data.options.map((o): string => o.value) } : {}),
});

export const compileSelectFieldWithXparam = (
  data: SelectParam
): JSONSchemaTypeWithRpgParam<SelectParam> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...{ enum: data.options.map((o): string => o.value) },
  ...xparamBaseData(data, {
    options: data.options.map((o) => ({
      value: o.value,
      option: o.option,
    })),
  }),
});
