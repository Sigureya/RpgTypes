import type { JSONSchemaType } from "ajv";
import type { AudioFileParams } from "src/libs/utils";
import type { JSONSchemaAudioFileParams } from "src/libs/utils/types/audioFileParams/schemaType";
import type { System_AudioFiles } from "./types";

const audioFileParamsSchema = {
  type: "object",
  properties: {
    name: { type: "string" },
    volume: { type: "integer", minimum: 0, maximum: 100 },
    pitch: { type: "integer", minimum: 0, maximum: 100 },
    pan: { type: "integer", minimum: -100, maximum: 100 },
  },
  required: ["name", "volume", "pitch", "pan"],
  additionalProperties: false,
} as const satisfies JSONSchemaType<AudioFileParams> &
  JSONSchemaAudioFileParams;

const SCHEMA_SYSTEM_AUDIOFILES = {
  additionalProperties: false,
  type: "object",
  required: [
    "battleBgm",
    "victoryMe",
    "gameoverMe",
    "titleBgm",
    "defeatMe",
    "sounds",
  ],
  properties: {
    battleBgm: audioFileParamsSchema,
    victoryMe: audioFileParamsSchema,
    gameoverMe: audioFileParamsSchema,
    titleBgm: audioFileParamsSchema,
    defeatMe: audioFileParamsSchema,
    sounds: {
      type: "array",
      items: audioFileParamsSchema,
      minItems: 24,
      maxItems: 24,
    },
  },
} as const satisfies JSONSchemaType<System_AudioFiles>;

export default SCHEMA_SYSTEM_AUDIOFILES;
