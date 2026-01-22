import type { JSONSchemaType } from "ajv";

export const SCHEMA_SYSTEM_ITEM_CATEGORIES = {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" },
} as const satisfies JSONSchemaType<boolean[]>;
