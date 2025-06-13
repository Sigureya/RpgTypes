import type { JSONSchemaType } from "ajv";
import type { System_BooleanGameOptions } from "./types";

export const SCHEMA_SYSTEM_BOOLEAN_OPTIONS = {
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
    optAutosave: { type: "boolean" },
    optDisplayTp: { type: "boolean" },
    optDrawTitle: { type: "boolean" },
    optExtraExp: { type: "boolean" },
    optFloorDeath: { type: "boolean" },
    optFollowers: { type: "boolean" },
    optKeyItemsNumber: { type: "boolean" },
    optSideView: { type: "boolean" },
    optSlipDeath: { type: "boolean" },
    optTransparent: { type: "boolean" },
    optMessageSkip: { type: "boolean" },
    optSplashScreen: { type: "boolean" },
  },
} as const satisfies JSONSchemaType<System_BooleanGameOptions>;
