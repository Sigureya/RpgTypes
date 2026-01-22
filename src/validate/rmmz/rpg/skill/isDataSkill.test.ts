import { describe, test, expect } from "vitest";
import type { Data_Skill } from "@RpgTypes/rmmz/rpg";
const validate = require("./skillValidate.cjs");

const isDataSkill = (data: unknown): data is Data_Skill => {
  return validate(data);
};

describe("isDataSkill", () => {
  test("should return true for valid Data_Skill", () => {
    const data: Data_Skill = {
      id: 1,
      name: "Fire",
      description: "A basic fire spell.",
      iconIndex: 64,
      animationId: 1,
      scope: 2,
      occasion: 0,
      speed: 0,
      successRate: 100,
      tpCost: 0,
      mpCost: 5,
      damage: {
        type: 1,
        elementId: 3,
        formula: "a.mat * 4 - b.mdf * 2",
        variance: 20,
        critical: false,
      },
      hitType: 0,
      message1: "casts Fire!",
      message2: "deals damage!",
      note: "This is a test skill.",
      messageType: 0,
      repeats: 1,
      tpGain: 0,
      requiredWtypeId1: 0,
      requiredWtypeId2: 0,
      stypeId: 1,
      effects: [],
    };
    expect(data).toSatisfy(isDataSkill);
  });
});
