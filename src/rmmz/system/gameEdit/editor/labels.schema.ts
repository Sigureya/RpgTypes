import type { JSONSchemaType } from "ajv";
import type { EditorSettingLables } from "./types";

const SCHEMA_SYSTEM_EDITOR_SETTINGS_LABELS: JSONSchemaType<EditorSettingLables> =
  {
    additionalProperties: false,
    type: "object",
    required: ["messageWidth1", "messageWidth2", "jsonFormatLevel"],
    properties: {
      messageWidth1: { type: "string" },
      messageWidth2: { type: "string" },
      jsonFormatLevel: { type: "string" },
    },
  } as const satisfies JSONSchemaType<EditorSettingLables>;

export default SCHEMA_SYSTEM_EDITOR_SETTINGS_LABELS;
