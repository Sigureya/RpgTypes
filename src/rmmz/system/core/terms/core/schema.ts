import type { SchemaObject } from "ajv";
import { SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY } from "./basic/schema";
import { SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY } from "./commands/schema";
import { SCHEMA_SYSTEM_TERMS_MESSAGES } from "./messages/schema";
import { SCHEMA_SYSTEM_PARAM_NAMS_ARRAY } from "./paramArray/schema";
import type { System_Terms } from "./types";

const SCHEMA_SYSTEM_TERMS_CORE = {
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
} as const satisfies SchemaObject;

export default SCHEMA_SYSTEM_TERMS_CORE;
