import type { MoveRouteDataUnkwnown } from "@RpgTypes/rmmz/eventCommand/commands/movementRoute/moveRoute";
import type { JSONSchemaType } from "ajv";
import type { AudioFileParams } from "src/libs/utils/types";

export const SCHEMA_MOVEROUTE_DATA = {
  type: "object",
  additionalProperties: false,
  required: ["wait", "repeat", "skippable", "list"],
  properties: {
    wait: { type: "boolean" },
    repeat: { type: "boolean" },
    skippable: { type: "boolean" },
    list: {
      type: "array",
      items: {
        // MV版でindent:nullという謎パラメータが混入しているので対策
        additionalProperties: true,
        type: "object",
        required: ["code"],
        properties: {
          code: { type: "integer" },
          parameters: {
            type: "array",
            nullable: true,
            items: {
              oneOf: [
                { type: "string" },
                { type: "number" },
                {
                  type: "object",
                  additionalProperties: false,
                  required: ["name", "pan", "pitch", "volume"],
                  properties: {
                    name: { type: "string" },
                    pan: { type: "integer" },
                    pitch: { type: "integer" },
                    volume: { type: "integer" },
                  },
                } satisfies JSONSchemaType<AudioFileParams>,
              ],
            },
          },
        },
      },
    },
  },
} as const satisfies JSONSchemaType<MoveRouteDataUnkwnown>;
