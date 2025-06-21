import type { JSONSchemaType } from "ajv";
import { withTexts } from "./core/primitive";
import type { KindOfSelect } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";
import { withDefault } from "./utils";

export const compileSelectField = (data: KindOfSelect) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(data.options ? { enum: data.options.map((o): string => o.value) } : {}),
  } satisfies JSONSchemaType<string>);

export const compileSelectFieldWithXparam = (
  data: KindOfSelect
): JSONSchemaTypeWithRpgParam<string> => ({
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
