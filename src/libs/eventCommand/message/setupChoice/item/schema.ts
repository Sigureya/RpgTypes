import type { JSONSchemaType } from "ajv";
import type { Command2_ShowChoiceItem } from "./types";

export const SCHEMA_COMMAND_SHOW_CHOICE_ITEM = {
  type: "object",
  properties: {
    code: { type: "number", const: 402 },
    indent: { type: "number" },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "number" }, // index
        { type: "string" }, // name
      ],
    },
  },
  required: ["code", "indent", "parameters"],
} as const satisfies JSONSchemaType<Command2_ShowChoiceItem>;
