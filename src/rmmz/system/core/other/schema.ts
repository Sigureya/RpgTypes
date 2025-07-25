import type { JSONSchemaType } from "ajv";
import type { System_OtherData } from "./types";

const SCHEMA_SYSTEM_OTHER_DATA = {
  type: "object",
  additionalProperties: false,
  required: ["locale", "versionId", "windowTone"],
  properties: {
    locale: { type: "string" },
    versionId: { type: "number" },
    windowTone: {
      type: "array",
      items: { type: "number" },
      minItems: 4,
      maxItems: 4,
    },
  },
} as const satisfies JSONSchemaType<System_OtherData>;

export default SCHEMA_SYSTEM_OTHER_DATA;
