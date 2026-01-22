import { describe, test, expect } from "vitest";
import type { Terms_Messages } from "@RpgTypes/rmmz";
import { makeTermsMessages } from "@RpgTypes/rmmz";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_TERMS_MESSAGES } from "./messages";

const ajv = new Ajv();
const validate = ajv.compile(SCHEMA_SYSTEM_TERMS_MESSAGES);
describe("SCHEMA_SYSTEM_TERMS_MESSAGES", () => {
  test("valid Terms_Messages passes validation", () => {
    const data: Terms_Messages = {
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
    expect(data).toSatisfy(validate);
  });

  test("missing required property fails validation", () => {
    const data = {
      actionFailure: "Action failed",
      actorDamage: "Actor took damage",
      // other required properties are missing
    };
    expect(data).not.toSatisfy(validate);
  });

  test("additional properties are not allowed", () => {
    const data = {
      actionFailure: "Action failed",
      actorDamage: "Actor took damage",
      actorNoDamage: "Actor took no damage",
      extraProperty: "Not allowed",
    };
    expect(data).not.toSatisfy(validate);
  });
});

describe("makeTermsMessages default", () => {
  const message: Terms_Messages = makeTermsMessages({});
  test("should be valid by schema with all defaults", () => {
    expect(message).toSatisfy(validate);
  });
});

describe("makeTermsMessages individual property assignment", () => {
  test("actorDamage is set correctly", () => {
    const message = makeTermsMessages({ actorDamage: "msg" });
    expect(message).toSatisfy(validate);
    expect(message.actorDamage).toBe("msg");
  });
  test("actionFailure is set correctly", () => {
    const message = makeTermsMessages({ actionFailure: "msg" });
    expect(message).toSatisfy(validate);
    expect(message.actionFailure).toBe("msg");
  });
  test("actorNoDamage is set correctly", () => {
    const message = makeTermsMessages({ actorNoDamage: "test" });
    expect(message).toSatisfy(validate);
    expect(message.actorNoDamage).toBe("test");
  });
  test("actorRecovery is set correctly", () => {
    const message = makeTermsMessages({ actorRecovery: "test" });
    expect(message).toSatisfy(validate);
    expect(message.actorRecovery).toBe("test");
  });
  test("actorGain is set correctly", () => {
    const message = makeTermsMessages({ actorGain: "test" });
    expect(message).toSatisfy(validate);
    expect(message.actorGain).toBe("test");
  });
  test("actorLoss is set correctly", () => {
    const message = makeTermsMessages({ actorLoss: "test" });
    expect(message).toSatisfy(validate);
    expect(message.actorLoss).toBe("test");
  });
  test("actorDrain is set correctly", () => {
    const message = makeTermsMessages({ actorDrain: "test" });
    expect(message).toSatisfy(validate);
    expect(message.actorDrain).toBe("test");
  });
  test("alwaysDash is set correctly", () => {
    const message = makeTermsMessages({ alwaysDash: "test" });
    expect(message).toSatisfy(validate);
    expect(message.alwaysDash).toBe("test");
  });
  test("bgmVolume is set correctly", () => {
    const message = makeTermsMessages({ bgmVolume: "test" });
    expect(message).toSatisfy(validate);
    expect(message.bgmVolume).toBe("test");
  });
  test("bgsVolume is set correctly", () => {
    const message = makeTermsMessages({ bgsVolume: "test" });
    expect(message).toSatisfy(validate);
    expect(message.bgsVolume).toBe("test");
  });
  test("commandRemember is set correctly", () => {
    const message = makeTermsMessages({ commandRemember: "test" });
    expect(message).toSatisfy(validate);
    expect(message.commandRemember).toBe("test");
  });
  test("criticalToActor is set correctly", () => {
    const message = makeTermsMessages({ criticalToActor: "test" });
    expect(message).toSatisfy(validate);
    expect(message.criticalToActor).toBe("test");
  });
  test("criticalToEnemy is set correctly", () => {
    const message = makeTermsMessages({ criticalToEnemy: "test" });
    expect(message).toSatisfy(validate);
    expect(message.criticalToEnemy).toBe("test");
  });
  test("counterAttack is set correctly", () => {
    const message = makeTermsMessages({ counterAttack: "test" });
    expect(message).toSatisfy(validate);
    expect(message.counterAttack).toBe("test");
  });
  test("debuffAdd is set correctly", () => {
    const message = makeTermsMessages({ debuffAdd: "test" });
    expect(message).toSatisfy(validate);
    expect(message.debuffAdd).toBe("test");
  });
  test("defeat is set correctly", () => {
    const message = makeTermsMessages({ defeat: "test" });
    expect(message).toSatisfy(validate);
    expect(message.defeat).toBe("test");
  });
  test("enemyDamage is set correctly", () => {
    const message = makeTermsMessages({ enemyDamage: "test" });
    expect(message).toSatisfy(validate);
    expect(message.enemyDamage).toBe("test");
  });
  test("enemyNoDamage is set correctly", () => {
    const message = makeTermsMessages({ enemyNoDamage: "test" });
    expect(message).toSatisfy(validate);
    expect(message.enemyNoDamage).toBe("test");
  });
  test("enemyRecovery is set correctly", () => {
    const message = makeTermsMessages({ enemyRecovery: "test" });
    expect(message).toSatisfy(validate);
    expect(message.enemyRecovery).toBe("test");
  });
  test("enemyGain is set correctly", () => {
    const message = makeTermsMessages({ enemyGain: "test" });
    expect(message).toSatisfy(validate);
    expect(message.enemyGain).toBe("test");
  });
  test("enemyLoss is set correctly", () => {
    const message = makeTermsMessages({ enemyLoss: "test" });
    expect(message).toSatisfy(validate);
    expect(message.enemyLoss).toBe("test");
  });
  test("enemyDrain is set correctly", () => {
    const message = makeTermsMessages({ enemyDrain: "test" });
    expect(message).toSatisfy(validate);
    expect(message.enemyDrain).toBe("test");
  });
  test("evasion is set correctly", () => {
    const message = makeTermsMessages({ evasion: "test" });
    expect(message).toSatisfy(validate);
    expect(message.evasion).toBe("test");
  });
  test("expNext is set correctly", () => {
    const message = makeTermsMessages({ expNext: "test" });
    expect(message).toSatisfy(validate);
    expect(message.expNext).toBe("test");
  });
  test("expTotal is set correctly", () => {
    const message = makeTermsMessages({ expTotal: "test" });
    expect(message).toSatisfy(validate);
    expect(message.expTotal).toBe("test");
  });
  test("escapeFailure is set correctly", () => {
    const message = makeTermsMessages({ escapeFailure: "test" });
    expect(message).toSatisfy(validate);
    expect(message.escapeFailure).toBe("test");
  });
  test("escapeStart is set correctly", () => {
    const message = makeTermsMessages({ escapeStart: "test" });
    expect(message).toSatisfy(validate);
    expect(message.escapeStart).toBe("test");
  });
  test("file is set correctly", () => {
    const message = makeTermsMessages({ file: "test" });
    expect(message).toSatisfy(validate);
    expect(message.file).toBe("test");
  });
  test("loadMessage is set correctly", () => {
    const message = makeTermsMessages({ loadMessage: "test" });
    expect(message).toSatisfy(validate);
    expect(message.loadMessage).toBe("test");
  });
  test("meVolume is set correctly", () => {
    const message = makeTermsMessages({ meVolume: "test" });
    expect(message).toSatisfy(validate);
    expect(message.meVolume).toBe("test");
  });
  test("magicEvasion is set correctly", () => {
    const message = makeTermsMessages({ magicEvasion: "test" });
    expect(message).toSatisfy(validate);
    expect(message.magicEvasion).toBe("test");
  });
  test("magicReflection is set correctly", () => {
    const message = makeTermsMessages({ magicReflection: "test" });
    expect(message).toSatisfy(validate);
    expect(message.magicReflection).toBe("test");
  });
  test("obtainExp is set correctly", () => {
    const message = makeTermsMessages({ obtainExp: "test" });
    expect(message).toSatisfy(validate);
    expect(message.obtainExp).toBe("test");
  });
  test("obtainGold is set correctly", () => {
    const message = makeTermsMessages({ obtainGold: "test" });
    expect(message).toSatisfy(validate);
    expect(message.obtainGold).toBe("test");
  });
  test("obtainItem is set correctly", () => {
    const message = makeTermsMessages({ obtainItem: "test" });
    expect(message).toSatisfy(validate);
    expect(message.obtainItem).toBe("test");
  });
  test("obtainSkill is set correctly", () => {
    const message = makeTermsMessages({ obtainSkill: "test" });
    expect(message).toSatisfy(validate);
    expect(message.obtainSkill).toBe("test");
  });
  test("partyName is set correctly", () => {
    const message = makeTermsMessages({ partyName: "test" });
    expect(message).toSatisfy(validate);
    expect(message.partyName).toBe("test");
  });
  test("preemptive is set correctly", () => {
    const message = makeTermsMessages({ preemptive: "test" });
    expect(message).toSatisfy(validate);
    expect(message.preemptive).toBe("test");
  });
  test("saveMessage is set correctly", () => {
    const message = makeTermsMessages({ saveMessage: "test" });
    expect(message).toSatisfy(validate);
    expect(message.saveMessage).toBe("test");
  });
  test("seVolume is set correctly", () => {
    const message = makeTermsMessages({ seVolume: "test" });
    expect(message).toSatisfy(validate);
    expect(message.seVolume).toBe("test");
  });
  test("substitute is set correctly", () => {
    const message = makeTermsMessages({ substitute: "test" });
    expect(message).toSatisfy(validate);
    expect(message.substitute).toBe("test");
  });
  test("touchUI is set correctly", () => {
    const message = makeTermsMessages({ touchUI: "test" });
    expect(message).toSatisfy(validate);
    expect(message.touchUI).toBe("test");
  });
  test("victory is set correctly", () => {
    const message = makeTermsMessages({ victory: "test" });
    expect(message).toSatisfy(validate);
    expect(message.victory).toBe("test");
  });
  test("useItem is set correctly", () => {
    const message = makeTermsMessages({ useItem: "test" });
    expect(message).toSatisfy(validate);
    expect(message.useItem).toBe("test");
  });
  test("buffAdd is set correctly", () => {
    const message = makeTermsMessages({ buffAdd: "test" });
    expect(message).toSatisfy(validate);
    expect(message.buffAdd).toBe("test");
  });
  test("buffRemove is set correctly", () => {
    const message = makeTermsMessages({ buffRemove: "test" });
    expect(message).toSatisfy(validate);
    expect(message.buffRemove).toBe("test");
  });
  test("actorNoHit is set correctly", () => {
    const message = makeTermsMessages({ actorNoHit: "test" });
    expect(message).toSatisfy(validate);
    expect(message.actorNoHit).toBe("test");
  });
  test("enemyNoHit is set correctly", () => {
    const message = makeTermsMessages({ enemyNoHit: "test" });
    expect(message).toSatisfy(validate);
    expect(message.enemyNoHit).toBe("test");
  });
  test("autosave is set correctly", () => {
    const message = makeTermsMessages({ autosave: "test" });
    expect(message).toSatisfy(validate);
    expect(message.autosave).toBe("test");
  });
  test("emerge is set correctly", () => {
    const message = makeTermsMessages({ emerge: "test" });
    expect(message).toSatisfy(validate);
    expect(message.emerge).toBe("test");
  });
  test("levelUp is set correctly", () => {
    const message = makeTermsMessages({ levelUp: "test" });
    expect(message).toSatisfy(validate);
    expect(message.levelUp).toBe("test");
  });
  test("possession is set correctly", () => {
    const message = makeTermsMessages({ possession: "test" });
    expect(message).toSatisfy(validate);
    expect(message.possession).toBe("test");
  });
  test("surprise is set correctly", () => {
    const message = makeTermsMessages({ surprise: "test" });
    expect(message).toSatisfy(validate);
    expect(message.surprise).toBe("test");
  });
});

describe("makeTermsMessages validation error cases", () => {
  test("invalid: missing required property", () => {
    const invalid = {};
    expect(validate(invalid)).toBe(false);
  });
  test("invalid: property is not string", () => {
    const invalid = makeTermsMessages({});
    const xxx = { ...invalid, actorDamage: 123 };
    expect(validate(xxx)).toBe(false);
  });
  test("invalid: additional property", () => {
    const invalid = { ...makeTermsMessages({}), extra: "ng" };
    expect(validate(invalid)).toBe(false);
  });
});
