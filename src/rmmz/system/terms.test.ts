import { describe, expect, test } from "vitest";
import { makeTestSystemData } from "@RpgTypes/rmmz";
import type { ExtractedSystemTexts } from "./core/types";
import { extractTextFromSystem, replaceSystemTextEx } from "./terms";

const makeTestData = () => {
  return makeTestSystemData({
    text: "",
    audio: "audio",
    image: "image",
    switches: "switches",
    variables: "variables",
  });
};

const TEXT_DATA: ExtractedSystemTexts = {
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
      const result = replaceSystemTextEx(system, TEXT_DATA);
      const e2: ExtractedSystemTexts = extractTextFromSystem(result);
      expect(e2).toEqual(TEXT_DATA);
    });
    test("システムテキストが正しく置換されているか", () => {
      const system = makeTestData();
      const result = replaceSystemTextEx(system, TEXT_DATA);
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
      const result = replaceSystemTextEx(system, TEXT_DATA);
      expect(result.battleBgm).toEqual(system.battleBgm);
      expect(result.titleBgm).toEqual(system.titleBgm);
      expect(result.defeatMe).toEqual(system.defeatMe);
      expect(result.gameoverMe).toEqual(system.gameoverMe);
      expect(result.victoryMe).toEqual(system.victoryMe);
      expect(result.sounds).toEqual(system.sounds);
    });
    test("", () => {
      const system = makeTestData();
      const result = replaceSystemTextEx(system, TEXT_DATA);
      expect(result.locale).toBe(system.locale);
      expect(result.versionId).toBe(system.versionId);
      expect(result.advanced).toEqual(system.advanced);
      expect(result.editor).toEqual(system.editor);
    });
    test("乗り物の名称が維持されているか", () => {
      const system = makeTestData();
      const result = replaceSystemTextEx(system, TEXT_DATA);
      expect(result.boat).toEqual(system.boat);
      expect(result.ship).toEqual(system.ship);
      expect(result.airship).toEqual(system.airship);
    });
    test("サイズ関連のプロパティが維持されているか", () => {
      const system = makeTestData();
      const result = replaceSystemTextEx(system, TEXT_DATA);
      expect(result.tileSize).toBe(system.tileSize);
      expect(result.faceSize).toBe(system.faceSize);
      expect(result.iconSize).toBe(system.iconSize);
    });
    test("boolean[]なパラメータが維持されるか", () => {
      const system = makeTestData();
      const result = replaceSystemTextEx(system, TEXT_DATA);
      expect(result.menuCommands).toEqual(system.menuCommands);
      expect(result.itemCategories).toEqual(system.itemCategories);
    });
  });
});
