import type { AudioFileParams } from "@RpgTypes/utils";
import type { JSONSchemaType } from "ajv";
import SCHEMA_AUDIO_FILE_PARAMS_SYSTEM from "./audio/schema";

const SCHEMA_SYSTEM_SOUND_ARRAY = {
  type: "array",
  maxItems: 24,
  minItems: 24,
  items: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
} as const satisfies JSONSchemaType<AudioFileParams[]>;

export default SCHEMA_SYSTEM_SOUND_ARRAY;
