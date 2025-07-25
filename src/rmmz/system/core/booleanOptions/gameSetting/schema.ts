import type { JSONSchemaType } from "ajv";
import type { System_BooleanGameOptions } from "./types";

const SCHEMA_BOOLEAN = {
  type: "boolean",
} as const satisfies JSONSchemaType<boolean>;

const SCHEMA_SYSTEM_BOOLEAN_OPTIONS = {
  type: "object",
  additionalProperties: false,
  required: [
    "optAutosave",
    "optDisplayTp",
    "optDrawTitle",
    "optExtraExp",
    "optFloorDeath",
    "optFollowers",
    "optKeyItemsNumber",
    "optSideView",
    "optSlipDeath",
    "optTransparent",
    "optMessageSkip",
    "optSplashScreen",
  ] satisfies Array<keyof System_BooleanGameOptions>,
  properties: {
    optAutosave: SCHEMA_BOOLEAN,
    optDisplayTp: SCHEMA_BOOLEAN,
    optDrawTitle: SCHEMA_BOOLEAN,
    optExtraExp: SCHEMA_BOOLEAN,
    optFloorDeath: SCHEMA_BOOLEAN,
    optFollowers: SCHEMA_BOOLEAN,
    optKeyItemsNumber: SCHEMA_BOOLEAN,
    optSideView: SCHEMA_BOOLEAN,
    optSlipDeath: SCHEMA_BOOLEAN,
    optTransparent: SCHEMA_BOOLEAN,
    optMessageSkip: SCHEMA_BOOLEAN,
    optSplashScreen: SCHEMA_BOOLEAN,
  },
} as const satisfies JSONSchemaType<System_BooleanGameOptions>;

export default SCHEMA_SYSTEM_BOOLEAN_OPTIONS;
