import type { JSONSchemaType } from "ajv";

export const SCHEMA_STRING = {
  type: "string",
} as const satisfies JSONSchemaType<string>;

export const SCHEMA_INTEGER = {
  type: "integer",
} as const satisfies JSONSchemaType<number>;

export const SCHEMA_POSITIVE_INTEGER = {
  type: "integer",
  minimum: 0,
} as const satisfies JSONSchemaType<number>;
