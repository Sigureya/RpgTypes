import { describe, test, expect } from "vitest";
import type { Data_Item } from "./usableItems";
import { isDataItem } from "./validate";

describe("isDataItem", () => {
  test("Valid item", () => {
    const item: Data_Item = {
      id: 1,
      name: "Potion",
      description: "Restores HP.",
      iconIndex: 0,
      note: "This is a test item.",
      effects: [
        {
          code: 11,
          dataId: 1,
          value1: 100,
          value2: 0,
        },
      ],
      price: 0,
      consumable: false,
      itypeId: 0,
      animationId: 0,
      hitType: 0,
      occasion: 0,
      repeats: 0,
      scope: 0,
      speed: 0,
      successRate: 0,
      tpGain: 0,
      damage: {
        type: 0,
        elementId: 0,
        formula: "",
        variance: 0,
        critical: false,
      },
    };
    expect(item).toSatisfy(isDataItem);
  });

  test("Invalid item", () => {
    const invalidItem = { id: "one" }; // Invalid id
    expect(isDataItem(invalidItem)).toBe(false);
  });
});
