import type { Schema } from "jsonschema";
import type { RmmzParamCore_Option, RmmzParamCore_Select } from "./types";

export const makeSelectSchema = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: [
      "type",
      "default",
      "options",
    ] satisfies (keyof RmmzParamCore_Select<number | string>)[],
    properties: {
      type: { type: "string", const: "select" },
      default: {},
      options: {},
    },
    allOf: [
      {
        if: {
          properties: {
            default: { type: "string" },
          },
        },
        then: {
          properties: {
            type: { type: "string", const: "select" },
            default: { type: "string" },
            options: makeOptionSchema("string"),
          },
        },
      },
      {
        if: {
          properties: {
            default: { type: "number" },
          },
        },
        then: {
          properties: {
            default: { type: "number" },
            options: makeOptionSchema("number"),
          },
        },
      },
    ],
  } as Schema);

const makeOptionSchema = (valueType: "string" | "number") =>
  ({
    type: "array",
    items: {
      additionalProperties: false,
      type: "object",
      required: ["value", "option"] satisfies (keyof RmmzParamCore_Option<
        number | string
      >)[],
      properties: {
        option: { type: "string" },
        value: { type: valueType },
      },
    },
  } satisfies Schema);
