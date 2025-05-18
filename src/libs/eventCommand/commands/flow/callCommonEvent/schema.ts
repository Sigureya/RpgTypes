import type { JSONSchemaType } from "ajv";
import type { Command2_CommonEvent } from "./types";

export const SCHEMA_COMMAND_CALL_COMMON_EVENT = {
  type: "object",
  properties: {
    code: { type: "number", const: 117 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "number", minimum: 0, default: 0 }],
    },
  },
  required: ["code", "indent", "parameters"],
} as const satisfies JSONSchemaType<Command2_CommonEvent>;
