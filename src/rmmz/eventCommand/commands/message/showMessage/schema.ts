import type { JSONSchemaType } from "ajv";
import type { Command_ShowMessageHeader } from "./types";

const SCHEMA_COMMAND_SHOW_MESSAGE = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: { type: "integer", const: 101 }, // Assuming 101 is the code for ShowMessage
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      items: [
        { type: "string" }, // facename
        { type: "integer", minimum: 0, maximum: 7 }, // faceIndex
        { type: "integer", minimum: 0, maximum: 2 }, // background
        { type: "integer", minimum: 0, maximum: 2 }, // positionType
        { type: "string", nullable: true }, // speakerName
      ] as const,

      minItems: 5,
      maxItems: 5,
    },
  },
} as const satisfies JSONSchemaType<Command_ShowMessageHeader>;

export default SCHEMA_COMMAND_SHOW_MESSAGE;
