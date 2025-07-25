import type { JSONSchemaType } from "ajv";

const SCHEMA_POSITIVE_INTEGER = {
  type: "integer",
  minimum: 0,
} as const satisfies JSONSchemaType<number>;

export default SCHEMA_POSITIVE_INTEGER;
