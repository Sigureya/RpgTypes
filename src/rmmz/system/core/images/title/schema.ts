import type { JSONSchemaType } from "ajv";
import type { System_TitleImages } from "./types";

const SCHEMA_SYSTEM_TITLE_IMAGES = {
  additionalProperties: false,

  type: "object",
  required: ["title1Name", "title2Name"],
  properties: {
    title1Name: { type: "string" },
    title2Name: { type: "string" },
  },
} as const satisfies JSONSchemaType<System_TitleImages>;

export default SCHEMA_SYSTEM_TITLE_IMAGES;
