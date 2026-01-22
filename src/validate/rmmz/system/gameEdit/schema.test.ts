import { describe, test, expect } from "vitest";
import type { TestBattler } from "@RpgTypes/rmmz";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_TEST_BATTLER } from "./testBattle";
const ajv = new Ajv({ strict: true });
const validate = ajv.compile(SCHEMA_SYSTEM_TEST_BATTLER);

describe("SCHEMA_SYSTEM_TEST_BATTLERS", () => {
  test("should be a valid JSON schema", () => {
    expect(validate).toBeTypeOf("function");
  });

  test("should validate a valid TestBattler object", () => {
    const validTestBattler: TestBattler = {
      actorId: 1,
      equips: [2, 3, 5, 6, 7, 8],
      level: 1,
    };
    expect(validTestBattler).toSatisfy(validate);
  });
  test("should invalidate a TestBattler object with missing properties", () => {
    const invalidTestBattler = {
      actorId: 1,
      equips: [2, 3, 5, 6, 7, 8],
    };
    expect(invalidTestBattler).not.toSatisfy(validate);
  });

  test("should invalidate a TestBattler object with additional properties", () => {
    const invalidTestBattler = {
      actorId: 1,
      equips: [2, 3, 5, 6, 7, 8],
      level: 1,
      extraProperty: "invalid",
    };
    expect(invalidTestBattler).not.toSatisfy(validate);
  });
});
