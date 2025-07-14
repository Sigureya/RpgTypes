import { describe, test, expect } from "vitest";
import type { Data_Weapon } from "./traitContainers";
import { isDataWeapon } from "./validate";

describe("isDataWeapon", () => {
  test("Valid weapon", () => {
    const weapon: Data_Weapon = {
      id: 1,
      name: "Iron Sword",
      iconIndex: 0,
      description: "A sharp iron sword.",
      etypeId: 1,
      params: [0, 1, 2, 3, 4, 5, 6, 7], // Example params
      price: 1000,
      traits: [
        {
          code: 0,
          dataId: 181,
          value: 500,
        },
      ],
      wtypeId: 1,
      animationId: 1,
      damage: {
        type: 1,
        elementId: 2,
        formula: "a.atk * 4",
        variance: 0,
        critical: false,
      },

      note: "This is a test note.",
    };
    expect(weapon).toSatisfy(isDataWeapon);
  });
  test("Invalid weapon", () => {
    const invalidWeapon = { name: 123 }; // Invalid name
    expect(invalidWeapon).not.toSatisfy(isDataWeapon);
    expect({}).not.toSatisfy(isDataWeapon);
    expect(null).not.toSatisfy(isDataWeapon);
    expect(undefined).not.toSatisfy(isDataWeapon);
  });
});
