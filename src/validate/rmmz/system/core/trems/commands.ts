import type { JSONSchemaType } from "ajv";

const SCHEMA_STRING = {
  type: "string",
} as const satisfies JSONSchemaType<string>;
const SCHEMA_STRING_NULL = {
  type: "string",
  nullable: true,
} as const satisfies JSONSchemaType<string | null>;

export const SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY = {
  type: "array",
  items: [
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING_NULL,
    SCHEMA_STRING,
    SCHEMA_STRING,
    SCHEMA_STRING_NULL,
    SCHEMA_STRING,
    SCHEMA_STRING,
  ] as const,
  minItems: 26,
  maxItems: 26,
} as const;
