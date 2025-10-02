import { withTexts } from "@RpgTypes/features/pluguinJSONSchema/scala/base/basicMetaField";
import type { SelectParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import { withDefault } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/utils";
import type { JSONSchemaType } from "ajv";
import type { JSONSchemaTypeWithRpgParam } from "./x-param/base/x-rpg-param";
import { xparamBaseData } from "./x-param/base/x-rpg-param";

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
