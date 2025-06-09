import type { AudioFileParams } from "@RpgTypes/utils";
import type { JSONSchemaType } from "ajv";
import type { System_AudioFiles } from "./types";

export const SCHEMA_SYSTEM_AUDIOFILES = {
  type: "object",
  required: [
    "battleBgm",
    "victoryMe",
    "gameoverMe",
    "titleBgm",
    "defeatMe",
  ] as const satisfies Array<keyof System_AudioFiles>,
  additionalProperties: {
    type: "object",
    properties: {
      name: { type: "string" },
      volume: { type: "integer", minimum: 0, maximum: 100 },
      pitch: { type: "integer", minimum: 0, maximum: 100 },
      pan: { type: "integer", minimum: -100, maximum: 100 },
    },
    required: ["name", "volume", "pitch", "pan"],
    additionalProperties: true,
  },
} as const satisfies JSONSchemaType<Record<string, AudioFileParams>>;
