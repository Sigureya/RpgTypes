import type { AudioFileParams } from "@RpgTypes/utils";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_SYSTEM_SOUND_ARRAY = {
  additionalProperties: false,
  type: "array",
  maxItems: 22,
  minItems: 22,
  items: {
    type: "object",
    properties: {
      name: { type: "string" },
      volume: { type: "integer", minimum: 0 },
      pitch: { type: "integer", minimum: 50, maximum: 150 },
      pan: { type: "integer", default: 0 },
    },
    required: ["name"],
    additionalProperties: false,
  },
} as const satisfies JSONSchemaType<AudioFileParams[]>;
