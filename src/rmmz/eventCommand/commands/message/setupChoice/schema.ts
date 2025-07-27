import type { JSONSchemaType } from "ajv";
import type { Command_ShowChoices } from "./body/types";

const SCHEMA_COMMAND_SHOW_CHOICES = {
  type: "object",
  properties: {
    code: { type: "number", const: 102 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 5,
      maxItems: 5,
      items: [
        { type: "array", items: { type: "string" } }, // choices
        { type: "integer" }, // cancelType
        { type: "integer" }, // defaultType
        { type: "integer" }, // positionType
        { type: "integer" }, // background
      ],
    },
  },
  required: ["code", "indent", "parameters"],
} as const satisfies JSONSchemaType<Command_ShowChoices>;

export default SCHEMA_COMMAND_SHOW_CHOICES;
