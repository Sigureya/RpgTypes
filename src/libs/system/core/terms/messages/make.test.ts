import Ajv from "ajv";
import { describe, test, expect } from "vitest";
import { makeTermsMessages } from "./make";
import { SCHEMA_SYSTEM_TERMS_MESSAGES } from "./schema";
import type { Terms_Messages } from "./types";

const ajv = new Ajv();
const validate = ajv.compile(SCHEMA_SYSTEM_TERMS_MESSAGES);

describe("makeTermsMessages default", () => {
  const message: Terms_Messages = makeTermsMessages({});
  test("should be valid by schema with all defaults", () => {
    expect(validate(message)).toBe(true);
  });
});

describe("makeTermsMessages individual property assignment", () => {
  test("actorDamage is set correctly", () => {
    const message = makeTermsMessages({ actorDamage: "msg" });
    expect(validate(message)).toBe(true);
    expect(message.actorDamage).toBe("msg");
  });
  test("actionFailure is set correctly", () => {
    const message = makeTermsMessages({ actionFailure: "msg" });
    expect(validate(message)).toBe(true);
    expect(message.actionFailure).toBe("msg");
  });
  test("actorNoDamage is set correctly", () => {
    const message = makeTermsMessages({ actorNoDamage: "test" });
    expect(validate(message)).toBe(true);
    expect(message.actorNoDamage).toBe("test");
  });
  test("actorRecovery is set correctly", () => {
    const message = makeTermsMessages({ actorRecovery: "test" });
    expect(validate(message)).toBe(true);
    expect(message.actorRecovery).toBe("test");
  });
  test("actorGain is set correctly", () => {
    const message = makeTermsMessages({ actorGain: "test" });
    expect(validate(message)).toBe(true);
    expect(message.actorGain).toBe("test");
  });
  test("actorLoss is set correctly", () => {
    const message = makeTermsMessages({ actorLoss: "test" });
    expect(validate(message)).toBe(true);
    expect(message.actorLoss).toBe("test");
  });
  test("actorDrain is set correctly", () => {
    const message = makeTermsMessages({ actorDrain: "test" });
    expect(validate(message)).toBe(true);
    expect(message.actorDrain).toBe("test");
  });
  test("alwaysDash is set correctly", () => {
    const message = makeTermsMessages({ alwaysDash: "test" });
    expect(validate(message)).toBe(true);
    expect(message.alwaysDash).toBe("test");
  });
  test("bgmVolume is set correctly", () => {
    const message = makeTermsMessages({ bgmVolume: "test" });
    expect(validate(message)).toBe(true);
    expect(message.bgmVolume).toBe("test");
  });
  test("bgsVolume is set correctly", () => {
    const message = makeTermsMessages({ bgsVolume: "test" });
    expect(validate(message)).toBe(true);
    expect(message.bgsVolume).toBe("test");
  });
  test("commandRemember is set correctly", () => {
    const message = makeTermsMessages({ commandRemember: "test" });
    expect(validate(message)).toBe(true);
    expect(message.commandRemember).toBe("test");
  });
  test("criticalToActor is set correctly", () => {
    const message = makeTermsMessages({ criticalToActor: "test" });
    expect(validate(message)).toBe(true);
    expect(message.criticalToActor).toBe("test");
  });
  test("criticalToEnemy is set correctly", () => {
    const message = makeTermsMessages({ criticalToEnemy: "test" });
    expect(validate(message)).toBe(true);
    expect(message.criticalToEnemy).toBe("test");
  });
  test("counterAttack is set correctly", () => {
    const message = makeTermsMessages({ counterAttack: "test" });
    expect(validate(message)).toBe(true);
    expect(message.counterAttack).toBe("test");
  });
  test("debuffAdd is set correctly", () => {
    const message = makeTermsMessages({ debuffAdd: "test" });
    expect(validate(message)).toBe(true);
    expect(message.debuffAdd).toBe("test");
  });
  test("defeat is set correctly", () => {
    const message = makeTermsMessages({ defeat: "test" });
    expect(validate(message)).toBe(true);
    expect(message.defeat).toBe("test");
  });
  test("enemyDamage is set correctly", () => {
    const message = makeTermsMessages({ enemyDamage: "test" });
    expect(validate(message)).toBe(true);
    expect(message.enemyDamage).toBe("test");
  });
  test("enemyNoDamage is set correctly", () => {
    const message = makeTermsMessages({ enemyNoDamage: "test" });
    expect(validate(message)).toBe(true);
    expect(message.enemyNoDamage).toBe("test");
  });
  test("enemyRecovery is set correctly", () => {
    const message = makeTermsMessages({ enemyRecovery: "test" });
    expect(validate(message)).toBe(true);
    expect(message.enemyRecovery).toBe("test");
  });
  test("enemyGain is set correctly", () => {
    const message = makeTermsMessages({ enemyGain: "test" });
    expect(validate(message)).toBe(true);
    expect(message.enemyGain).toBe("test");
  });
  test("enemyLoss is set correctly", () => {
    const message = makeTermsMessages({ enemyLoss: "test" });
    expect(validate(message)).toBe(true);
    expect(message.enemyLoss).toBe("test");
  });
  test("enemyDrain is set correctly", () => {
    const message = makeTermsMessages({ enemyDrain: "test" });
    expect(validate(message)).toBe(true);
    expect(message.enemyDrain).toBe("test");
  });
  test("evasion is set correctly", () => {
    const message = makeTermsMessages({ evasion: "test" });
    expect(validate(message)).toBe(true);
    expect(message.evasion).toBe("test");
  });
  test("expNext is set correctly", () => {
    const message = makeTermsMessages({ expNext: "test" });
    expect(validate(message)).toBe(true);
    expect(message.expNext).toBe("test");
  });
  test("expTotal is set correctly", () => {
    const message = makeTermsMessages({ expTotal: "test" });
    expect(validate(message)).toBe(true);
    expect(message.expTotal).toBe("test");
  });
  test("escapeFailure is set correctly", () => {
    const message = makeTermsMessages({ escapeFailure: "test" });
    expect(validate(message)).toBe(true);
    expect(message.escapeFailure).toBe("test");
  });
  test("escapeStart is set correctly", () => {
    const message = makeTermsMessages({ escapeStart: "test" });
    expect(validate(message)).toBe(true);
    expect(message.escapeStart).toBe("test");
  });
  test("file is set correctly", () => {
    const message = makeTermsMessages({ file: "test" });
    expect(validate(message)).toBe(true);
    expect(message.file).toBe("test");
  });
  test("loadMessage is set correctly", () => {
    const message = makeTermsMessages({ loadMessage: "test" });
    expect(validate(message)).toBe(true);
    expect(message.loadMessage).toBe("test");
  });
  test("meVolume is set correctly", () => {
    const message = makeTermsMessages({ meVolume: "test" });
    expect(validate(message)).toBe(true);
    expect(message.meVolume).toBe("test");
  });
  test("magicEvasion is set correctly", () => {
    const message = makeTermsMessages({ magicEvasion: "test" });
    expect(validate(message)).toBe(true);
    expect(message.magicEvasion).toBe("test");
  });
  test("magicReflection is set correctly", () => {
    const message = makeTermsMessages({ magicReflection: "test" });
    expect(validate(message)).toBe(true);
    expect(message.magicReflection).toBe("test");
  });
  test("obtainExp is set correctly", () => {
    const message = makeTermsMessages({ obtainExp: "test" });
    expect(validate(message)).toBe(true);
    expect(message.obtainExp).toBe("test");
  });
  test("obtainGold is set correctly", () => {
    const message = makeTermsMessages({ obtainGold: "test" });
    expect(validate(message)).toBe(true);
    expect(message.obtainGold).toBe("test");
  });
  test("obtainItem is set correctly", () => {
    const message = makeTermsMessages({ obtainItem: "test" });
    expect(validate(message)).toBe(true);
    expect(message.obtainItem).toBe("test");
  });
  test("obtainSkill is set correctly", () => {
    const message = makeTermsMessages({ obtainSkill: "test" });
    expect(validate(message)).toBe(true);
    expect(message.obtainSkill).toBe("test");
  });
  test("partyName is set correctly", () => {
    const message = makeTermsMessages({ partyName: "test" });
    expect(validate(message)).toBe(true);
    expect(message.partyName).toBe("test");
  });
  test("preemptive is set correctly", () => {
    const message = makeTermsMessages({ preemptive: "test" });
    expect(validate(message)).toBe(true);
    expect(message.preemptive).toBe("test");
  });
  test("saveMessage is set correctly", () => {
    const message = makeTermsMessages({ saveMessage: "test" });
    expect(validate(message)).toBe(true);
    expect(message.saveMessage).toBe("test");
  });
  test("seVolume is set correctly", () => {
    const message = makeTermsMessages({ seVolume: "test" });
    expect(validate(message)).toBe(true);
    expect(message.seVolume).toBe("test");
  });
  test("substitute is set correctly", () => {
    const message = makeTermsMessages({ substitute: "test" });
    expect(validate(message)).toBe(true);
    expect(message.substitute).toBe("test");
  });
  test("touchUI is set correctly", () => {
    const message = makeTermsMessages({ touchUI: "test" });
    expect(validate(message)).toBe(true);
    expect(message.touchUI).toBe("test");
  });
  test("victory is set correctly", () => {
    const message = makeTermsMessages({ victory: "test" });
    expect(validate(message)).toBe(true);
    expect(message.victory).toBe("test");
  });
  test("useItem is set correctly", () => {
    const message = makeTermsMessages({ useItem: "test" });
    expect(validate(message)).toBe(true);
    expect(message.useItem).toBe("test");
  });
  test("buffAdd is set correctly", () => {
    const message = makeTermsMessages({ buffAdd: "test" });
    expect(validate(message)).toBe(true);
    expect(message.buffAdd).toBe("test");
  });
  test("buffRemove is set correctly", () => {
    const message = makeTermsMessages({ buffRemove: "test" });
    expect(validate(message)).toBe(true);
    expect(message.buffRemove).toBe("test");
  });
  test("actorNoHit is set correctly", () => {
    const message = makeTermsMessages({ actorNoHit: "test" });
    expect(validate(message)).toBe(true);
    expect(message.actorNoHit).toBe("test");
  });
  test("enemyNoHit is set correctly", () => {
    const message = makeTermsMessages({ enemyNoHit: "test" });
    expect(validate(message)).toBe(true);
    expect(message.enemyNoHit).toBe("test");
  });
  test("autosave is set correctly", () => {
    const message = makeTermsMessages({ autosave: "test" });
    expect(validate(message)).toBe(true);
    expect(message.autosave).toBe("test");
  });
  test("emerge is set correctly", () => {
    const message = makeTermsMessages({ emerge: "test" });
    expect(validate(message)).toBe(true);
    expect(message.emerge).toBe("test");
  });
  test("levelUp is set correctly", () => {
    const message = makeTermsMessages({ levelUp: "test" });
    expect(validate(message)).toBe(true);
    expect(message.levelUp).toBe("test");
  });
  test("possession is set correctly", () => {
    const message = makeTermsMessages({ possession: "test" });
    expect(validate(message)).toBe(true);
    expect(message.possession).toBe("test");
  });
  test("surprise is set correctly", () => {
    const message = makeTermsMessages({ surprise: "test" });
    expect(validate(message)).toBe(true);
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
