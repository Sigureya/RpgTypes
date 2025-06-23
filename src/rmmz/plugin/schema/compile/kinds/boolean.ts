import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/primitive";
import type { KindOfBoolean } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam, X_Param } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";

export const compileBooleanField = (
  data: KindOfBoolean
): JSONSchemaType<boolean> => ({
  type: "boolean",
  ...withDefault(data.default),
  ...withTexts(data),
});

export const compileBooleanFieldWithXParam = (
  data: KindOfBoolean
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

const xparamBoolean = (data: KindOfBoolean) =>
  xparamBaseData(data, {
    ...(typeof data.on === "string" ? { on: data.on } : {}),
    ...(typeof data.off === "string" ? { off: data.off } : {}),
  });
