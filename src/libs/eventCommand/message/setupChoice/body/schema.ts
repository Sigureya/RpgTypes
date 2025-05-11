import type { JSONSchemaType } from "ajv";

import type { Command2_ShowChoices } from "./types";

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
