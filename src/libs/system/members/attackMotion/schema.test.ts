import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { AttackMotion } from "./types";
import { SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION } from "./schema";
const ajv = new Ajv();
const validate = ajv.compile(SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION);

describe("SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION", () => {
  test("should be a valid JSON schema", () => {
    expect(validate).toBeTypeOf("function");
  });

  test("should validate a valid AttackMotion object", () => {
    const validAttackMotion: AttackMotion = {
      type: 1,
      weaponImageId: 2,
    };
    expect(validate(validAttackMotion)).toBe(true);
  });
  test("should invalidate an AttackMotion object with missing properties", () => {
    const invalidAttackMotion = {
      type: 1,
    };
    expect(validate(invalidAttackMotion)).toBe(false);
  });
  test("should invalidate an AttackMotion object with additional properties", () => {
    const invalidAttackMotion = {
      type: 1,
      weaponImageId: 2,
      extraProperty: "invalid",
    };
    expect(validate(invalidAttackMotion)).toBe(false);
  });

  test("should invalidate an invalid AttackMotion object", () => {
    const invalidAttackMotion = {
      type: "invalid",
      weaponImageId: "invalid",
    };
    expect(validate(invalidAttackMotion)).toBe(false);
  });
});
