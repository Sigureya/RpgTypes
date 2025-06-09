import type { JSONSchemaType } from "ajv";
import type { System_ImageSize } from "../../subset";

export const SCHEMA_SYSTEM_IMAGE_SIZE = {
  additionalProperties: false,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: {
    tileSize: { type: "integer", minimum: 0 },
    faceSize: { type: "integer", minimum: 0 },
    iconSize: { type: "integer", minimum: 0 },
  },
} as const satisfies JSONSchemaType<System_ImageSize>;
