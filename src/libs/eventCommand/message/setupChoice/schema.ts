import type { JSONSchemaType } from "ajv";
import type { Command2_ShowChoiceItem } from "./types/item";
import type { Command2_ShowChoices } from "./types";

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

export const SCEHEMA_COMMAND_SHOW_CHOICES = {
  type: "object",
  properties: {
    code: { type: "number", const: 102 },
    indent: { type: "number" },
    parameters: {
      type: "array",
      minItems: 5,
      maxItems: 5,
      items: [
        { type: "array", items: { type: "string" } }, // choices
        { type: "number" }, // cancelType
        { type: "number" }, // defaultType
        { type: "number" }, // positionType
        { type: "number" }, // background
      ],
    },
  },
  required: ["code", "indent", "parameters"],
} as const satisfies JSONSchemaType<Command2_ShowChoices>;
