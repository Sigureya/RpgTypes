import { describe, test, expect } from "vitest";
import type { Data_System } from "@RpgTypes/rmmz";
import { makeSystemData, type AttackMotion } from "@RpgTypes/rmmz";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION } from "./attackMotion";

const ajv = new Ajv({ strict: true });
const validate = ajv.compile(SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION);

describe("SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION", () => {
  test("should be a valid JSON schema", () => {
    expect(validate).toBeTypeOf("function");
  });
  test("", () => {
    const data: Data_System = makeSystemData({});
    data.attackMotions.forEach((motion) => {
      expect(motion).toSatisfy(validate);
    });
  });

  describe("normal case", () => {
    test("should validate a valid AttackMotion object", () => {
      const validAttackMotion: AttackMotion = {
        type: 1,
        weaponImageId: 2,
      };
      expect(validAttackMotion).toSatisfy(validate);
    });
  });
  describe("error cases", () => {
    test("should invalidate an AttackMotion object with missing properties", () => {
      const invalidAttackMotion = {
        type: 1,
      };
      expect(invalidAttackMotion).not.toSatisfy(validate);
    });
    test("should invalidate an AttackMotion object with additional properties", () => {
      const invalidAttackMotion = {
        type: 1,
        weaponImageId: 2,
        extraProperty: "invalid",
      };
      expect(invalidAttackMotion).not.toSatisfy(validate);
    });

    test("should invalidate an invalid AttackMotion object", () => {
      const invalidAttackMotion = {
        type: "invalid",
        weaponImageId: "invalid",
      };
      expect(invalidAttackMotion).not.toSatisfy(validate);
    });
  });
});
