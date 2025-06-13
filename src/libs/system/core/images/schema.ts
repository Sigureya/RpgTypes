import type { JSONSchemaType } from "ajv";
import type { System_ImageSize, System_TitleImages } from "./types";

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

export const SCHEMA_SYSTEM_TITLE_IMAGES = {
  additionalProperties: false,

  type: "object",
  required: ["title1Name", "title2Name"],
  properties: {
    title1Name: { type: "string" },
    title2Name: { type: "string" },
  },
} as const satisfies JSONSchemaType<System_TitleImages>;
