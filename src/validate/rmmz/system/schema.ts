import type { AudioFileParams } from "@RpgTypes/libs";
import type {
  Data_System,
  System_Bgm,
  System_BooleanGameOptions,
  System_GameEditorBundleRMMZ,
  System_GameInitial,
  System_ImageSize,
  System_Me,
  System_OtherData,
  System_RPG_DataNames,
  System_TextBundle,
  System_TitleImages,
  System_Vehicles,
} from "@RpgTypes/rmmz/system";
import type { System_Bundle } from "@RpgTypes/rmmz/system/core/bundle";
import type { JSONSchemaType, Schema } from "ajv";
import { SCHEMA_SYSTEM_EDITOR_SETTINGS } from "./gameEdit/editorSetting";
import { SCHEMA_SYSTEM_TEST_BATTLER } from "./gameEdit/testBattle";
import { SCHEMA_SYSTEM_ADVANCED } from "./members/advanced";
import { SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION } from "./members/attackMotion";
import { SCHEMA_SYSTEM_ITEM_CATEGORIES } from "./members/itemCategories";
import { SCHEMA_SYSTEM_MENU_COMMANDS_ENABLED } from "./members/menuCommands";
import { SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY } from "./members/trems/basic";
import { SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY } from "./members/trems/commands";
import { SCHEMA_SYSTEM_TERMS_MESSAGES } from "./members/trems/messages";
import { SCHEMA_SYSTEM_PARAM_NAMS_ARRAY } from "./members/trems/paramArray";
import { SCHEMA_SYSTEM_VEHICLE } from "./members/vehicle";

interface System
  extends
    System_BooleanGameOptions,
    System_Vehicles,
    System_GameInitial,
    System_ImageSize,
    System_Bgm,
    System_Me,
    System_RPG_DataNames,
    System_GameEditorBundleRMMZ,
    System_TextBundle,
    System_TitleImages,
    System_OtherData,
    System_Bundle {}

export const SCHEMA_DATA_SYSTEM2 = {
  $defs: {
    Audio: {
      type: "object",
      required: ["name", "volume", "pitch", "pan"],
      additionalProperties: false,
      properties: {
        name: { type: "string" },
        volume: { type: "integer", minimum: 0, maximum: 100 },
        pitch: { type: "integer", minimum: 50, maximum: 150 },
        pan: { type: "integer", minimum: -100, maximum: 100 },
      },
    } as const satisfies JSONSchemaType<AudioFileParams>,
    Vehicle: SCHEMA_SYSTEM_VEHICLE,
    Advanced: SCHEMA_SYSTEM_ADVANCED,
    AttackMotion: SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
    ItemCategories: SCHEMA_SYSTEM_ITEM_CATEGORIES,
    TestBattler: SCHEMA_SYSTEM_TEST_BATTLER,
    Editor: SCHEMA_SYSTEM_EDITOR_SETTINGS,
    MenuCommands: SCHEMA_SYSTEM_MENU_COMMANDS_ENABLED,
    TermsCommands: SCHEMA_SYSTEM_MEMBERS_TERMS_COMMANDS_ARRAY,
    TermsBasic: SCHEMA_SYSTEM_MEMBERS_TERMS_BASIC_ARRAY,
    TermsParams: SCHEMA_SYSTEM_PARAM_NAMS_ARRAY,
    TermsMessages: SCHEMA_SYSTEM_TERMS_MESSAGES,
  },
  type: "object",
  required: [
    "gameTitle",
    "currencyUnit",
    "terms",
    "ship",
    "boat",
    "airship",
    "advanced",
    "titleBgm",
    "battleBgm",
    "gameoverMe",
    "victoryMe",
    "defeatMe",
    "attackMotions",
    "optAutosave",
    "optDisplayTp",
    "optFloorDeath",
    "optFollowers",
    "optKeyItemsNumber",
    "optSideView",
    "optSlipDeath",
    "optTransparent",
    "optSplashScreen",
    "optDrawTitle",
    "optExtraExp",
    "optMessageSkip",
    "startMapId",
    "startX",
    "startY",
    "faceSize",
    "tileSize",
    "iconSize",
    "battleSystem",
    "elements",
    "weaponTypes",
    "armorTypes",
    "equipTypes",
    "skillTypes",
    "switches",
    "variables",
    "magicSkills",
    "battleback1Name",
    "battleback2Name",
    "testTroopId",
    "partyMembersArray",
    "editor",
    "testBattlers",
    "editMapId",
    "battlerHue",
    "battlerName",
    "sounds",
    "title1Name",
    "title2Name",
    "versionId",
    "locale",
    "windowTone",
  ],
  properties: {
    // Texts
    gameTitle: { type: "string" },
    currencyUnit: { type: "string" },
    terms: {
      type: "object",
      additionalProperties: false,
      required: ["messages", "commands", "basic", "params"],
      propeties: {
        messages: { $ref: "#/$defs/TermsMessages" },
        commands: { $ref: "#/$defs/TermsCommands" },
        basic: { $ref: "#/$defs/TermsBasic" },
        params: { $ref: "#/$defs/TermsParams" },
      },
    },
    // Vehicles
    ship: { $ref: "#/$defs/Vehicle" },
    boat: { $ref: "#/$defs/Vehicle" },
    airship: { $ref: "#/$defs/Vehicle" },
    advanced: { $ref: "#/$defs/Advanced" },
    // AudioFiles
    titleBgm: { $ref: "#/$defs/Audio" },
    battleBgm: { $ref: "#/$defs/Audio" },
    gameoverMe: { $ref: "#/$defs/Audio" },
    victoryMe: { $ref: "#/$defs/Audio" },
    defeatMe: { $ref: "#/$defs/Audio" },
    attackMotions: {
      type: "array",
      items: { $ref: "#/$defs/AttackMotion" },
    },
    // Options
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
    battleSystem: { type: "integer", minimum: 0, maximum: 2 },
    // RPG Data Names
    elements: { type: "array", items: { type: "string" } },
    weaponTypes: { type: "array", items: { type: "string" } },
    armorTypes: { type: "array", items: { type: "string" } },
    equipTypes: { type: "array", items: { type: "string" } },
    skillTypes: { type: "array", items: { type: "string" } },
    switches: { type: "array", items: { type: "string" } },
    variables: { type: "array", items: { type: "string" } },
    magicSkills: { type: "array", items: { type: "integer" } },
    // Test Play
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    testTroopId: { type: "integer", minimum: 0 },
    partyMembersArray: {
      type: "array",
      items: { type: "integer" },
    },

    // Editor
    editor: { $ref: "#/$defs/Editor" },
    testBattlers: {
      type: "array",
      items: { $ref: "#/$defs/TestBattler" },
    },
    editMapId: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer" },
    battlerName: { type: "string" },
    sounds: {
      type: "array",
      maxItems: 24,
      minItems: 24,
      items: { $ref: "#/$defs/Audio" },
    },
    title1Name: { type: "string" },
    title2Name: { type: "string" },
    versionId: { type: "integer" },
    locale: { type: "string" },
    windowTone: {
      type: "array",
      items: { type: "integer", minimum: 0, maximum: 255 },
    },
    itemCategories: {
      $ref: "#/$defs/ItemCategories",
    },
    menuCommands: {
      $ref: "#/$defs/MenuCommands",
    },
  } satisfies Record<keyof (System | Data_System), Schema>,
} as const satisfies Schema;
