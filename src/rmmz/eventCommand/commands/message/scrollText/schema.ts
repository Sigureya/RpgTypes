import type { JSONSchemaType } from "ajv";
import type { Command_ScrollTextHeader, Command_ScrollTextBody } from "./types";

export const SCHEMA_COMMAND_SCROLL_TEXT_HEAD = {
  type: "object",
  properties: {
    code: { type: "number", const: 105 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "number" }, // speed
        { type: "boolean" }, // skip
      ],
    },
  },
  required: ["code", "indent", "parameters"],
} as const satisfies JSONSchemaType<Command_ScrollTextHeader>;

export const SCHEMA_COMMAND_SCROLL_TEXT_BODY = {
  type: "object",
  properties: {
    code: { type: "number", const: 405 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "string" }], // content
    },
  },
  required: ["code", "indent", "parameters"],
} as const satisfies JSONSchemaType<Command_ScrollTextBody>;
