import type { JSONSchemaType } from "ajv";
import type { Command_ControlSwitches } from "./types";

const SCHEMA_COMMAND_CONTROL_SWITCHES = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: { type: "integer", const: 121 }, // Assuming 121 is the code for ControlSwitches
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      items: [
        { type: "integer", minimum: 1 }, // min
        { type: "integer", minimum: 1 }, // max
        { type: "integer", enum: [0, 1] }, // value (assuming toggle values are 0 and 1)
      ] as const,

      minItems: 3,
      maxItems: 3,
    },
  },
} as const satisfies JSONSchemaType<Command_ControlSwitches>;

export default SCHEMA_COMMAND_CONTROL_SWITCHES;
