import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/primitive";
import type { KindOfNumber, KindOfNumberArray } from "./core/primitiveParams";
import type { X_Param } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";

const isIntegerKind = (digit: number | undefined) => {
  return digit === undefined || digit === 0;
};
export const makeNumberField = (data: KindOfNumber) =>
  ({
    type: isIntegerKind(data.digit) ? "integer" : "number",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<number>);
export const makeNumberArrayField = (data: KindOfNumberArray) =>
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
export const makeNumberFieldWithXparam = (data: KindOfNumber) =>
  ({
    type: isIntegerKind(data.digit) ? "integer" : "number",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(xparamNumber(data) satisfies X_Param),
  } satisfies JSONSchemaType<number>);
export const makeNumberArrayFieldWithXParam = (data: KindOfNumberArray) =>
  ({
    type: "array",
    items: {
      type: isIntegerKind(data.digit) ? "integer" : "number",
    },
    ...withDefault(data.default),
    ...withTexts(data),
    ...xparamNumber(data),
  } satisfies JSONSchemaType<number[]>);
