// enumは意図的に直書き。

import type { JSONSchemaType } from "ajv";
import type { AudioFileParams } from "src/libs";
import type { JSONSchemaAudioFileParams } from "src/libs/utils/types/audioFileParams/schemaType";
import type { CommandUnion_AnyAudio } from "src/rmmz";

// 定数を使うとimport解決でエラーが起こる
export const SCHEMA_COMMAND_ANY_AUDIO = {
  type: "object",
  required: ["code", "parameters", "indent"],

  properties: {
    code: {
      type: "integer",
      enum: [132, 133, 139, 241, 245, 249, 250],
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
        } satisfies JSONSchemaType<AudioFileParams> & JSONSchemaAudioFileParams,
      ],
    },
  },
  additionalProperties: false,
} as const satisfies JSONSchemaType<CommandUnion_AnyAudio>;
