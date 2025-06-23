import type { JSONSchemaType } from "ajv";
import { withTexts } from "./core/kindBase/basciMetaField";
import type { JSONSchemaTypeWithRpgParam } from "./core/kindBase/x-rpg-param";
import { xparamBaseData } from "./core/kindBase/x-rpg-param";
import type { FileParam } from "./core/primitiveParams";
import { withDefault } from "./utils";

export const compileFileField = (data: FileParam) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const compileFileFieldWithXparam = (
  data: FileParam
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {
    dir: data.dir,
  }),
});
