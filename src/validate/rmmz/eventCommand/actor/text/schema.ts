import type {
  EventCommandLike,
  CHANGE_PROFILE,
  CHANGE_NICKNAME,
  CHANGE_NAME,
} from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_COMMAND_ACTOR = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [320, 324, 325],
    },
    indent: { type: "integer" },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [{ type: "number" }, { type: "string" }],
    },
  },
  additionalProperties: false,
} as const satisfies JSONSchemaType<
  EventCommandLike<
    typeof CHANGE_PROFILE | typeof CHANGE_NICKNAME | typeof CHANGE_NAME,
    [number, string]
  >
>;
