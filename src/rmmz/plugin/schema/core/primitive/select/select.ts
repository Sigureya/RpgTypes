import type { JSONSchemaType, JSONType } from "ajv";
import type { Schema } from "jsonschema";
import type { RmmzParamCore_Option, RmmzParamCore_Select } from "./types";

export const makeSelectSchema = () =>
  ({
    type: "object",
    required: ["type", "default", "options"],
    allOf: [
      {
        if: {
          properties: {
            default: { type: "string" },
          },
        },
        then: {
          properties: {
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
  } as Schema & JSONSchemaType<RmmzParamCore_Select<string | number>>);

const makeOptionSchema = <T extends JSONType>(valueType: T) =>
  ({
    type: "array",
    items: {
      additionalProperties: false,
      type: "object",
      required: ["value", "option"],
      properties: {
        option: { type: "string" },
        value: { type: valueType },
      },
    },
  } as Schema &
    JSONSchemaType<
      RmmzParamCore_Option<number>[] | RmmzParamCore_Option<number>[]
    >);
