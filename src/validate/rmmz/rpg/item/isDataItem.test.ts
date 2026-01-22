import { describe, test, expect } from "vitest";
import type { Data_Item } from "@RpgTypes/rmmz/rpg";
const validate = require("./itemValidate.cjs");

const isDataItem = (data: unknown): data is Data_Item => {
  return validate(data);
};
describe("isDataItem", () => {
  test("should return true for valid Data_Item", () => {
    const data: Data_Item = {
      id: 1,
      name: "Health Potion",
      description: "Restores 50 HP.",
      iconIndex: 64,
      price: 300,
      note: "This is a test item.",
      scope: 7,
      occasion: 0,
      speed: 0,
      successRate: 100,
      repeats: 1,
      animationId: 1,
      effects: [],
      consumable: true,
      damage: {
        type: 0,
        elementId: 0,
        formula: "0",
        variance: 0,
        critical: false,
      },
      hitType: 0,
      itypeId: 1,
      tpGain: 0,
    };
    expect(data).toSatisfy(isDataItem);
  });
});
