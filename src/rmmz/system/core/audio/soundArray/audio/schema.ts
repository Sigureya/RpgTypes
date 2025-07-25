import type { JSONSchemaType } from "ajv";
import type { AudioFileParams } from "src/utils";

const SCHEMA_AUDIO_FILE_PARAMS_SYSTEM = {
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

export default SCHEMA_AUDIO_FILE_PARAMS_SYSTEM;
