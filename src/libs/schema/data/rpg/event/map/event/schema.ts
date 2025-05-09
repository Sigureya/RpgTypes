import type { JSONSchemaType } from "ajv";
import type { MapEvent_Image } from "./page";

export const SCHEMA_MAP_EVENT_IMAGE = {
  type: "object",
  required: [
    "characterIndex",
    "characterName",
    "direction",
    "pattern",
    "tileId",
  ],
  properties: {
    characterIndex: { type: "integer", minimum: 0 },
    characterName: { type: "string" },
    direction: { type: "integer", enum: [2, 4, 6, 8] },
    pattern: { type: "integer" },
    tileId: { type: "integer" },
  },
} as const satisfies JSONSchemaType<MapEvent_Image>;
