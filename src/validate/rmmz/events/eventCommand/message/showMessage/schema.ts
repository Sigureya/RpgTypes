import type { Command_ShowMessageHeader } from "@RpgTypes/rmmz/eventCommand";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_COMMAND_SHOW_MESSAGE = {
  type: "object",

  required: ["code", "indent", "parameters"],
  properties: {
    code: { type: "number", const: 101 },

    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",

      minItems: 5,
      maxItems: 5,
      items: [
        { type: "string" },
        { type: "integer", minimum: 0 },
        { type: "integer", minimum: 0 },
        { type: "integer", minimum: 0 },
        { type: "string", nullable: true },
      ],
    },
  },
} as const satisfies JSONSchemaType<Command_ShowMessageHeader>;
