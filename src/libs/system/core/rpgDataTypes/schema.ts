import type { JSONSchemaType } from "ajv";
import type { System_DataNames } from "./types";

const stringArraySchema = {
  additionalProperties: false,
  type: "array",
  items: { type: "string" },
} as const satisfies JSONSchemaType<string[]>;

export const SCHEMA_SYSTEM_RPG_DATA_NAMES: JSONSchemaType<System_DataNames> = {
  additionalProperties: false,
  type: "object",
  required: [
    "weaponTypes",
    "skillTypes",
    "elements",
    "variables",
    "equipTypes",
    "switches",
    "armorTypes",
  ],
  properties: {
    weaponTypes: stringArraySchema,
    skillTypes: stringArraySchema,
    elements: stringArraySchema,
    variables: stringArraySchema,
    equipTypes: stringArraySchema,
    switches: stringArraySchema,
    armorTypes: stringArraySchema,
  },
} as const satisfies JSONSchemaType<System_DataNames>;
