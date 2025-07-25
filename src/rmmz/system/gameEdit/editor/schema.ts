import type { JSONSchemaType } from "ajv";
import type { EditorSettings } from "./types";

const SCHEMA_SYSTEM_EDITOR_SETTINGS: JSONSchemaType<EditorSettings> = {
  additionalProperties: false,
  type: "object",
  required: ["messageWidth1", "messageWidth2", "jsonFormatLevel"],
  properties: {
    messageWidth1: { type: "integer", minimum: 0, maximum: 1000 },
    messageWidth2: { type: "integer", minimum: 0, maximum: 1000 },
    jsonFormatLevel: { type: "integer", minimum: 0, maximum: 4 },
  },
} as const satisfies JSONSchemaType<EditorSettings>;

export default SCHEMA_SYSTEM_EDITOR_SETTINGS;
