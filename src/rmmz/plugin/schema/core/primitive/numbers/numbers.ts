import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { RmmzParamCore_Number, X_MetaParam_Number } from "./types";

export const paramToNumberSchema = (num: RmmzParamCore_Number) => {
  const digit = num.digit ?? 0;
  return {
    default: num.default ?? 0,
    type: digit === 0 ? "integer" : "number",
    maximum: num.max,
    minimum: num.min,
    "x-rmmzParam": x_metaParamNumber(num),
  } satisfies JSONSchemaType<number> & Schema;
};
export const x_metaParamNumber = (
  num: RmmzParamCore_Number
): X_MetaParam_Number => ({
  digit: num.digit ?? 0,
});

export const metaSchemaNumberRmmzParam = () =>
  ({
    type: "object",
    additionalProperties: false,
    properties: {
      digit: { type: "integer", minimum: 0, nullable: true },
    },
  } satisfies Schema & JSONSchemaType<Partial<X_MetaParam_Number>>);

export const rmmzSchemaNumberParam = () =>
  ({
    type: "object",
    required: ["type", "default"],
    properties: {
      digit: { type: "integer", minimum: 0, default: 0, nullable: true },
      min: { type: "number", default: Number.MIN_SAFE_INTEGER, nullable: true },
      max: { type: "number", default: Number.MAX_SAFE_INTEGER, nullable: true },
      default: { type: "number", default: 0 },
      type: { type: "string", const: "number" },
    },
  } satisfies Schema & JSONSchemaType<RmmzParamCore_Number>);
