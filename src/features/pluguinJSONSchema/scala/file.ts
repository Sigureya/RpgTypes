import type { FileParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./base/basicMetaField";
import type { JSONSchemaTypeWithRpgParam } from "./x-param/base/x-rpg-param";
import { xparamBaseData } from "./x-param/base/x-rpg-param";

export const compileFileField = (data: FileParam) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const compileFileFieldWithXparam = (
  data: FileParam
): JSONSchemaTypeWithRpgParam<FileParam> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {
    dir: data.dir,
  }),
});
