import { describe, expect, test } from "vitest";
import type { Terms_Messages } from "@RpgTypes/rmmz/system";
import { makeTermsMessages } from "./make";

describe("makeTermsMessages", () => {
  const mockMessages: Terms_Messages = {
    actionFailure: "Action failed",

    actorDamage: "Actor took damage",
    actorNoDamage: "Actor took no damage",
    actorRecovery: "Actor recovered",
    actorGain: "Actor gained something",
    actorLoss: "Actor lost something",
    actorDrain: "Actor drained something",
    alwaysDash: "Always dash enabled",
    bgmVolume: "BGM volume set",
    bgsVolume: "BGS volume set",
    commandRemember: "Command remembered",
    criticalToActor: "Critical hit to actor",
    criticalToEnemy: "Critical hit to enemy",
    counterAttack: "Counter attack occurred",
    debuffAdd: "Debuff added",
    defeat: "Defeat message",
    enemyDamage: "Enemy took damage",
    enemyNoDamage: "Enemy took no damage",
    enemyRecovery: "Enemy recovered",

    enemyGain: "Enemy gained something",
    enemyLoss: "Enemy lost something",
    enemyDrain: "Enemy drained something",
    evasion: "Evasion successful",
    expNext: "Next experience points",
    expTotal: "Total experience points",
    escapeFailure: "Escape failed",
    escapeStart: "Escape started",
    file: "File operation message",
    loadMessage: "Load message displayed",
    meVolume: "ME volume set",
    magicEvasion: "Magic evasion successful",
    magicReflection: "Magic reflected",
    actorNoHit: "Actor did not hit",
    obtainExp: "Experience points obtained",
    obtainGold: "Gold obtained",
    obtainItem: "Item obtained",
    obtainSkill: "Skill obtained",
    partyName: "Party name displayed",
    preemptive: "Preemptive strike",
    saveMessage: "Save message displayed",
    autosave: "Autosave message",
    seVolume: "SE volume set",
    substitute: "Substitute action",
    touchUI: "Touch UI enabled",
    victory: "Victory message",
    useItem: "Item used",
    buffAdd: "Buff added",

    buffRemove: "Buff removed",
    emerge: "Emerge message",
    levelUp: "Level up message",
    possession: "Possession message",
    surprise: "Surprise message",
    enemyNoHit: "Enemy did not hit",
  };

  test("returns default values when param is empty object", () => {
    const messages = makeTermsMessages(mockMessages);
    expect(messages).toEqual(mockMessages);
  });
});
