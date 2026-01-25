import type { TitleCommandWindow } from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW = {
  type: "object",
  additionalProperties: false,
  required: ["background", "offsetX", "offsetY"],
  properties: {
    background: { type: "integer" },
    offsetX: { type: "integer" },
    offsetY: { type: "integer" },
  },
} as const satisfies JSONSchemaType<TitleCommandWindow>;
