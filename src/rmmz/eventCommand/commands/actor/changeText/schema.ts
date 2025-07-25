import type { JSONSchemaType } from "ajv";
import type { CommandUnion_ChangeActorText } from "./types";

const SCHEMA_COMMAND_CHANGE_ACTOR_TEXT = {
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
      items: [
        { type: "integer", minimum: 0 }, // actorId
        { type: "string" }, // name
      ],
    },
  },
  additionalProperties: false,
} as const satisfies JSONSchemaType<CommandUnion_ChangeActorText>;

export default SCHEMA_COMMAND_CHANGE_ACTOR_TEXT;
