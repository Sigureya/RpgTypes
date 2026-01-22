import { describe, test, expect } from "vitest";
import type { Data_Armor } from "@RpgTypes/rmmz/rpg";
const validate = require("./armorValidate.cjs");

const isDataArmor = (data: unknown): data is Data_Armor => {
  return validate.default(data);
};
describe("isDataArmor", () => {
  const armor: Data_Armor = {
    id: 1,
    name: "Leather Armor",
    description: "Basic armor offering minimal protection.",
    iconIndex: 16,
    price: 500,
    note: "This is a test armor.",
    etypeId: 1,
    atypeId: 1,
    params: [0, 5, 0, 0, 0, 0, 0, 0],
    traits: [{ code: 11, dataId: 2, value: 10 }],
  };
  test("should return true for valid Data_Armor", () => {
    expect(armor).toSatisfy(isDataArmor);
  });
  test("should return false for non-integer properties that require integers", () => {
    expect({ ...armor, id: 3.14 }).not.toSatisfy(isDataArmor);
    expect({ ...armor, iconIndex: 3.14 }).not.toSatisfy(isDataArmor);
    expect({ ...armor, price: 3.14 }).not.toSatisfy(isDataArmor);
    expect({ ...armor, etypeId: 3.14 }).not.toSatisfy(isDataArmor);
    expect({ ...armor, atypeId: 3.14 }).not.toSatisfy(isDataArmor);
  });
  test("should return false for negative integer properties", () => {
    expect({ ...armor, id: -1 }).not.toSatisfy(isDataArmor);
    expect({ ...armor, iconIndex: -2 }).not.toSatisfy(isDataArmor);
    expect({ ...armor, etypeId: -5 }).not.toSatisfy(isDataArmor);
    expect({ ...armor, atypeId: -9 }).not.toSatisfy(isDataArmor);
  });
});
