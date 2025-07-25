import type { JSONSchemaType } from "ajv";

const SCHEMA_SYSTEM_ITEM_CATEGORIES = {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: {
    type: "boolean",
  },
} as const satisfies JSONSchemaType<boolean[]>;

export default SCHEMA_SYSTEM_ITEM_CATEGORIES;
