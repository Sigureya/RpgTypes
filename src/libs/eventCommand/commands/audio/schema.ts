import type { JSONSchemaType } from "ajv";
import type { CommandUnion_AnyAudio } from "./types";
import type { AudioFileParams } from "src/libs/utils";

export const SCHEMA_COMMAND_ANY_AUDIO = {
  type: "object",
  required: ["code", "parameters", "indent"],

  properties: {
    code: {
      type: "integer",
      enum: [
        132, // ChangeBattleBGM
        133, // ChangeVictoryME
        139, // ChangeDefeatME
        241, // PlayBGM
        245, // PlayBGS
        249, // PlayME
        250, // PlaySE
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
