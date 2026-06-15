import { describe, expect, test } from "vitest";
import type { Data_System } from "@RpgTypes/rmmz";
import { makeTestSystemData } from "@RpgTypes/rmmz";
import type { SystemTexts } from "./core/types";
import {
  extractTextFromSystem,
  replaceSystemTextData,
  replaceSystemTextDictionary,
} from "./terms";

const OLD_TEXT = "Old Text";
const NEW_TEXT = "New Text";
const makeTestData = () => {
  return makeTestSystemData({
    systemText: OLD_TEXT,
    audio: "audio",
    image: "image",
    switches: "switches",
    variables: "variables",
  });
};

const TEXT_DATA: SystemTexts = {
  gameTitle: "Game Title",
  currencyUnit: "Currency Unit",
  equipTypes: ["Equip Type 1", "Equip Type 2"],
  armorTypes: ["Armor Type 1", "Armor Type 2"],
  elements: ["Element 1", "Element 2"],
  skillTypes: ["Skill Type 1", "Skill Type 2"],
  weaponTypes: ["Weapon Type 1", "Weapon Type 2"],
  terms: {
    messages: {
      actionFailure: "Action Failed",
      actorDamage: "Actor Damage",
      actorDrain: "Actor Drain",
      actorGain: "Actor Gain",
      actorLoss: "Actor Loss",
      actorNoDamage: "Actor No Damage",
      actorNoHit: "Actor No Hit",
      enemyDamage: "Enemy Damage",
      enemyDrain: "Enemy Drain",
      actorRecovery: "Actor Recovery",
      enemyRecovery: "Enemy Recovery",
      enemyNoDamage: "Enemy No Damage",
      alwaysDash: "Always Dash",
      commandRemember: "Command Remember",
      defeat: "Defeat",
      autosave: "Autosave",
      bgmVolume: "BGM Volume",
      bgsVolume: "BGS Volume",
      meVolume: "ME Volume",
      buffAdd: "Buff Add",
      debuffAdd: "Debuff Add",
      buffRemove: "Buff Remove",
      counterAttack: "Counter Attack",
      magicReflection: "Magic Reflection",
      substitute: "Substitute",
      criticalToActor: "Critical To Actor",
      criticalToEnemy: "Critical To Enemy",
      emerge: "Emerge",
      preemptive: "Preemptive",
      surprise: "Surprise",
      enemyGain: "Enemy Gain",
      enemyLoss: "Enemy Loss",
      levelUp: "Level Up",
      enemyNoHit: "Enemy No Hit",
      escapeFailure: "Escape Failure",
      escapeStart: "Escape Start",
      evasion: "Evasion",
      expNext: "Exp Next",
      expTotal: "Exp Total",
      file: "File",
      loadMessage: "Load Message",
      saveMessage: "Save Message",
      victory: "Victory",
      magicEvasion: "Magic Evasion",
      obtainExp: "Obtain Exp",
      obtainItem: "Obtain Item",
      obtainGold: "Obtain Gold",
      obtainSkill: "Obtain Skill",
      partyName: "Party Name",
      possession: "Possession",
      seVolume: "SE Volume",
      touchUI: "Touch UI",
      useItem: "Use Item",
    },
    basic: {
      experience: "Experience",
      exp: "EXP",
      hp: "HP",
      hpA: "HP",
      level: "Level",
      levelA: "Lv",
      mp: "MP",
      mpA: "MP",
      tp: "TP",
      tpA: "TP",
    },
    commands: {
      attack: "Attack",
      guard: "Guard",
      item: "Item",
      skill: "Skill",
      equip: "Equip",
      status: "Status",
      formation: "Formation",
      save: "Save",
      gameEnd: "Game End",
      options: "Options",
      cancel: "Cancel",
      armor: "Armor",
      keyItem: "Key Item",
      weapon: "Weapon",
      buy: "Buy",
      sell: "Sell",
      clear: "Clear",
      newGame: "New Game",
      continueGame: "Continue",
      equip2: "Equip2",
      escape: "Escape",
      fight: "Fight",
      optimize: "Optimize",
      toTitle: "To Title",
    },
    params: {
      hit: "Hit Rate",
      agi: "Agility",
      eva: "Evasion",
      atk: "Attack",
      def: "Defense",
      mat: "Magic Attack",
      mdf: "Magic Defense",
      luk: "Luck",
      mhp: "Max HP",
      mmp: "Max MP",
    },
  },
};

describe("replaceSystemTextEx", () => {
  describe("テキストの正しい置換", () => {
    test("システムテキストが正しく置換されているか", () => {
      const system = makeTestData();
      const result = replaceSystemTextData(system, TEXT_DATA);
      const e2: SystemTexts = extractTextFromSystem(result);
      expect(e2).toEqual(TEXT_DATA);
    });
    test("システムテキストが正しく置換されているか", () => {
      const system: Data_System = makeTestData();
      const result: Data_System = replaceSystemTextData(system, TEXT_DATA);
      expect(result.elements).toEqual(TEXT_DATA.elements);
      expect(result.elements).not.toBe(TEXT_DATA.elements);
      expect(result.equipTypes).toEqual(TEXT_DATA.equipTypes);
      expect(result.equipTypes).not.toBe(TEXT_DATA.equipTypes);
      expect(result.armorTypes).toEqual(TEXT_DATA.armorTypes);
      expect(result.armorTypes).not.toBe(TEXT_DATA.armorTypes);
      expect(result.weaponTypes).toEqual(TEXT_DATA.weaponTypes);
      expect(result.weaponTypes).not.toBe(TEXT_DATA.weaponTypes);
      expect(result.skillTypes).toEqual(TEXT_DATA.skillTypes);
      expect(result.skillTypes).not.toBe(TEXT_DATA.skillTypes);
    });
  });

  describe("テキスト以外のプロパティの維持", () => {
    test("音声", () => {
      const system = makeTestData();
      const result = replaceSystemTextData(system, TEXT_DATA);
      expect(result.battleBgm).toEqual(system.battleBgm);
      expect(result.titleBgm).toEqual(system.titleBgm);
      expect(result.defeatMe).toEqual(system.defeatMe);
      expect(result.gameoverMe).toEqual(system.gameoverMe);
      expect(result.victoryMe).toEqual(system.victoryMe);
      expect(result.sounds).toEqual(system.sounds);
    });
    test("", () => {
      const system = makeTestData();
      const result = replaceSystemTextData(system, TEXT_DATA);
      expect(result.locale).toBe(system.locale);
      expect(result.versionId).toBe(system.versionId);
      expect(result.advanced).toEqual(system.advanced);
      expect(result.editor).toEqual(system.editor);
    });
    test("乗り物の名称が維持されているか", () => {
      const system = makeTestData();
      const result = replaceSystemTextData(system, TEXT_DATA);
      expect(result.boat).toEqual(system.boat);
      expect(result.ship).toEqual(system.ship);
      expect(result.airship).toEqual(system.airship);
    });
    test("サイズ関連のプロパティが維持されているか", () => {
      const system = makeTestData();
      const result = replaceSystemTextData(system, TEXT_DATA);
      expect(result.tileSize).toBe(system.tileSize);
      expect(result.faceSize).toBe(system.faceSize);
      expect(result.iconSize).toBe(system.iconSize);
    });
    test("boolean[]なパラメータが維持されるか", () => {
      const system = makeTestData();
      const result = replaceSystemTextData(system, TEXT_DATA);
      expect(result.menuCommands).toEqual(system.menuCommands);
      expect(result.itemCategories).toEqual(system.itemCategories);
    });
  });
});

const OLD_SYSTEM_TEXTS: SystemTexts = {
  gameTitle: OLD_TEXT,
  currencyUnit: OLD_TEXT,
  equipTypes: [OLD_TEXT, OLD_TEXT],
  armorTypes: [OLD_TEXT, OLD_TEXT],
  elements: [OLD_TEXT, OLD_TEXT],
  skillTypes: [OLD_TEXT, OLD_TEXT],
  weaponTypes: [OLD_TEXT, OLD_TEXT],
  terms: {
    params: {
      hit: OLD_TEXT,
      agi: OLD_TEXT,
      eva: OLD_TEXT,
      atk: OLD_TEXT,
      def: OLD_TEXT,
      mat: OLD_TEXT,
      mdf: OLD_TEXT,
      luk: OLD_TEXT,
      mhp: OLD_TEXT,
      mmp: OLD_TEXT,
    },
    basic: {
      experience: OLD_TEXT,
      exp: OLD_TEXT,
      hp: OLD_TEXT,
      hpA: OLD_TEXT,
      level: OLD_TEXT,
      levelA: OLD_TEXT,
      mp: OLD_TEXT,
      mpA: OLD_TEXT,
      tp: OLD_TEXT,
      tpA: OLD_TEXT,
    },
    commands: {
      attack: OLD_TEXT,
      guard: OLD_TEXT,
      item: OLD_TEXT,
      skill: OLD_TEXT,
      equip: OLD_TEXT,
      status: OLD_TEXT,
      formation: OLD_TEXT,
      save: OLD_TEXT,
      gameEnd: OLD_TEXT,
      options: OLD_TEXT,
      cancel: OLD_TEXT,
      armor: OLD_TEXT,
      keyItem: OLD_TEXT,
      weapon: OLD_TEXT,
      buy: OLD_TEXT,
      sell: OLD_TEXT,
      clear: OLD_TEXT,
      newGame: OLD_TEXT,
      continueGame: OLD_TEXT,
      equip2: OLD_TEXT,
      escape: OLD_TEXT,
      fight: OLD_TEXT,
      optimize: OLD_TEXT,
      toTitle: OLD_TEXT,
    },
    messages: {
      actionFailure: OLD_TEXT,
      actorDamage: OLD_TEXT,
      actorDrain: OLD_TEXT,
      actorGain: OLD_TEXT,
      actorLoss: OLD_TEXT,
      actorNoDamage: OLD_TEXT,
      actorNoHit: OLD_TEXT,
      enemyDamage: OLD_TEXT,
      enemyDrain: OLD_TEXT,
      actorRecovery: OLD_TEXT,
      enemyRecovery: OLD_TEXT,
      enemyNoDamage: OLD_TEXT,
      alwaysDash: OLD_TEXT,
      commandRemember: OLD_TEXT,
      defeat: OLD_TEXT,
      autosave: OLD_TEXT,
      bgmVolume: OLD_TEXT,
      bgsVolume: OLD_TEXT,
      meVolume: OLD_TEXT,
      buffAdd: OLD_TEXT,
      debuffAdd: OLD_TEXT,
      buffRemove: OLD_TEXT,
      counterAttack: OLD_TEXT,
      magicReflection: OLD_TEXT,
      substitute: OLD_TEXT,
      criticalToActor: OLD_TEXT,
      criticalToEnemy: OLD_TEXT,
      emerge: OLD_TEXT,
      preemptive: OLD_TEXT,
      surprise: OLD_TEXT,
      enemyGain: OLD_TEXT,
      enemyLoss: OLD_TEXT,
      levelUp: OLD_TEXT,
      enemyNoHit: OLD_TEXT,
      escapeFailure: OLD_TEXT,
      escapeStart: OLD_TEXT,
      evasion: OLD_TEXT,
      expNext: OLD_TEXT,
      expTotal: OLD_TEXT,
      file: OLD_TEXT,
      loadMessage: OLD_TEXT,
      saveMessage: OLD_TEXT,
      victory: OLD_TEXT,
      magicEvasion: OLD_TEXT,
      obtainExp: OLD_TEXT,
      obtainItem: OLD_TEXT,
      obtainGold: OLD_TEXT,
      obtainSkill: OLD_TEXT,
      partyName: OLD_TEXT,
      possession: OLD_TEXT,
      seVolume: OLD_TEXT,
      touchUI: OLD_TEXT,
      useItem: OLD_TEXT,
    },
  },
};

const NEW_SYSTEM_TEXTS: SystemTexts = {
  gameTitle: NEW_TEXT,
  currencyUnit: NEW_TEXT,
  equipTypes: [NEW_TEXT, NEW_TEXT],
  armorTypes: [NEW_TEXT, NEW_TEXT],
  elements: [NEW_TEXT, NEW_TEXT],
  skillTypes: [NEW_TEXT, NEW_TEXT],
  weaponTypes: [NEW_TEXT, NEW_TEXT],
  terms: {
    params: {
      hit: NEW_TEXT,
      agi: NEW_TEXT,
      eva: NEW_TEXT,
      atk: NEW_TEXT,
      def: NEW_TEXT,
      mat: NEW_TEXT,
      mdf: NEW_TEXT,
      luk: NEW_TEXT,
      mhp: NEW_TEXT,
      mmp: NEW_TEXT,
    },
    basic: {
      experience: NEW_TEXT,
      exp: NEW_TEXT,
      hp: NEW_TEXT,
      hpA: NEW_TEXT,
      level: NEW_TEXT,
      levelA: NEW_TEXT,
      mp: NEW_TEXT,
      mpA: NEW_TEXT,
      tp: NEW_TEXT,
      tpA: NEW_TEXT,
    },
    commands: {
      attack: NEW_TEXT,
      guard: NEW_TEXT,
      item: NEW_TEXT,
      skill: NEW_TEXT,
      equip: NEW_TEXT,
      status: NEW_TEXT,
      formation: NEW_TEXT,
      save: NEW_TEXT,
      gameEnd: NEW_TEXT,
      options: NEW_TEXT,
      cancel: NEW_TEXT,
      armor: NEW_TEXT,
      keyItem: NEW_TEXT,
      weapon: NEW_TEXT,
      buy: NEW_TEXT,
      sell: NEW_TEXT,
      clear: NEW_TEXT,
      newGame: NEW_TEXT,
      continueGame: NEW_TEXT,
      equip2: NEW_TEXT,
      escape: NEW_TEXT,
      fight: NEW_TEXT,
      optimize: NEW_TEXT,
      toTitle: NEW_TEXT,
    },
    messages: {
      actionFailure: NEW_TEXT,
      actorDamage: NEW_TEXT,
      actorDrain: NEW_TEXT,
      actorGain: NEW_TEXT,
      actorLoss: NEW_TEXT,
      actorNoDamage: NEW_TEXT,
      actorNoHit: NEW_TEXT,
      enemyDamage: NEW_TEXT,
      enemyDrain: NEW_TEXT,
      actorRecovery: NEW_TEXT,
      enemyRecovery: NEW_TEXT,
      enemyNoDamage: NEW_TEXT,
      alwaysDash: NEW_TEXT,
      commandRemember: NEW_TEXT,
      defeat: NEW_TEXT,
      autosave: NEW_TEXT,
      bgmVolume: NEW_TEXT,
      bgsVolume: NEW_TEXT,
      meVolume: NEW_TEXT,
      buffAdd: NEW_TEXT,
      debuffAdd: NEW_TEXT,
      buffRemove: NEW_TEXT,
      counterAttack: NEW_TEXT,
      magicReflection: NEW_TEXT,
      substitute: NEW_TEXT,
      criticalToActor: NEW_TEXT,
      criticalToEnemy: NEW_TEXT,
      emerge: NEW_TEXT,
      preemptive: NEW_TEXT,
      surprise: NEW_TEXT,
      enemyGain: NEW_TEXT,
      enemyLoss: NEW_TEXT,
      levelUp: NEW_TEXT,
      enemyNoHit: NEW_TEXT,
      escapeFailure: NEW_TEXT,
      escapeStart: NEW_TEXT,
      evasion: NEW_TEXT,
      expNext: NEW_TEXT,
      expTotal: NEW_TEXT,
      file: NEW_TEXT,
      loadMessage: NEW_TEXT,
      saveMessage: NEW_TEXT,
      victory: NEW_TEXT,
      magicEvasion: NEW_TEXT,
      obtainExp: NEW_TEXT,
      obtainItem: NEW_TEXT,
      obtainGold: NEW_TEXT,
      obtainSkill: NEW_TEXT,
      partyName: NEW_TEXT,
      possession: NEW_TEXT,

      seVolume: NEW_TEXT,
      touchUI: NEW_TEXT,
      useItem: NEW_TEXT,
    },
  },
};

describe("extractTextFromSystem", () => {
  const system = makeTestData();
  test("システムテキストが正しく抽出されているか", () => {
    const result = extractTextFromSystem(system);
    expect(result).toEqual(OLD_SYSTEM_TEXTS);
  });
  test("システムテキストが正しく抽出されているか（置換後のデータで確認）", () => {
    const newSystem: Data_System = replaceSystemTextData(system, TEXT_DATA);
    const result: SystemTexts = extractTextFromSystem(newSystem);
    expect(result).toEqual(TEXT_DATA);
  });
});

describe("replaceSystemTextDictionary", () => {
  test("テキストの置換が正しく行われているか", () => {
    const result = replaceSystemTextDictionary(OLD_SYSTEM_TEXTS, (text) => {
      if (text === OLD_TEXT) {
        return NEW_TEXT;
      }
      return text;
    });
    expect(result).toEqual(NEW_SYSTEM_TEXTS);
  });
});
