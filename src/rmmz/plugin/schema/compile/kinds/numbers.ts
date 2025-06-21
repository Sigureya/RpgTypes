import type { JSONSchemaType } from "ajv";
import { withDefault, withTexts } from "./core/primitive";
import type { KindOfNumber, KindOfNumberArray } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam, X_Param } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";

const isIntegerKind = (digit: number | undefined) => {
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

export const rmmzSchemaNumberParam = (): JSONSchemaType<KindOfNumber> => ({
  type: "object",
  required: ["kind", "default"],
  properties: {
    digit: { type: "integer", minimum: 0, default: 0, nullable: true },
    min: { type: "number", nullable: true },
    max: { type: "number", nullable: true },
    default: { type: "number", default: 0 },
    kind: { type: "string", const: "number" },
    desc: { type: "string", nullable: true },
    text: { type: "string", nullable: true },
    parent: { type: "string", nullable: true },
  },
});
