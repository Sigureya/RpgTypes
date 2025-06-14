import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import { makeRmmzParamTextSchema } from "../makeTextField";
import type { NumberArg } from "./types";

export const paramToNumberSchema = (num: NumberArg) => {
  const digit = num.digit ?? 0;
  return {
    title: num.text,
    default: num.default ?? 0,
    type: digit === 0 ? "integer" : "number",
    maximum: num.max,
    minimum: num.min,
    "x-rmmzParam": {
      kind: "number",
      digit: digit,
      parent: num.parent,
    },
  } satisfies JSONSchemaType<number> & Schema;
};

export const rmmzSchemaNumberParam = (): JSONSchemaType<NumberArg> => ({
  type: "object",
  required: ["type", "default"],
  properties: {
    ...makeRmmzParamTextSchema(),
    digit: { type: "integer", minimum: 0, default: 0, nullable: true },
    min: { type: "number", default: Number.MIN_SAFE_INTEGER, nullable: true },
    max: { type: "number", default: Number.MAX_SAFE_INTEGER, nullable: true },
    default: { type: "number", default: 0 },
    type: { type: "string", enum: ["number"] },
  },
});
