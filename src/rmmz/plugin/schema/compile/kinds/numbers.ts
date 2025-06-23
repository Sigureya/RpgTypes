import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/kindBase/basciMetaField";
import type {
  JSONSchemaTypeWithRpgParam,
  X_Param,
} from "./core/kindBase/x-rpg-param";
import { xparamBaseData } from "./core/kindBase/x-rpg-param";
import type { NumberParam, NumberArrayParam } from "./core/primitiveParams";

const isIntegerKind = (digit: number | undefined | null) => {
  return digit === undefined || digit === 0;
};
export const compileNumberField = (
  data: NumberParam
): JSONSchemaType<number> => ({
  type: isIntegerKind(data.digit) ? "integer" : "number",
  ...withDefault(data.default),
  ...withTexts(data),
});
export const compileNumberArrayField = (
  data: NumberArrayParam
): JSONSchemaType<number[]> => ({
  type: "array",
  items: {
    type: isIntegerKind(data.digit) ? "integer" : "number",
  },
  ...withDefault(data.default),
  ...withTexts(data),
});

const xparamNumber = (data: NumberParam | NumberArrayParam) =>
  xparamBaseData(
    data,
    typeof data.digit === "number" ? { digit: data.digit } : {}
  );
export const compileNumberFieldWithXparam = (
  data: NumberParam
): JSONSchemaTypeWithRpgParam<number> => ({
  type: isIntegerKind(data.digit) ? "integer" : "number",
  ...withDefault(data.default),
  ...withTexts(data),
  ...(xparamNumber(data) satisfies X_Param),
});

export const compileNumberArrayFieldWithXParam = (
  data: NumberArrayParam
): JSONSchemaTypeWithRpgParam<number[]> => ({
  type: "array",
  items: {
    type: isIntegerKind(data.digit) ? "integer" : "number",
  },
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamNumber(data),
});
