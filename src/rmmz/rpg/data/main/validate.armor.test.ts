import { describe, test, expect } from "vitest";
import type { Data_Armor } from "./traitContainers";
import { makeArmorData } from "./traitContainers";
import { isDataArmor } from "./validate";

describe("isDataArmor", () => {
  test("Valid armor2", () => {
    const armor: Data_Armor = makeArmorData();
    expect(armor).toSatisfy(isDataArmor);
  });
  test("Valid armor", () => {
    const armor: Data_Armor = {
      id: 1,
      name: "Iron Armor",
      iconIndex: 0,
      description: "A sturdy iron armor.",
      etypeId: 1,
      price: 1000,
      traits: [
        {
          code: 2,
          dataId: 7,
          value: 189,
        },
      ],
      atypeId: 1,
      params: [0, 1, 2, 3, 4, 5, 6, 7], // Example params
      note: "This is a test note.",
    };
    expect(armor).toSatisfy(isDataArmor);
  });
  test("Invalid armor", () => {
    const invalidArmor = { name: 123 }; // Invalid name
    expect(invalidArmor).not.toSatisfy(isDataArmor);
    expect({}).not.toSatisfy(isDataArmor);
    expect(null).not.toSatisfy(isDataArmor);
    expect(undefined).not.toSatisfy(isDataArmor);
  });
});
