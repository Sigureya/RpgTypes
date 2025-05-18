import type { EventCommandUnknown } from "./types";

export const SCHEMA_COMMAND_UNKNOWN = {
  type: "object",
  additionalProperties: false,
  required: [
    "code",
    "parameters",
    "indent",
  ] satisfies (keyof EventCommandUnknown)[],

  properties: {
    code: { type: "integer" },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
    },
  },
} as const;
