import type { JSONSchemaType, SchemaObject } from "ajv";
import { SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY } from "./core/basic/schema";
import { SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY } from "./core/commands/schema";
import { SCHEMA_SYSTEM_TERMS_MESSAGES } from "./core/messages/schema";
import { SCHEMA_SYSTEM_PARAM_NAMS_ARRAY } from "./core/paramArray/schema";
import type { System_Terms, System_TextBundle } from "./types";

export const SCHEMA_SYSTEM_TERMS_BUNDLE = {
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
    terms: {
      additionalProperties: false,
      type: "object",
      required: [
        "messages",
        "commands",
        "basic",
        "params",
      ] satisfies (keyof System_Terms)[],
      properties: {
        messages: SCHEMA_SYSTEM_TERMS_MESSAGES,
        commands: SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY,
        basic: SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY,
        params: SCHEMA_SYSTEM_PARAM_NAMS_ARRAY,
      } satisfies Record<keyof System_Terms, SchemaObject>,
    },
  },
} as const satisfies SchemaObject;
