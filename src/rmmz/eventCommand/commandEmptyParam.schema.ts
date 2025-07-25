import type { CommandUnion_EmptyParam } from "./unionTypes";

const SCHEMA_COMMAND_EMPTY_PARAM = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 0, maxItems: 0 },
    code: {
      type: "integer",
      enum: [
        0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244,
        251, 314, 315, 340, 351, 352, 353, 354, 411,
      ] satisfies ReadonlyArray<CommandUnion_EmptyParam["code"]>,
    },
  },
  additionalProperties: false,
} as const;

export default SCHEMA_COMMAND_EMPTY_PARAM;
