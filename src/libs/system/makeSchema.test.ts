import { describe, test, expect } from "vitest";
import type { SchemaObject } from "ajv";
import Ajv from "ajv";
import type { Terms_Messages } from "./core";
import {
  SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  SCHEMA_SYSTEM_GAME_INITIAL,
} from "./core";
import { SCHEMA_SYSTEM_AUDIOFILES } from "./core/audio/schema";
import {
  SCHEMA_SYSTEM_IMAGE_SIZE,
  SCHEMA_SYSTEM_TITLE_IMAGES,
} from "./core/images/schema";
import { SCHEMA_SYSTEM_RPG_DATA_NAMES } from "./core/rpgDataTypes/schema";
import { SCHEMA_SYSTEM_TEST_PLAY } from "./gameEdit/testPlay/schema";
import {
  SCHEMA_SYSTEM_PARTIAL_BUNDLE,
  SCHEMA_SYSTEM_TERMS_BUNDLE,
} from "./makeSchema";
import type { Data_System } from "./system";

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

interface SchemaCase {
  schema: SchemaObject;
  caseName: string;
}

const allSchema = [
  {
    caseName: "SCHEMA_SYSTEM_BOOLEAN_OPTIONS",
    schema: SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  },
  {
    caseName: "SCHEMA_SYSTEM_AUDIOFILES",
    schema: SCHEMA_SYSTEM_AUDIOFILES,
  },
  {
    caseName: "SCHEMA_SYSTEM_PARTIAL_BUNDLE",
    schema: SCHEMA_SYSTEM_PARTIAL_BUNDLE,
  },
  {
    caseName: "TestPlay",
    schema: SCHEMA_SYSTEM_TEST_PLAY,
  },
  {
    caseName: "rpgDataTypes",
    schema: SCHEMA_SYSTEM_RPG_DATA_NAMES,
  },
  {
    caseName: "image size",
    schema: SCHEMA_SYSTEM_IMAGE_SIZE,
  },
  {
    caseName: "title image",
    schema: SCHEMA_SYSTEM_TITLE_IMAGES,
  },
  {
    caseName: "SCHEMA_SYSTEM_VEHICLE",
    schema: SCHEMA_SYSTEM_TERMS_BUNDLE,
  },
  {
    caseName: "gameInit",
    schema: SCHEMA_SYSTEM_GAME_INITIAL,
  },
] as const satisfies SchemaCase[];

describe("部分的なSchemaの検証", () => {
  const ajv = new Ajv({ strict: false });
  allSchema.forEach(({ schema, caseName }) => {
    test(caseName, () => {
      expect(schema).toBeDefined();
      const validate = ajv.compile({
        ...schema,
        additionalProperties: true,
      });
      expect(mockSystem).toSatisfy(validate);
    });
  });
});

describe("全てのSchemaを実装してあるか？", () => {
  const dataKeys: string[] = Object.keys(mockSystem);
  const schemaKeys: string[] = allSchema.flatMap<string>(({ schema }) => {
    return schema.required;
  });
  const schemaSet: ReadonlySet<string> = new Set(schemaKeys);
  describe("schemaのkeyは重複してない", () => {
    test("簡易チェック", () => {
      expect(schemaKeys.length).toBe(schemaSet.size);
    });
    test("厳密チェック", () => {
      expect(schemaKeys.toSorted()).toEqual(Array.from(schemaSet).toSorted());
    });
  });
  test("", () => {
    expect(dataKeys.filter((k) => !schemaSet.has(k))).toEqual([]);
  });
});
