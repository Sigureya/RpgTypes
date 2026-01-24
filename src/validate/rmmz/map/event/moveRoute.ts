import type { MoveRouteDataUnkwnown } from "@RpgTypes/rmmz/eventCommand/commands/movementRoute/moveRoute";
import type { JSONSchemaType } from "ajv";
import type { AudioFileParams } from "src/libs/utils/types";

export const SCHEMA_MOVEROUTE_DATA = {
  type: "object",
  required: ["wait", "repeat", "skippable", "list"],
  properties: {
    wait: { type: "boolean" },
    repeat: { type: "boolean" },
    skippable: { type: "boolean" },
    list: {
      type: "array",
      items: {
        type: "object",
        required: ["code", "parameters"],
        properties: {
          code: { type: "integer" },
          parameters: {
            type: "array",
            items: {
              oneOf: [
                { type: "string" },
                { type: "number" },
                {
                  type: "object",
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
