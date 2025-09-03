import type { Command_CommonEvent } from "@RpgTypes/rmmz/eventCommand";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_COMMAND_CALL_COMMON_EVENT = {
  type: "object",

  required: ["code", "indent", "parameters"],
  properties: {
    code: { type: "number", const: 117 },

    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",

      minItems: 1,
      maxItems: 1,
      items: [{ type: "integer", minimum: 0 }],
    },
  },
} as const satisfies JSONSchemaType<Command_CommonEvent>;
