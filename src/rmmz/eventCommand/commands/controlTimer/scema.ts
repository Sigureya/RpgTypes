import type { JSONSchemaType } from "ajv";
import type { Command_ControlTimer } from "./types";

export const SCHEMA_COMMAND_CONTROL_TIMER = {
  type: "object",
  properties: {
    operation: { type: "string", enum: ["plus", "minus"] },
    time: { type: "number" },
  },
  required: ["operation", "time"],
};
