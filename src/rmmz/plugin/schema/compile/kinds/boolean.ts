import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/kindBase/basciMetaField";
import type {
  JSONSchemaTypeWithRpgParam,
  X_Param,
} from "./core/kindBase/x-rpg-param";
import { xparamBaseData } from "./core/kindBase/x-rpg-param";
import type { BooleanParam } from "./core/primitiveParams";

export const compileBooleanField = (
  data: BooleanParam
): JSONSchemaType<boolean> => ({
  type: "boolean",
  ...withDefault(data.default),
  ...withTexts(data),
});

export const compileBooleanFieldWithXParam = (
  data: BooleanParam
): JSONSchemaTypeWithRpgParam<
  boolean,
  {
    on?: string;
    off?: string;
  }
> => ({
  type: "boolean",
  ...withDefault(data.default),
  ...withTexts(data),
  ...(xparamBoolean(data) satisfies X_Param),
});

const xparamBoolean = (data: BooleanParam) =>
  xparamBaseData(data, {
    ...(typeof data.on === "string" ? { on: data.on } : {}),
    ...(typeof data.off === "string" ? { off: data.off } : {}),
  });
