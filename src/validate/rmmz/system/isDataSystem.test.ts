import { describe, test, expect } from "vitest";
import type { Data_System, Terms_Messages } from "@RpgTypes/rmmz";
import { makeSystemData } from "@RpgTypes/rmmz";
import { SCHEMA_DATA_SYSTEM } from "./schema";
const validate = require("./systemValidate.cjs");

const isDataSystem = (data: unknown): data is Data_System => {
  return validate(data);
};

const mockSystem: Data_System = {
  optAutosave: true,
  optDisplayTp: false,
  optDrawTitle: true,
  optExtraExp: false,
  optFloorDeath: true,
  optFollowers: false,
  optKeyItemsNumber: true,
  optSideView: false,
  optSlipDeath: true,
  optTransparent: false,
  optMessageSkip: true,
  optSplashScreen: false,
  gameTitle: "Test Game",
  currencyUnit: "Gold",
  titleCommandWindow: {
    background: 1,
    offsetX: 120,
    offsetY: 240,
  },
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
    { name: "cursor", volume: 100, pitch: 100, pan: 0 },
    { name: "ok", volume: 100, pitch: 100, pan: 0 },
    { name: "cancel", volume: 100, pitch: 100, pan: 0 },
    { name: "buzzer", volume: 100, pitch: 100, pan: 0 },
    { name: "equip", volume: 100, pitch: 100, pan: 0 },
    { name: "save", volume: 100, pitch: 100, pan: 0 },
    { name: "load", volume: 100, pitch: 100, pan: 0 },
    { name: "battleStart", volume: 100, pitch: 100, pan: 0 },
    { name: "escape", volume: 100, pitch: 100, pan: 0 },
    { name: "enemyAttack", volume: 100, pitch: 100, pan: 0 },
    { name: "enemyDamage", volume: 100, pitch: 100, pan: 0 },
    { name: "enemyCollapse", volume: 100, pitch: 100, pan: 0 },
    { name: "bossCollapse1", volume: 100, pitch: 100, pan: 0 },
    { name: "bossCollapse2", volume: 100, pitch: 100, pan: 0 },
    { name: "actorDamage", volume: 100, pitch: 100, pan: 0 },
    { name: "actorCollapse", volume: 100, pitch: 100, pan: 0 },
    { name: "playRecovery", volume: 100, pitch: 100, pan: 0 },
    { name: "playMiss", volume: 100, pitch: 100, pan: 0 },
    { name: "playEvasion", volume: 100, pitch: 100, pan: 0 },
    { name: "playMagicEvasion", volume: 100, pitch: 100, pan: 0 },
    { name: "playReflection", volume: 100, pitch: 100, pan: 0 },
    { name: "shop", volume: 100, pitch: 100, pan: 0 },
    { name: "useItem", volume: 100, pitch: 100, pan: 0 },
    { name: "useSkill", volume: 100, pitch: 100, pan: 0 },
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
    { type: 4, weaponImageId: 3 },
    { type: 5, weaponImageId: 6 },
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
  editMapId: 956,
  locale: "ja-JP",
  startMapId: 58,
  startX: 22,
  startY: 44,
  testTroopId: 0,
  windowTone: [0, 0, 0, 0],
  battleSystem: 1,
  faceSize: 144,
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
      "continue",
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
  partyMembers: [1, 2, 3],
  itemCategories: [true, true, false, false],
  menuCommands: [true, true, true, false, false, false],
  editor: {
    jsonFormatLevel: 0,
    messageWidth1: 816,
    messageWidth2: 816,
  },
};

describe("makeSystemData", () => {
  test("should create a Data_System object with default values", () => {
    const data: Data_System = makeSystemData({});
    const keys1 = new Set(Object.keys(data));
    const keys2 = new Set(Object.keys(mockSystem));
    expect(keys1).toEqual(keys2);
  });
  test("should invalidate an incorrect Data_System object", () => {
    const data = makeSystemData({});
    expect(data).toSatisfy(isDataSystem);
  });
});
describe("isDataSystem", () => {
  test("should validate a correct Data_System object", () => {
    expect(mockSystem).toSatisfy(isDataSystem);
  });
});

describe("Schema coverage and consistency checks", () => {
  const dataKeys: string[] = Object.keys(mockSystem);
  const schemaKeys: string[] = Object.keys(SCHEMA_DATA_SYSTEM.properties);
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
});
