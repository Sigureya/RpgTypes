import type { JSONSchemaType } from "ajv";
import SCHEMA_SYSTEM_ADVANCED from "./core/advanced/schema";
import SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION from "./core/attackMotion/schema";
import SCHEMA_AUDIO_FILE_PARAMS_SYSTEM from "./core/audio/soundArray/audio/schema";
import SCHEMA_SYSTEM_SOUND_ARRAY from "./core/audio/soundArray/schema";
import SCHEMA_SYSTEM_BATTLE_RULE from "./core/battle/battleSystem/schema";
import SCHEMA_SYSTEM_BOOLEAN_OPTIONS from "./core/booleanOptions/gameSetting/schema";
import SCHEMA_SYSTEM_VEHICLE from "./core/vehicle/schema";
import type { Data_System } from "./system";

const SCHEMA_BOOLEAN = {
  type: "boolean",
} as const satisfies JSONSchemaType<boolean>;

const SCHEMA_SYSTEM_V2 = {
  type: "object",
  required: [
    "advanced",
    "airship",
    "attackMotions",
    "boat",
    "ship",
    "advanced",
    "battleSystem",
    "currencyUnit",
    "advanced",
    "defeatMe",
    "editMapId",
    "elements",
    "equipTypes",
    "faceSize",
    "gameTitle",
    "iconSize",
    "itemCategories",
    "magicSkills",
    "menuCommands",
    "optAutosave",
    "optDisplayTp",
    "optDrawTitle",
    "optExtraExp",
    "optFloorDeath",
    "optFollowers",

    "optKeyItemsNumber",
    "partyMembersArray",
    "optSideView",
    "optSlipDeath",
    "optTransparent",
    "optSplashScreen",
    "optMessageSkip",
    "startMapId",
    "startX",
    "startY",
    "testTroopId",
    "testBattlers",
    "title1Name",
    "title2Name",
    "titleBgm",
    "battleBgm",
    "gameoverMe",
    "victoryMe",
    "sounds",
    "battlerHue",
    "battlerName",
  ],
  properties: {
    ...SCHEMA_SYSTEM_BOOLEAN_OPTIONS.properties,
    advanced: SCHEMA_SYSTEM_ADVANCED,
    airship: SCHEMA_SYSTEM_VEHICLE,
    boat: SCHEMA_SYSTEM_VEHICLE,
    ship: SCHEMA_SYSTEM_VEHICLE,
    attackMotions: {
      type: "array",
      items: SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
    },
    sounds: SCHEMA_SYSTEM_SOUND_ARRAY,
    defeatMe: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
    battleBgm: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
    gameoverMe: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
    victoryMe: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
    titleBgm: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
    battleSystem: SCHEMA_SYSTEM_BATTLE_RULE,
    currencyUnit: { type: "string" },
  } as const satisfies Partial<Record<keyof Data_System, object>>,
}; // satisfies JSONSchemaType<Data_System>;
