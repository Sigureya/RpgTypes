import { describe, test, expect } from "vitest";
import { makeAudioFileParams } from "@RpgTypes/libs";
import type { System_SoundsObject, System_SoundsArray } from "@RpgTypes/rmmz";
import { makeSoundsArray, makeSoundsObject } from "@RpgTypes/rmmz";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_SOUND_ARRAY } from "./audio";

const ajv = new Ajv({ strict: true });
const validate = ajv.compile(SCHEMA_SYSTEM_SOUND_ARRAY);

describe("makeAudioFileParams default values", () => {
  const audio = makeAudioFileParams({});
  test("default pan is 0", () => expect(audio.pan).toBe(0));
  test("default volume is 100", () => expect(audio.volume).toBe(100));
  test("default pitch is 100", () => expect(audio.pitch).toBe(100));
});

const testMakeSoundsArrayAndObjectForKey = (key: keyof System_SoundsObject) => {
  describe(`key: ${key}`, () => {
    const audio = makeAudioFileParams({
      name: `audio-${key}`,
      volume: 351,
      pitch: 183,
      pan: 257,
    });
    const array: System_SoundsArray = makeSoundsArray({
      [key]: audio,
    });
    test("array is valid by schema", () => {
      expect(validate(array)).toBe(true);
    });
    test("array contains an equal audio object but not the same reference", () => {
      expect(array).toContainEqual(audio);
      expect(array).not.toContain(audio);
    });
    test("makeSoundsObject reconstructs the audio object for the key", () => {
      const object = makeSoundsObject(array);
      expect(object[key]).toEqual(audio);
    });
  });
};

describe("makeSoundsArray and makeSoundsObject for each key", () => {
  testMakeSoundsArrayAndObjectForKey("cursor");
  testMakeSoundsArrayAndObjectForKey("ok");
  testMakeSoundsArrayAndObjectForKey("cancel");
  testMakeSoundsArrayAndObjectForKey("buzzer");
  testMakeSoundsArrayAndObjectForKey("equip");
  testMakeSoundsArrayAndObjectForKey("save");
  testMakeSoundsArrayAndObjectForKey("load");
  testMakeSoundsArrayAndObjectForKey("battleStart");
  testMakeSoundsArrayAndObjectForKey("escape");
  testMakeSoundsArrayAndObjectForKey("enemyAttack");
  testMakeSoundsArrayAndObjectForKey("enemyDamage");
  testMakeSoundsArrayAndObjectForKey("enemyCollapse");
  testMakeSoundsArrayAndObjectForKey("bossCollapes1");
  testMakeSoundsArrayAndObjectForKey("bossCollapes2");
  testMakeSoundsArrayAndObjectForKey("actorDamage");
  testMakeSoundsArrayAndObjectForKey("actorCollapse");
  testMakeSoundsArrayAndObjectForKey("playRecovery");
  testMakeSoundsArrayAndObjectForKey("playMiss");
  testMakeSoundsArrayAndObjectForKey("playEvasion");
  testMakeSoundsArrayAndObjectForKey("playMagicEvasion");
  testMakeSoundsArrayAndObjectForKey("playReflection");
  testMakeSoundsArrayAndObjectForKey("shop");
  testMakeSoundsArrayAndObjectForKey("useItem");
  testMakeSoundsArrayAndObjectForKey("useSkill");
});

describe("System_SoundsArray schema validation (length)", () => {
  test("invalid: array length is 1 (too short)", () => {
    const array = [makeAudioFileParams()];
    expect(array).not.toSatisfy(validate);
  });
  test("invalid: array length is 0 (empty array)", () => {
    expect([]).not.toSatisfy(validate);
  });
  test("invalid: array length is 23 (too short)", () => {
    const arr = Array.from({ length: 23 }, () => makeAudioFileParams());
    expect(arr).not.toSatisfy(validate);
  });
  test("invalid: array length is 25 (too long)", () => {
    const arr = Array.from({ length: 25 }, () => makeAudioFileParams());
    expect(arr).not.toSatisfy(validate);
  });
  test("valid: array length is 24 (all default)", () => {
    const arr = Array.from({ length: 24 }, () => makeAudioFileParams());
    expect(arr).toSatisfy(validate);
  });
});

describe("System_SoundsArray schema validation (property requirements)", () => {
  test("invalid: missing required 'name' property", () => {
    const arr = Array.from({ length: 24 }, () => ({
      volume: 100,
      pitch: 100,
      pan: 0,
    }));
    expect(arr).not.toSatisfy(validate);
  });
  test("valid: only 'name' property present", () => {
    const arr = Array.from({ length: 24 }, () => ({
      name: "test",
    }));
    expect(arr).not.toSatisfy(validate);
  });
  test("invalid: additional property present", () => {
    const arr = Array.from({ length: 24 }, () => ({
      name: "test",
      foo: "bar",
    }));
    expect(arr).not.toSatisfy(validate);
  });
});
