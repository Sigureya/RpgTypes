import type {
  AttackMotion,
  EditorSettings,
  System_Advanced,
  System_Bgm,
  System_BooleanGameOptions,
  System_GameInitial,
  System_ImageSize,
  System_Me,
  System_Vehicles,
} from "@RpgTypes/rmmz";
import type { JSONSchemaType, Schema } from "ajv";
import { SCHEMA_SYSTEM_EDITOR_SETTINGS } from "./gameEdit/editorSetting";
import { SCHEMA_SYSTEM_ADVANCED } from "./members/adovanced";
import { SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION } from "./members/attackMotion";
import { SCHEMA_AUDIO_FILE_PARAMS_SYSTEM } from "./members/schema";
import { SCHEMA_SYSTEM_VEHICLE } from "./members/vehicle";

interface System
  extends
    System_BooleanGameOptions,
    System_Vehicles,
    System_GameInitial,
    System_ImageSize,
    System_Bgm,
    System_Me,
    Members {}

interface Members {
  advanced: System_Advanced;
  battleSystem: number;
  attackMotions: AttackMotion[];
  editor: EditorSettings;

  //  sounds: System_SoundsArray;
}

export const SCHEMA_DATA_SYSTEM2: JSONSchemaType<System> = {
  type: "object",
  required: [
    "ship",
    "boat",
    "airship",
    "optAutosave",
    "optDisplayTp",
    "optFloorDeath",
    "optFollowers",
    "optKeyItemsNumber",
    "optSideView",
    "optSlipDeath",
    "optTransparent",
    "optSplashScreen",
    "optMessageSkip",
  ],
  properties: {
    ship: SCHEMA_SYSTEM_VEHICLE,
    boat: SCHEMA_SYSTEM_VEHICLE,
    airship: SCHEMA_SYSTEM_VEHICLE,
    advanced: SCHEMA_SYSTEM_ADVANCED,
    titleBgm: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
    battleBgm: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
    gameoverMe: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
    victoryMe: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
    defeatMe: SCHEMA_AUDIO_FILE_PARAMS_SYSTEM,
    editor: SCHEMA_SYSTEM_EDITOR_SETTINGS,
    attackMotions: {
      type: "array",
      items: SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
    },
    optAutosave: { type: "boolean" },
    optDisplayTp: { type: "boolean" },
    optFloorDeath: { type: "boolean" },
    optFollowers: { type: "boolean" },
    optKeyItemsNumber: { type: "boolean" },
    optSideView: { type: "boolean" },
    optSlipDeath: { type: "boolean" },
    optTransparent: { type: "boolean" },
    optSplashScreen: { type: "boolean" },
    optDrawTitle: { type: "boolean" },
    optExtraExp: { type: "boolean" },
    optMessageSkip: { type: "boolean" },
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0 },
    startY: { type: "integer", minimum: 0 },
    faceSize: { type: "integer", minimum: 0 },
    tileSize: { type: "integer", minimum: 0 },
    iconSize: { type: "integer", minimum: 0 },
    partyMembersArray: {
      type: "array",
      items: { type: "integer" },
    },
    battleSystem: { type: "integer", minimum: 0, maximum: 2 },
  } as const satisfies Record<keyof System, Schema>,
};
