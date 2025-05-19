import { describe, test, expect } from "vitest";
import { makeItemCategories, makeItemCategoriesFromArray } from "./make";
import type { ItemCategories, ItemCategoriesArray } from "./types";

const testXXX = (param: ItemCategories) => {
  test("", () => {
    const array: ItemCategoriesArray = makeItemCategories(param);
    const object: ItemCategories = makeItemCategoriesFromArray(array);
    expect(param).toEqual(object);
  });
};

describe("makeItemCategories", () => {
  describe("default", () => {
    test("", () => {
      const xx = makeItemCategories({});
      expect(xx).toEqual([true, true, true, true]);
    });
    test("", () => {
      const xx = makeItemCategories({
        armor: false,
        item: false,
        keyItem: false,
        weapon: false,
      });
      expect(xx).toEqual([false, false, false, false]);
    });
  });
});
describe("", () => {
  testXXX({ armor: true, item: false, keyItem: false, weapon: false });
  testXXX({ armor: false, item: true, keyItem: false, weapon: false });
  testXXX({ armor: false, item: false, keyItem: true, weapon: false });
  testXXX({ armor: false, item: false, keyItem: false, weapon: true });
});
