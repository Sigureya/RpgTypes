import type { JSONSchemaType } from "ajv";
import type { Command_ControlTimer } from "./types";

export const SCHEMA_COMMAND_CONTROL_TIMER = {
  required: ["code", "indent", "parameters"],
  type: "object",
  properties: {
    code: { type: "number", const: 124 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "number", enum: [0, 1] }, // operation
        { type: "number", minimum: 0 }, // time
      ],
    },
  },
} satisfies JSONSchemaType<Command_ControlTimer>;
