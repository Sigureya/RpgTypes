import type { JSONSchemaType } from "ajv";
import { withTexts } from "../../../rmmz/plugin/schema/compile/kinds/core/paramBase/basicMetaField";
import type {
  NumberParam,
  NumberArrayParam,
} from "../../../rmmz/plugin/schema/compile/kinds/core/primitiveParams";
import { withDefault } from "../../../rmmz/plugin/schema/compile/kinds/utils";
import type { JSONSchemaTypeWithRpgParam, X_Param } from "./base/x-rpg-param";
import { xparamBaseData } from "./base/x-rpg-param";

const isIntegerKind = (digit: number | undefined | null) => {
  return digit === undefined || digit === 0;
};
export const compileNumberField = (
  data: NumberParam
): JSONSchemaType<number> => ({
  type: isIntegerKind(data.decimals) ? "integer" : "number",
  ...withDefault(data.default),
  ...withTexts(data),
});
export const compileNumberArrayField = (
  data: NumberArrayParam
): JSONSchemaType<number[]> => ({
  type: "array",
  items: {
    type: isIntegerKind(data.decimals) ? "integer" : "number",
  },
  ...withDefault(data.default),
  ...withTexts(data),
});

const xparamNumber = (data: NumberParam | NumberArrayParam) =>
  xparamBaseData(
    data,
    typeof data.decimals === "number"
      ? ({ decimals: data.decimals } satisfies Partial<NumberParam>)
      : {}
  );
export const compileNumberFieldWithXparam = (
  data: NumberParam
): JSONSchemaTypeWithRpgParam<NumberParam> => ({
  type: isIntegerKind(data.decimals) ? "integer" : "number",
  ...withDefault(data.default),
  ...withTexts(data),
  ...(xparamNumber(data) satisfies X_Param),
});

export const compileNumberArrayFieldWithXParam = (
  data: NumberArrayParam
): JSONSchemaTypeWithRpgParam<NumberArrayParam> => ({
  type: "array",
  items: {
    type: isIntegerKind(data.decimals) ? "integer" : "number",
  },
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamNumber(data),
});
