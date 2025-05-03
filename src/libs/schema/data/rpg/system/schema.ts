import type { AudioFileParams } from "@RpgTypes/utils";
import type {
  Data_System,
  System_BoolanOptions,
  System_AudioFiles,
} from "./system";
import type { JSONSchemaType } from "ajv";

export const SC_TESTBATTLERS = {
  type: "array",
  items: {
    type: "object",
    required: ["actorId", "equips", "level"],
    properties: {
      actorId: { type: "integer" },

      level: { type: "integer", minimum: 1 },
      equips: {
        type: "array",
        items: { type: "integer" },
      },
    },
    additionalProperties: false,
  },
} as const satisfies JSONSchemaType<Data_System["testBattlers"]>;

export const SCHEMA_SYSTEM_BOOLEAN_OPTIONS = {
  type: "object",
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
  ] satisfies Array<keyof System_BoolanOptions>,
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
} as const satisfies JSONSchemaType<System_BoolanOptions>;

export const SCHEMA_SYSTEM_AUDIOFILES = {
  type: "object",
  required: [
    "battleBgm",
    "victoryMe",
    "gameoverMe",
    "titleBgm",
    "defeatMe",
  ] as const satisfies Array<keyof System_AudioFiles>,
  additionalProperties: {
    type: "object",
    properties: {
      name: { type: "string" },
      volume: { type: "integer", minimum: 0, maximum: 100 },
      pitch: { type: "integer", minimum: 0, maximum: 100 },
      pan: { type: "integer", minimum: -100, maximum: 100 },
    },
    required: ["name", "volume", "pitch", "pan"],
    additionalProperties: false,
  },
} as const satisfies JSONSchemaType<Record<string, AudioFileParams>>;
