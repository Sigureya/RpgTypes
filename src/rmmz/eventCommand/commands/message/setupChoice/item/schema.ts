import type { JSONSchemaType } from "ajv";
import type { Command_ShowChoiceWhen } from "./types";

const SCHEMA_COMMAND_SHOW_CHOICE_WHEN = {
  type: "object",
  properties: {
    code: { type: "number", const: 402 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "integer" }, // index
        { type: "string" }, // name
      ],
    },
  },
  required: ["code", "indent", "parameters"],
} as const satisfies JSONSchemaType<Command_ShowChoiceWhen>;

export default SCHEMA_COMMAND_SHOW_CHOICE_WHEN;
