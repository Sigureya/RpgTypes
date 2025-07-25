import type { JSONSchemaType, SchemaObject } from "ajv";
import SCHEMA_SYSTEM_TERMS_CORE from "./core/schema";
import type { System_TextBundle } from "./types";

const SCHEMA_SYSTEM_TERMS_BUNDLE = {
  required: [
    "terms",
    "currencyUnit",
    "gameTitle",
  ] satisfies (keyof System_TextBundle)[],
  additionalProperties: false,
  type: "object",
  properties: {
    currencyUnit: { type: "string" } satisfies JSONSchemaType<string>,
    gameTitle: { type: "string" } satisfies JSONSchemaType<string>,
    terms: SCHEMA_SYSTEM_TERMS_CORE,
  },
} as const satisfies SchemaObject;

export default SCHEMA_SYSTEM_TERMS_BUNDLE;
