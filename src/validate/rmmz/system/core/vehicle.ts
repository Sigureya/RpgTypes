import type { Data_Vehicle } from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_SYSTEM_VEHICLE = {
  additionalProperties: false,
  type: "object",
  required: [
    "characterIndex",
    "characterName",
    "bgm",
    "startMapId",
    "startX",
    "startY",
  ],
  properties: {
    characterIndex: { type: "integer", minimum: 0, maximum: 7 },
    characterName: { type: "string" },
    bgm: {
      type: "object",
      additionalProperties: false,
      required: ["name", "volume", "pitch", "pan"],
      properties: {
        name: { type: "string" },
        volume: { type: "integer" },
        pitch: { type: "integer" },
        pan: { type: "integer" },
      },
    },
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0 },
    startY: { type: "integer", minimum: 0 },
  },
} as const satisfies JSONSchemaType<Data_Vehicle>;
