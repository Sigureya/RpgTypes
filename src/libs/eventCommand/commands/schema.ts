import type { JSONSchemaType } from "ajv";
import type { EventCommandLike2 } from "../frame";

export const SCHEMA_COMMAND_TEXT_BODY = {
  type: "object",
  required: ["code", "parameters", "indent"],

  properties: {
    code: {
      type: "integer",
      enum: [108, 408, 355, 401, 405],
    },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "string" }],
    },
  },
  additionalProperties: false,
} as const satisfies JSONSchemaType<
  EventCommandLike2<
    | 108 // comment
    | 408 // comment
    | 355 // script
    | 401 // show message
    | 405, // show scroll
    [comment: string]
  >
>;
