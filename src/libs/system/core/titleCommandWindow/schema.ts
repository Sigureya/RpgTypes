import type { JSONSchemaType } from "ajv";
import type { TitleCommandWindow } from "./types";

export const SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW = {
  additionalProperties: false,
  type: "object",
  required: ["background", "offsetX", "offsetY"],
  properties: {
    background: { type: "integer", minimum: 0, maximum: 1000 },
    offsetX: { type: "integer", minimum: -1000, maximum: 1000 },
    offsetY: { type: "integer", minimum: -1000, maximum: 1000 },
  },
} as const satisfies JSONSchemaType<TitleCommandWindow>;
