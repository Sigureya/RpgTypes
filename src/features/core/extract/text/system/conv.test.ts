import { describe, expect, test, vi } from "vitest";
import type { SystemTexts } from "@RpgTypes/rmmz";
import { convertSystemTypes } from "./conv";
import type { SystemKinds } from "./types";

const data: SystemTexts = {
  gameTitle: "gameTitle",
  currencyUnit: "currencyUnit",
  elements: ["elements1", "elements2"],
  skillTypes: ["skillTypes1", "skillTypes2"],
  weaponTypes: ["weaponTypes1", "weaponTypes2"],
  armorTypes: ["armorTypes1", "armorTypes2"],
  equipTypes: ["equipTypes1", "equipTypes2"],
  terms: {
    messages: {
      actionFailure: "actionFailure",
      actorDamage: "actorDamage",
      actorDrain: "actorDrain",
      actorGain: "actorGain",
      actorLoss: "actorLoss",
      enemyDamage: "enemyDamage",
      enemyDrain: "enemyDrain",
      enemyGain: "enemyGain",
      enemyLoss: "enemyLoss",
      actorNoDamage: "actorNoDamage",
      actorNoHit: "actorNoHit",
      enemyNoDamage: "enemyNoDamage",
      actorRecovery: "actorRecovery",
      enemyRecovery: "enemyRecovery",
      enemyNoHit: "enemyNoHit",
      alwaysDash: "alwaysDash",
      autosave: "autosave",
      bgmVolume: "bgmVolume",
      bgsVolume: "bgsVolume",
      buffAdd: "buffAdd",
      buffRemove: "buffRemove",
      commandRemember: "commandRemember",
      counterAttack: "counterAttack",
      criticalToActor: "criticalToActor",
      criticalToEnemy: "criticalToEnemy",
      defeat: "defeat",
      debuffAdd: "debuffAdd",
      emerge: "emerge",
      escapeFailure: "escapeFailure",
      evasion: "evasion",
      expNext: "expNext",
      escapeStart: "escapeStart",
      expTotal: "expTotal",
      file: "file",
      loadMessage: "loadMessage",
      levelUp: "levelUp",
      possession: "possession",
      saveMessage: "saveMessage",
      magicEvasion: "magicEvasion",
      magicReflection: "magicReflection",
      meVolume: "meVolume",
      obtainExp: "obtainExp",
      obtainGold: "obtainGold",
      obtainItem: "obtainItem",
      obtainSkill: "obtainSkill",
      partyName: "partyName",
      preemptive: "preemptive",
      seVolume: "seVolume",
      substitute: "substitute",
      surprise: "surprise",
      touchUI: "touchUI",
      useItem: "useItem",
      victory: "victory",
    },
    basic: {
      level: "level",
      levelA: "levelA",
      hp: "hp",
      hpA: "hpA",
      mp: "mp",
      mpA: "MP",
      tp: "TP",
      exp: "EXP",
      experience: "Experience",
      tpA: "TP",
    },
    params: {
      agi: "agi",
      atk: "atk",
      def: "def",
      mat: "mat",
      eva: "eva",
      mdf: "mdf",
      luk: "luk",
      hit: "hit",
      mhp: "mhp",
      mmp: "mmp",
    },
    commands: {
      fight: "fight",
      armor: "armor",
      item: "item",
      skill: "skill",
      equip: "equip",
      status: "status",
      formation: "formation",
      options: "options",
      save: "save",
      gameEnd: "gameEnd",
      attack: "attack",
      guard: "guard",
      weapon: "weapon",
      buy: "buy",
      sell: "sell",
      keyItem: "keyItem",
      cancel: "cancel",
      optimize: "optimize",
      clear: "clear",
      newGame: "newGame",
      continueGame: "continueGame",
      toTitle: "toTitle",
      equip2: "equip2",
      escape: "escape",
    },
  },
};

const ALL_TEXT = [
  data.gameTitle,
  data.currencyUnit,
  ...data.elements,
  ...data.skillTypes,
  ...data.weaponTypes,
  ...data.armorTypes,
  ...data.equipTypes,
  ...Object.values(data.terms.basic),
  ...Object.values(data.terms.messages),
  ...Object.values(data.terms.params),
  ...Object.values(data.terms.commands),
];

describe("convertSystemTypes", () => {
  const systemKinds: SystemKinds = {
    gameTitle: "kinds.gameTitle",
    currencyUnit: "kinds.currencyUnit",
    equipTypes: "kinds.equipTypes",
    armorTypes: "kinds.armorTypes",
    weaponTypes: "kinds.weaponTypes",
    elements: "kinds.elements",
    skillTypes: "kinds.skillTypes",
  };
  test("uuidGen に全てのテキストが渡されること", () => {
    const mockUuidGen = vi.fn((text: string) => `uuid-${text}`);
    convertSystemTypes(data, "filename", systemKinds, mockUuidGen);
    ALL_TEXT.forEach((text) => {
      expect(mockUuidGen, text).toHaveBeenCalledWith(text);
    });
  });
  test("result", () => {
    const result = convertSystemTypes(
      data,
      "filename",
      systemKinds,
      (text) => `uuid-${text}`,
    );
    const resultSet: Set<string> = new Set(result.map((item) => item.baseText));
    const allTextSet = new Set(ALL_TEXT);
    expect(resultSet).toEqual(allTextSet);
  });
});
