import type { AudioFileParams } from "@RpgTypes/libs";
import type { JSONSchemaType } from "ajv";
import { SCHEMA_AUDIO_FILE_PARAMS_SYSTEM } from "./schema";

export const SCHEMA_SYSTEM_SOUND_ARRAY = {
  type: "array",
  maxItems: 24,
  minItems: 24,
  items: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
} as const satisfies JSONSchemaType<AudioFileParams[]>;
