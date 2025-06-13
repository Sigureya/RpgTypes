import type { JSONSchemaType } from "ajv";

export const SCHEMA_SYSTEM_MENU_COMMANDS_ENABLED = {
  type: "array",
  maxItems: 6,
  minItems: 6,
  items: {
    type: "boolean",
  },
} as const satisfies JSONSchemaType<boolean[]>;
