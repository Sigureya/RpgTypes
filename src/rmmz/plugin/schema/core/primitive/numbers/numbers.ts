import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { RmmzParamCore_Number } from "./types";

export const paramToNumberSchema = (num: RmmzParamCore_Number) => {
  const digit = num.digit ?? 0;
  return {
    default: num.default ?? 0,
    type: digit === 0 ? "integer" : "number",
    maximum: num.max,
    minimum: num.min,
    "x-rmmzParam": {
      kind: "number",
      digit: digit,
    },
  } satisfies JSONSchemaType<number> & Schema;
};

export const rmmzSchemaNumberParam =
  (): JSONSchemaType<RmmzParamCore_Number> => ({
    type: "object",
    required: ["type", "default"],
    properties: {
      digit: { type: "integer", minimum: 0, default: 0, nullable: true },
      min: { type: "number", default: Number.MIN_SAFE_INTEGER, nullable: true },
      max: { type: "number", default: Number.MAX_SAFE_INTEGER, nullable: true },
      default: { type: "number", default: 0 },
      type: { type: "string", const: "number" },
    },
  });
