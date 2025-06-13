import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { Terms_Messages } from "./core";
import {
  SCHEMA_SYSTEM_AUDIOFILES,
  SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  SCHEMA_SYSTEM_GAME_INITIAL,
  SCHEMA_SYSTEM_IMAGE_SIZE,
  SCHEMA_SYSTEM_OTHER_DATA,
  SCHEMA_SYSTEM_RPG_DATA_NAMES,
  SCHEMA_SYSTEM_TERMS_BUNDLE,
  SCHEMA_SYSTEM_TITLE_IMAGES,
} from "./core";
import { SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE } from "./gameEdit";
import { SCHEMA_SYSTEM_PARTIAL_BUNDLE } from "./schemaBundle";
import { allSystemSchema, mergeSystemSchema } from "./schemaMerge";
import type { Data_System } from "./system";
import { isDataSystem } from "./validate";

const mockSystem = {
  optAutosave: true,
  optDisplayTp: true,
  optDrawTitle: true,
  optExtraExp: true,
  optFloorDeath: true,
  optFollowers: true,
  optKeyItemsNumber: true,
  optSideView: true,
  optSlipDeath: true,
  optTransparent: true,
  optMessageSkip: true,
  optSplashScreen: false,
  gameTitle: "Test Game",
  currencyUnit: "Gold",
  title1Name: "Title1",
  title2Name: "Title2",
  battleback1Name: "Battleback1",
  battleback2Name: "Battleback2",
  titleBgm: { name: "TitleBGM", volume: 100, pitch: 100, pan: 0 },
  battleBgm: { name: "BattleBGM", volume: 100, pitch: 100, pan: 0 },
  gameoverMe: { name: "GameoverME", volume: 100, pitch: 100, pan: 0 },
  defeatMe: { name: "DefeatME", volume: 100, pitch: 100, pan: 0 },
  victoryMe: { name: "VictoryME", volume: 100, pitch: 100, pan: 0 },
  boat: {
    characterName: "Boat",
    characterIndex: 0,
    bgm: { name: "BoatBGM", volume: 100, pitch: 100, pan: 0 },
    startMapId: 0,
    startX: 0,
    startY: 0,
  },
  ship: {
    characterName: "Ship",
    characterIndex: 0,
    bgm: { name: "ShipBGM", volume: 100, pitch: 100, pan: 0 },
    startMapId: 0,
    startX: 0,
    startY: 0,
  },
  airship: {
    characterName: "Airship",
    characterIndex: 0,
    bgm: { name: "AirshipBGM", volume: 100, pitch: 100, pan: 0 },
    startMapId: 0,
    startX: 0,
    startY: 0,
  },
  sounds: [
    { name: "Sound1", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound2", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound3", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound4", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound5", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound6", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound7", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound8", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound9", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound10", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound11", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound12", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound13", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound14", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound15", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound16", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound17", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound18", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound19", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound20", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound21", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound22", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound23", volume: 100, pitch: 100, pan: 0 },
    { name: "Sound24", volume: 100, pitch: 100, pan: 0 },
  ],
  armorTypes: ["Armor1", "Armor2"],
  elements: ["Element1", "Element2"],
  equipTypes: ["EquipType1", "EquipType2"],
  weaponTypes: ["WeaponType1", "WeaponType2"],
  skillTypes: ["SkillType1", "SkillType2"],
  switches: ["Switch1", "Switch2"],
  variables: ["Variable1", "Variable2"],
  magicSkills: [1, 4],
  attackMotions: [
    {
      type: 4,
      weaponImageId: 3,
    },
  ],
  testBattlers: [{ actorId: 1, equips: [12, 45], level: 85 }],
  advanced: {
    fallbackFonts: "",
    fontSize: 28,
    gameId: 0xe653,
    mainFontFilename: "GameFont",
    numberFontFilename: "ggg",
    screenWidth: 816,
    screenHeight: 624,
    screenScale: 1,
    uiAreaHeight: 0,
    uiAreaWidth: 0,
    windowOpacity: 255,
  },
  battlerHue: 0,
  battlerName: "BattlerName",
  editMapId: 0,
  locale: "en-US",
  startMapId: 0,
  startX: 0,
  startY: 0,
  testTroopId: 0,
  windowTone: [0, 0, 0, 0],
  battleSystem: 0,
  faceSize: 48,
  iconSize: 32,
  tileSize: 48,
  terms: {
    basic: [
      "level",
      "levelA",
      "hp",
      "hpA",
      "mp",
      "mpA",
      "tp",
      "tpA",
      "experience",
      "exp",
    ],
    commands: [
      "fight",
      "escape",
      "attack",
      "guard",
      "item",
      "skill",
      "equip",
      "status",
      "formation",
      "save",
      "gameEnd",
      "options",
      "weapon",
      "armor",
      "keyItem",
      "equip2",
      "optimize",
      "clear",
      "newGame",
      "continue_",
      "",
      "toTitle",
      "cancel",
      "",
      "buy",
      "sell",
    ],
    params: [
      "mhp",
      "mmp",
      "atk",
      "def",
      "mat",
      "mdf",
      "agi",
      "luk",
      "hit",
      "eva",
    ],
    messages: {
      actionFailure: "Action Failure",
      actorDamage: "Actor Damage",
      actorNoDamage: "Actor No Damage",
      actorRecovery: "Actor Recovery",
      actorNoHit: "Actor No Hit",
      actorDrain: "Actor Drain",
      actorGain: "Actor Gain",
      actorLoss: "Actor Loss",
      alwaysDash: "Always Dash",
      autosave: "Autosave",
      bgmVolume: "BGM Volume",
      bgsVolume: "BGS Volume",
      commandRemember: "Command Remember",
      criticalToActor: "Critical To Actor",
      criticalToEnemy: "Critical To Enemy",
      counterAttack: "Counter Attack",
      debuffAdd: "Debuff Add",
      defeat: "Defeat",
      enemyDamage: "Enemy Damage",
      enemyNoDamage: "Enemy No Damage",
      enemyRecovery: "Enemy Recovery",
      enemyDrain: "Enemy Drain",
      enemyGain: "Enemy Gain",
      enemyLoss: "Enemy Loss",
      enemyNoHit: "Enemy No Hit",
      evasion: "Evasion",
      escapeFailure: "Escape Failure",
      escapeStart: "Escape Start",
      emerge: "Emerge",
      expNext: "Exp Next",
      expTotal: "Exp Total",
      file: "File",
      buffAdd: "Buff Add",
      buffRemove: "Buff Remove",
      obtainExp: "Obtain Exp",
      obtainGold: "Obtain Gold",
      obtainItem: "Obtain Item",
      obtainSkill: "Obtain Skill",
      levelUp: "Level Up",
      partyName: "Party Name",
      loadMessage: "Load Message",
      meVolume: "ME Volume",
      possession: "Possession",
      preemptive: "Preemptive",
      saveMessage: "Save Message",
      seVolume: "SE Volume",
      magicEvasion: "Magic Evasion",
      magicReflection: "Magic Reflection",
      substitute: "Substitute",
      surprise: "Surprise",
      useItem: "Use Item",
      touchUI: "Touch UI",
      victory: "Victory",
    } satisfies Terms_Messages,
  },
  versionId: 1,
  partyMembersArray: [1, 2, 3],
  itemCategories: [true, true, false, false],
  menuCommands: [true, true, true, false, false, false],
  editor: {
    jsonFormatLevel: 0,
    messageWidth1: 0,
    messageWidth2: 0,
  },
} as const satisfies Data_System;

interface PartialSystemSchema {
  required: ReadonlyArray<keyof Data_System>;
  properties: Record<string, object>;
  additionalProperties: false;
  type: "object";
}

interface SchemaCase {
  schema: PartialSystemSchema;
  caseName: string;
}

const allSchema = [
  {
    caseName: "PartialBundle",
    schema: SCHEMA_SYSTEM_PARTIAL_BUNDLE,
  },
  {
    caseName: "TermsBundle",
    schema: SCHEMA_SYSTEM_TERMS_BUNDLE,
  },
  {
    caseName: "RPG DataNames",
    schema: SCHEMA_SYSTEM_RPG_DATA_NAMES,
  },
  {
    caseName: "BooleanOptions",
    schema: SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  },
  {
    caseName: "BooleanGameMenuOptions",
    schema: SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  },
  {
    caseName: "AudioFiles",
    schema: SCHEMA_SYSTEM_AUDIOFILES,
  },
  {
    caseName: "BattleRuleRMMZ",
    schema: SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  },
  {
    caseName: "ImageSize",
    schema: SCHEMA_SYSTEM_IMAGE_SIZE,
  },
  {
    caseName: "TitleImages",
    schema: SCHEMA_SYSTEM_TITLE_IMAGES,
  },
  {
    caseName: "GameInitial",
    schema: SCHEMA_SYSTEM_GAME_INITIAL,
  },
  {
    caseName: "OtherData",
    schema: SCHEMA_SYSTEM_OTHER_DATA,
  },
  {
    caseName: "GameEditorBundle",
    schema: SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE,
  },
] as const satisfies SchemaCase[];

describe("Each schema validates systemData", () => {
  const ajv = new Ajv({ strict: false });
  allSchema.forEach(({ schema, caseName }) => {
    test(`Schema: ${caseName} validates mockSystem`, () => {
      expect(schema).toBeDefined();
      const validate = ajv.compile({
        ...schema,
        additionalProperties: true,
      });
      expect(mockSystem).toSatisfy(validate);
    });
  });
});

describe("Schema coverage and consistency checks", () => {
  const dataKeys: string[] = Object.keys(mockSystem);
  const schemaKeys: string[] = allSchema.flatMap<string>(({ schema }) => {
    return schema.required;
  });
  const schemaSet: ReadonlySet<string> = new Set(schemaKeys);
  describe("schema keys are not duplicated", () => {
    test("Simple check", () => {
      expect(schemaKeys.length).toBe(schemaSet.size);
    });
    test("Strict check", () => {
      expect(schemaKeys.toSorted()).toEqual(Array.from(schemaSet).toSorted());
    });
  });
  describe("schema keys are not missing", () => {
    test("All required schema keys are present", () => {
      expect(dataKeys.filter((k) => !schemaSet.has(k))).toEqual([]);
    });
  });
  describe("functions", () => {
    test("allSystemSchema", () => {
      const all = new Set<PartialSystemSchema>(allSystemSchema());
      const mocks = new Set(allSchema.map(({ schema }) => schema));
      expect(all).toEqual(mocks);
    });
    test("mergeSystemSchema", () => {
      const systemSchema: PartialSystemSchema = mergeSystemSchema(
        allSystemSchema()
      );
      const ajv = new Ajv({ strict: true });
      const validate = ajv.compile(systemSchema);
      expect(mockSystem).toSatisfy(validate);
    });
    test("isDataSystem", () => {
      expect(isDataSystem(mockSystem)).toBe(true);
    });
    // This file only tests normal cases.
    // Abnormal cases will be tested in validate.test.ts.
  });
});
