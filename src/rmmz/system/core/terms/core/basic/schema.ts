import type { JSONSchemaType } from "ajv";

const SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY = {
  type: "array",
  items: { type: "string" },
  minItems: 10,
  maxItems: 10,
} as const satisfies JSONSchemaType<string[]>;

export default SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY;
