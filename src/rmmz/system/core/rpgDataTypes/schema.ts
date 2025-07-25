import type { JSONSchemaType } from "ajv";
import type { System_RPG_DataNames } from "./types";

const stringArraySchema = {
  type: "array",
  items: { type: "string" },
} as const satisfies JSONSchemaType<string[]>;

const SCHEMA_SYSTEM_RPG_DATA_NAMES = {
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
} as const satisfies JSONSchemaType<System_RPG_DataNames>;

export default SCHEMA_SYSTEM_RPG_DATA_NAMES;
