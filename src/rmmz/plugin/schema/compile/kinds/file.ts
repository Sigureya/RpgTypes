import type { JSONSchemaType } from "ajv";
import { withTexts } from "./core/basciMetaField";
import type { KindOfFile } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";
import { withDefault } from "./utils";

export const compileFileField = (data: KindOfFile) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const compileFileFieldWithXparam = (
  data: KindOfFile
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {
    dir: data.dir,
  }),
});
