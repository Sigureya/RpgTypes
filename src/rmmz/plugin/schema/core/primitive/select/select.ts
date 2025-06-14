import type { JSONSchemaType, JSONType } from "ajv";
import type { Schema } from "jsonschema";
import { makeRmmzParamTextSchema } from "../makeTextField";
import type { RmmzParam_Option, RmmzParam_Select } from "./types";

export const makeSelectSchema = () =>
  ({
    additionalItems: false,
    type: "object",
    required: ["type", "default", "options"],
    properties: {
      ...makeRmmzParamTextSchema(),
      type: { type: "string", const: "select" },
      default: { type: ["string", "number"] },
      options: {
        oneOf: [makeOptionSchema("string"), makeOptionSchema("number")],
      },
    },
  } satisfies Schema & JSONSchemaType<RmmzParam_Select<string | number>>);

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
  } as JSONSchemaType<RmmzParam_Option<string | number>[]> & Schema);
