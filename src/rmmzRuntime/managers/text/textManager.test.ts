import { describe, test, expect } from "vitest";
import type { Data_System } from "@RpgTypes/rmmz/system";
import { makeSystemData } from "@RpgTypes/rmmz/system";
import { TextManager } from "@RpgTypes/rmmzMock/core/rmmz_managers";
import type { TextManager_Interface } from "./textManager";

const mockSystem: Data_System = makeSystemData({
  terms: {
    messages: {
      actorDamage: "actorDamage!",
      actorRecovery: "actorRecovery!",
      actionFailure: "actionFailure!",
      criticalToEnemy: "criticalToEnemy!",
      criticalToActor: "criticalToActor!",
      actorDrain: "actorDrain!",
      enemyDrain: "enemyDrain!",
      actorGain: "actorGain!",
      enemyGain: "enemyGain!",
      actorLoss: "actorLoss!",
      enemyLoss: "enemyLoss!",
      actorNoDamage: "actorNoDamage!",
      enemyNoDamage: "enemyNoDamage!",
      actorNoHit: "actorNoHit!",
      enemyNoHit: "enemyNoHit!",
      evasion: "evasion!",
      magicEvasion: "magicEvasion!",
      magicReflection: "magicReflection!",
      counterAttack: "counterAttack!",
      substitute: "substitute!",
      buffAdd: "buffAdd!",
      debuffAdd: "debuffAdd!",
      buffRemove: "buffRemove!",
      escapeStart: "escapeStart!",
      escapeFailure: "escapeFailure!",
      victory: "victory!",
      defeat: "defeat!",
      obtainExp: "obtainExp!",
      obtainGold: "obtainGold!",
      obtainItem: "obtainItem!",
      levelUp: "levelUp!",
      alwaysDash: "alwaysDash!",
      commandRemember: "commandRemember!",
      touchUI: "touchUI!",
      autosave: "autosave!",
      bgmVolume: "bgmVolume!",
      bgsVolume: "bgsVolume!",
      meVolume: "meVolume!",
      seVolume: "seVolume!",
      emerge: "emerge!",
      preemptive: "preemptive!",
      surprise: "surprise!",
      file: "file!",
      saveMessage: "saveMessage!",
      loadMessage: "loadMessage!",
      partyName: "partyName!",
      possession: "possession!",
      expTotal: "expTotal!",
      expNext: "expNext!",
      enemyDamage: "enemyDamage!",
      enemyRecovery: "enemyRecovery!",
      obtainSkill: "obtainSkill!",
      useItem: "useItem!",
    },
  },
});

globalThis.$dataSystem = mockSystem;
declare global {
  var TextManager: TextManager_Interface;
  var $dataSystem: Data_System;
}

describe("messages", () => {
  describe("battle", () => {
    test("surprise", () => {
      expect(TextManager.surprise).toBe(mockSystem.terms.messages.surprise);
    });

    test("useItem", () => {
      expect(TextManager.useItem).toBe(mockSystem.terms.messages.useItem);
    });

    test("actorDamage", () => {
      expect(TextManager.actorDamage).toBe(
        mockSystem.terms.messages.actorDamage
      );
    });

    test("actorRecovery", () => {
      expect(mockSystem.terms.messages.actorRecovery).toBeDefined();
      expect(TextManager.actorRecovery).toBe(
        mockSystem.terms.messages.actorRecovery
      );
    });

    test("actionFailure", () => {
      expect(TextManager.actionFailure).toBe(
        mockSystem.terms.messages.actionFailure
      );
    });

    test("criticalToEnemy", () => {
      expect(TextManager.criticalToEnemy).toBe(
        mockSystem.terms.messages.criticalToEnemy
      );
    });

    test("criticalToActor", () => {
      expect(TextManager.criticalToActor).toBe(
        mockSystem.terms.messages.criticalToActor
      );
    });

    test("actorDrain", () => {
      expect(TextManager.actorDrain).toBe(mockSystem.terms.messages.actorDrain);
    });

    test("enemyDrain", () => {
      expect(TextManager.enemyDrain).toBe(mockSystem.terms.messages.enemyDrain);
    });

    test("actorGain", () => {
      expect(TextManager.actorGain).toBe(mockSystem.terms.messages.actorGain);
    });

    test("enemyGain", () => {
      expect(TextManager.enemyGain).toBe(mockSystem.terms.messages.enemyGain);
    });

    test("actorLoss", () => {
      expect(TextManager.actorLoss).toBe(mockSystem.terms.messages.actorLoss);
    });

    test("enemyLoss", () => {
      expect(TextManager.enemyLoss).toBe(mockSystem.terms.messages.enemyLoss);
    });

    test("enemyDamage", () => {
      expect(TextManager.enemyDamage).toBe(
        mockSystem.terms.messages.enemyDamage
      );
    });

    test("enemyRecovery", () => {
      expect(TextManager.enemyRecovery).toBe(
        mockSystem.terms.messages.enemyRecovery
      );
    });

    test("actorNoDamage", () => {
      expect(TextManager.actorNoDamage).toBe(
        mockSystem.terms.messages.actorNoDamage
      );
    });

    test("enemyNoDamage", () => {
      expect(TextManager.enemyNoDamage).toBe(
        mockSystem.terms.messages.enemyNoDamage
      );
    });

    test("actorNoHit", () => {
      expect(TextManager.actorNoHit).toBe(mockSystem.terms.messages.actorNoHit);
    });

    test("enemyNoHit", () => {
      expect(TextManager.enemyNoHit).toBe(mockSystem.terms.messages.enemyNoHit);
    });

    test("evasion", () => {
      expect(TextManager.evasion).toBe(mockSystem.terms.messages.evasion);
    });

    test("magicEvasion", () => {
      expect(TextManager.magicEvasion).toBe(
        mockSystem.terms.messages.magicEvasion
      );
    });

    test("magicReflection", () => {
      expect(TextManager.magicReflection).toBe(
        mockSystem.terms.messages.magicReflection
      );
    });

    test("counterAttack", () => {
      expect(TextManager.counterAttack).toBe(
        mockSystem.terms.messages.counterAttack
      );
    });

    test("substitute", () => {
      expect(TextManager.substitute).toBe(mockSystem.terms.messages.substitute);
    });

    test("buffAdd", () => {
      expect(TextManager.buffAdd).toBe(mockSystem.terms.messages.buffAdd);
    });

    test("debuffAdd", () => {
      expect(TextManager.debuffAdd).toBe(mockSystem.terms.messages.debuffAdd);
    });

    test("buffRemove", () => {
      expect(TextManager.buffRemove).toBe(mockSystem.terms.messages.buffRemove);
    });

    test("escapeStart", () => {
      expect(TextManager.escapeStart).toBe(
        mockSystem.terms.messages.escapeStart
      );
    });

    test("escapeFailure", () => {
      expect(TextManager.escapeFailure).toBe(
        mockSystem.terms.messages.escapeFailure
      );
    });

    test("victory", () => {
      expect(TextManager.victory).toBe(mockSystem.terms.messages.victory);
    });

    test("defeat", () => {
      expect(TextManager.defeat).toBe(mockSystem.terms.messages.defeat);
    });
  });

  describe("prop", () => {
    test("obtainSkill", () => {
      expect(TextManager.obtainSkill).toBe(
        mockSystem.terms.messages.obtainSkill
      );
    });
    test("obtainExp", () => {
      expect(TextManager.obtainExp).toBe(mockSystem.terms.messages.obtainExp);
    });

    test("obtainGold", () => {
      expect(TextManager.obtainGold).toBe(mockSystem.terms.messages.obtainGold);
    });

    test("obtainItem", () => {
      expect(TextManager.obtainItem).toBe(mockSystem.terms.messages.obtainItem);
    });

    test("levelUp", () => {
      expect(TextManager.levelUp).toBe(mockSystem.terms.messages.levelUp);
    });
  });

  describe("config", () => {
    test("commandRemember", () => {
      expect(TextManager.commandRemember).toBe(
        mockSystem.terms.messages.commandRemember
      );
    });
    test("touchUI", () => {
      expect(TextManager.touchUI).toBe(mockSystem.terms.messages.touchUI);
    });

    test("alwaysDash", () => {
      expect(TextManager.alwaysDash).toBe(mockSystem.terms.messages.alwaysDash);
    });
    test("bgmVolume", () => {
      expect(TextManager.bgmVolume).toBe(mockSystem.terms.messages.bgmVolume);
    });

    test("bgsVolume", () => {
      expect(TextManager.bgsVolume).toBe(mockSystem.terms.messages.bgsVolume);
    });

    test("meVolume", () => {
      expect(TextManager.meVolume).toBe(mockSystem.terms.messages.meVolume);
    });

    test("seVolume", () => {
      expect(TextManager.seVolume).toBe(mockSystem.terms.messages.seVolume);
    });
  });

  describe("saveFilse", () => {
    test("autosave", () => {
      expect(TextManager.autosave).toBe(mockSystem.terms.messages.autosave);
    });
    test("file", () => {
      expect(TextManager.file).toBe(mockSystem.terms.messages.file);
    });

    test("saveMessage", () => {
      expect(TextManager.saveMessage).toBe(
        mockSystem.terms.messages.saveMessage
      );
    });

    test("loadMessage", () => {
      expect(TextManager.loadMessage).toBe(
        mockSystem.terms.messages.loadMessage
      );
    });
  });

  describe("menuStatus", () => {
    test("expTotal", () => {
      expect(TextManager.expTotal).toBe(mockSystem.terms.messages.expTotal);
    });

    test("expNext", () => {
      expect(TextManager.expNext).toBe(mockSystem.terms.messages.expNext);
    });
  });

  describe("others", () => {
    test("emerge", () => {
      expect(TextManager.emerge).toBe(mockSystem.terms.messages.emerge);
    });

    test("preemptive", () => {
      expect(TextManager.preemptive).toBe(mockSystem.terms.messages.preemptive);
    });

    test("partyName", () => {
      expect(TextManager.partyName).toBe(mockSystem.terms.messages.partyName);
    });

    test("possession", () => {
      expect(TextManager.possession).toBe(mockSystem.terms.messages.possession);
    });

    test("exists", () => {
      expect(TextManager).toBeDefined();
      expect(mockSystem.terms.messages).toBeDefined();
    });
  });
});
