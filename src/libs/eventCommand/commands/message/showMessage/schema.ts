import type { JSONSchemaType } from "ajv";
import type { Command2_ShowMessage } from "./types";

export const SCHEMA_COMMAND_SHOW_MESSAGE = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: { type: "integer", enum: [101] },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      items: [
        { type: "string" }, // facename
        { type: "integer", minimum: 0, maximum: 7 }, // faceIndex
        { type: "integer", minimum: 0, maximum: 2 }, // background
        { type: "integer", minimum: 0, maximum: 2 }, // positionType
        { type: "string" }, // speakerName
      ] as const,

      minItems: 5,
      maxItems: 5,
    },
  },
} as const satisfies JSONSchemaType<Command2_ShowMessage>;
