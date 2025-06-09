import Ajv from "ajv";
import { describe, test, expect } from "vitest";
import { SCHEMA_SYSTEM_TEST_BATTLER } from "./schema";
import type { TestBattler } from "./types";
const ajv = new Ajv();
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
    expect(validate(validTestBattler)).toBe(true);
  });
  test("should invalidate a TestBattler object with missing properties", () => {
    const invalidTestBattler = {
      actorId: 1,
      equips: [2, 3, 5, 6, 7, 8],
    };
    expect(validate(invalidTestBattler)).toBe(false);
  });

  test("should invalidate a TestBattler object with additional properties", () => {
    const invalidTestBattler = {
      actorId: 1,
      equips: [2, 3, 5, 6, 7, 8],
      level: 1,
      extraProperty: "invalid",
    };
    expect(validate(invalidTestBattler)).toBe(false);
  });
});
