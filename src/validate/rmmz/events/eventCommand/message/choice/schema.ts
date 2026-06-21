import type { Command_ShowChoices } from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_COMMAND_SHOW_CHOICES = {
  type: "object",
  required: ["code", "indent", "parameters"],
  properties: {
    code: { type: "number", const: 102 },
    indent: { type: "integer" },
    parameters: {
      type: "array",
      minItems: 5,
      maxItems: 5,
      items: [
        { type: "array", items: { type: "string" } },
        { type: "integer" },
        { type: "integer" },
        { type: "integer" },
        { type: "integer" },
      ],
    },
  },
  additionalProperties: false,
} as const satisfies JSONSchemaType<Command_ShowChoices>;
