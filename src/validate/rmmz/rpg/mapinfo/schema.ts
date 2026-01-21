import type { Data_MapInfo } from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_DATA_MAPINFO = {
  type: "object",
  required: [
    "name",
    "id",
    "order",
    "expanded",
    "scrollX",
    "scrollY",
    "parentId",
  ],
  properties: {
    id: { type: "integer", minimum: 0 },
    name: { type: "string" },
    displayName: { type: "string" },
    order: { type: "integer" },
    expanded: { type: "boolean" },
    scrollX: { type: "number" },
    scrollY: { type: "number" },
    parentId: { type: "integer", minimum: 0 },
  },
} as const satisfies JSONSchemaType<Data_MapInfo>;
