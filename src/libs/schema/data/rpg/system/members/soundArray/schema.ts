import type { AudioFileParams } from "@RpgTypes/utils";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_SYSTEM_SOUND_ARRAY = {
  additionalProperties: false,
  type: "array",
  maxItems: 24,
  minItems: 24,
  items: {
    type: "object",
    properties: {
      name: { type: "string" },
      volume: { type: "integer" },
      pitch: { type: "integer" },
      pan: { type: "integer" },
    },
    required: ["name"],
    additionalProperties: false,
  },
} as const satisfies JSONSchemaType<AudioFileParams[]>;
