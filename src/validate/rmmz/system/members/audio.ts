import type { AudioFileParams } from "@RpgTypes/libs";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_AUDIO_FILE_PARAMS_SYSTEM = {
  type: "object",
  properties: {
    name: { type: "string" },
    volume: { type: "integer" },
    pitch: { type: "integer" },
    pan: { type: "integer" },
  },
  required: ["name", "volume", "pitch", "pan"],
  additionalProperties: false,
} as const satisfies JSONSchemaType<AudioFileParams>;

export const SCHEMA_SYSTEM_SOUND_ARRAY = {
  type: "array",
  maxItems: 24,
  minItems: 24,
  items: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
} as const satisfies JSONSchemaType<AudioFileParams[]>;
