import type { JSONSchemaType } from "ajv";
import type { Command_CommonEvent } from "./types";

const SCHEMA_COMMAND_CALL_COMMON_EVENT = {
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
} as const satisfies JSONSchemaType<Command_CommonEvent>;

export default SCHEMA_COMMAND_CALL_COMMON_EVENT;
