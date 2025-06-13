import type { JSONSchemaType } from "ajv";

export const SCHEMA_SYSTEM_PARAM_NAMS_ARRAY = {
  type: "array",
  items: {
    type: "string",
    minLength: 1,
  },
  minItems: 10,
  maxItems: 10,
  uniqueItems: true,
} as const satisfies JSONSchemaType<string[]>;
