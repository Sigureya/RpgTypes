import type { JSONSchemaType } from "ajv";
import type { CommandUnion_AnyAudio } from "./types";
import type { AudioFileParams } from "src/libs/utils";
import {
  CHANGE_BATTLE_BGM,
  CHANGE_DEFEAT_ME,
  CHANGE_VICTORY_ME,
  PLAY_BGM,
  PLAY_BGS,
  PLAY_ME,
  PLAY_SE,
} from "@RpgTypes/schema";

export const SCHEMA_COMMAND_ANY_AUDIO = {
  type: "object",
  required: ["code", "parameters", "indent"],

  properties: {
    code: {
      type: "integer",
      enum: [
        CHANGE_BATTLE_BGM,
        CHANGE_VICTORY_ME,
        CHANGE_DEFEAT_ME,
        PLAY_BGM,
        PLAY_BGS,
        PLAY_ME,
        PLAY_SE,
      ],
    },
    indent: { type: "integer" },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [
        {
          type: "object",
          properties: {
            name: { type: "string" },
            volume: { type: "integer" },
            pitch: { type: "integer" },
            pan: { type: "integer" },
          },
          required: ["name", "volume", "pitch", "pan"],
          additionalProperties: false,
        } satisfies JSONSchemaType<AudioFileParams>,
      ],
    },
  },
  additionalProperties: false,
} as const satisfies JSONSchemaType<CommandUnion_AnyAudio>;
