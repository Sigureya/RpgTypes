import type { JSONSchemaType } from "ajv";
import type { Command2_InputNumber } from "./types";

export const SCHEMA_COMMAND_INPUT_NUMBER = {
  type: "object",
  properties: {
    code: { type: "number", const: 103 },
    indent: { type: "number" },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "number" }, // variableId
        { type: "number" }, // digits
      ],
    },
  },
  required: ["code", "indent", "parameters"],
} as const satisfies JSONSchemaType<Command2_InputNumber>;
