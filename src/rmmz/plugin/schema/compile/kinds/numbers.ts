import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/primitive";
import type { KindOfNumber, KindOfNumberArray } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam, X_Param } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";

const isIntegerKind = (digit: number | undefined) => {
  return digit === undefined || digit === 0;
};
export const compileNumberField = (data: KindOfNumber) =>
  ({
    type: isIntegerKind(data.digit) ? "integer" : "number",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<number>);
export const compileNumberArrayField = (data: KindOfNumberArray) =>
  ({
    type: "array",
    items: {
      type: isIntegerKind(data.digit) ? "integer" : "number",
    },
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<number[]>);

const xparamNumber = (data: KindOfNumber | KindOfNumberArray) =>
  xparamBaseData(
    data,
    typeof data.digit === "number" ? { digit: data.digit } : {}
  );
export const compileNumberFieldWithXparam = (data: KindOfNumber) =>
  ({
    type: isIntegerKind(data.digit) ? "integer" : "number",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(xparamNumber(data) satisfies X_Param),
  } satisfies JSONSchemaTypeWithRpgParam<number>);

export const compileNumberArrayFieldWithXParam = (data: KindOfNumberArray) =>
  ({
    type: "array",
    items: {
      type: isIntegerKind(data.digit) ? "integer" : "number",
    },
    ...withDefault(data.default),
    ...withTexts(data),
    ...xparamNumber(data),
  } satisfies JSONSchemaTypeWithRpgParam<number[]>);
