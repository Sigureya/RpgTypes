import type { JSONSchemaType } from "ajv";

const SCHEMA_STRING = {
  type: "string",
} as const satisfies JSONSchemaType<string>;

export default SCHEMA_STRING;
