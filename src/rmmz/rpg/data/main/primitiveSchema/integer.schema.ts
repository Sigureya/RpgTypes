import type { JSONSchemaType } from "ajv";

const SCHEMA_INTEGER = {
  type: "integer",
} as const satisfies JSONSchemaType<number>;

export default SCHEMA_INTEGER;
