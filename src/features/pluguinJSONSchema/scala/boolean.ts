import type { JSONSchemaType } from "ajv";
import { withTexts } from "../../../rmmz/plugin/schema/compile/kinds/core/paramBase/basicMetaField";
import type { JSONSchemaTypeWithRpgParam, X_Param } from "./base/x-rpg-param";
import { xparamBaseData } from "./base/x-rpg-param";
import type { BooleanParam } from "../../../rmmz/plugin/schema/compile/kinds/core/primitiveParams";
import { withDefault } from "../../../rmmz/plugin/schema/compile/kinds/utils";

export const compileBooleanField = (
  data: BooleanParam
): JSONSchemaType<boolean> => ({
  type: "boolean",
  ...withDefault(data.default),
  ...withTexts(data),
});

export const compileBooleanFieldWithXParam = (
  data: BooleanParam
): JSONSchemaTypeWithRpgParam<BooleanParam> => ({
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
