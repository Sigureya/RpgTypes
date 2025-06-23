import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/basciMetaField";
import type { KindOfNumber, KindOfNumberArray } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam, X_Param } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";

const isIntegerKind = (digit: number | undefined | null) => {
  return digit === undefined || digit === 0;
};
export const compileNumberField = (
  data: KindOfNumber
): JSONSchemaType<number> => ({
  type: isIntegerKind(data.digit) ? "integer" : "number",
  ...withDefault(data.default),
  ...withTexts(data),
});
export const compileNumberArrayField = (
  data: KindOfNumberArray
): JSONSchemaType<number[]> => ({
  type: "array",
  items: {
    type: isIntegerKind(data.digit) ? "integer" : "number",
  },
  ...withDefault(data.default),
  ...withTexts(data),
});

const xparamNumber = (data: KindOfNumber | KindOfNumberArray) =>
  xparamBaseData(
    data,
    typeof data.digit === "number" ? { digit: data.digit } : {}
  );
export const compileNumberFieldWithXparam = (
  data: KindOfNumber
): JSONSchemaTypeWithRpgParam<number> => ({
  type: isIntegerKind(data.digit) ? "integer" : "number",
  ...withDefault(data.default),
  ...withTexts(data),
  ...(xparamNumber(data) satisfies X_Param),
});

export const compileNumberArrayFieldWithXParam = (
  data: KindOfNumberArray
): JSONSchemaTypeWithRpgParam<number[]> => ({
  type: "array",
  items: {
    type: isIntegerKind(data.digit) ? "integer" : "number",
  },
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamNumber(data),
});
