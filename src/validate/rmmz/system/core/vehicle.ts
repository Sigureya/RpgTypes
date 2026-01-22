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
    characterName: { type: "string", minLength: 1 },
    bgm: {
      type: "object",
      additionalProperties: false,
      required: ["name", "volume", "pitch", "pan"],
      properties: {
        name: { type: "string" },
        volume: { type: "integer", minimum: 0, maximum: 100 },
        pitch: { type: "integer", minimum: 50, maximum: 150 },
        pan: { type: "integer", minimum: -100, maximum: 100 },
      },
    },
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0, maximum: 5000 },
    startY: { type: "integer", minimum: 0, maximum: 5000 },
  },
} as const satisfies JSONSchemaType<Data_Vehicle>;
