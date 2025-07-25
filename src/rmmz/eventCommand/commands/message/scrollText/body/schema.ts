import type { JSONSchemaType } from "ajv";
import type { Command_ScrollTextBody } from "./types";

const SCHEMA_COMMAND_SCROLL_TEXT_BODY = {
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

export default SCHEMA_COMMAND_SCROLL_TEXT_BODY;
