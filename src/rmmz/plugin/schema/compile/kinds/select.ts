import type { JSONSchemaType } from "ajv";
import { withTexts } from "./core/paramBase/basicMetaField";
import type { JSONSchemaTypeWithRpgParam } from "./core/paramBase/x-rpg-param";
import { xparamBaseData } from "./core/paramBase/x-rpg-param";
import type { SelectParam } from "./core/primitiveParams";
import { withDefault } from "./utils";

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
