import type { JSONSchemaType } from "ajv";
import type { System_BooleanOptions } from "./subset";

export const makeBooleanOptions = (
  options: Partial<System_BooleanOptions> = {}
): System_BooleanOptions => {
  return {
    optAutosave: options.optAutosave ?? true,
    optDisplayTp: options.optDisplayTp ?? true,
    optDrawTitle: options.optDrawTitle ?? true,
    optExtraExp: options.optExtraExp ?? true,
    optFloorDeath: options.optFloorDeath ?? true,
    optFollowers: options.optFollowers ?? true,
    optKeyItemsNumber: options.optKeyItemsNumber ?? true,
    optSideView: options.optSideView ?? true,
    optSlipDeath: options.optSlipDeath ?? true,
    optTransparent: options.optTransparent ?? true,
    optMessageSkip: options.optMessageSkip ?? true,
    optSplashScreen: options.optSplashScreen ?? true,
  } satisfies Record<keyof System_BooleanOptions, boolean>;
};

export const SCHEMA_SYSTEM_BOOLEAN_OPTIONS = {
  type: "object",
  additionalProperties: true,
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
  ] satisfies Array<keyof System_BooleanOptions>,
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
} as const satisfies JSONSchemaType<System_BooleanOptions>;
