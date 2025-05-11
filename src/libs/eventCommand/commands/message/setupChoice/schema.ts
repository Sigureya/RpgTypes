import type { JSONSchemaType } from "ajv";
import type { Command2_ShowChoiceItem } from "./types/item";
import type { Command2_ShowChoices } from "./types";

export const SCHEMA_COMMAND_SHOW_CHOICE_ITEM = {
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
} as const satisfies JSONSchemaType<Command2_ShowChoiceItem>;

export const SCHEMA_COMMAND_SHOW_CHOICES = {
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
} as const satisfies JSONSchemaType<Command2_ShowChoices>;
