import type { Data_Tileset } from "@RpgTypes/rmmz/rpg";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_DATA_TILESET = {
  type: "object",
  required: ["name", "id", "note", "flags", "mode", "tilesetNames"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    note: { type: "string" },
    flags: {
      type: "array",
      items: { type: "integer", minimum: 0 },
    },
    mode: { type: "integer", minimum: 0 },
    tilesetNames: {
      type: "array",
      items: { type: "string" },
    },
  },
} as const satisfies JSONSchemaType<Data_Tileset>;
