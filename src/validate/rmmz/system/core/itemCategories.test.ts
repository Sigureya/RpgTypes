import { describe, test, expect } from "vitest";
import type { ItemCategories, ItemCategoriesArray } from "@RpgTypes/rmmz";
import {
  makeItemCategories,
  makeItemCategoriesFromArray,
} from "@RpgTypes/rmmz";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_ITEM_CATEGORIES } from "./itemCategories";

const ajv = new Ajv({ strict: false });
const validate = ajv.compile(SCHEMA_SYSTEM_ITEM_CATEGORIES);

const testRoundTrip = (param: ItemCategories, caseName: string) => {
  const array: ItemCategoriesArray = makeItemCategories(param);
  test(caseName, () => {
    const object: ItemCategories = makeItemCategoriesFromArray(array);
    expect(param).toEqual(object);
  });
  test(`${caseName} - validate`, () => {
    const isValid = validate(array);
    expect(isValid).toBe(true);
  });
};

describe("ItemCategoriesArray length validation", () => {
  test("invalid: array length is 3 (too short)", () => {
    expect(validate([false, false, false])).toBe(false);
  });
  test("invalid: array length is 5 (too long)", () => {
    expect(validate([false, false, false, false, false])).toBe(false);
  });
  test("invalid: array length is 3 with all true", () => {
    expect(validate([true, true, true])).toBe(false);
  });
  test("invalid: array length is 5 with all true", () => {
    expect(validate([true, true, true, true, true])).toBe(false);
  });
});

describe("makeItemCategories", () => {
  test("returns all true when param is empty object", () => {
    const array = makeItemCategories({});
    expect(array).toEqual([true, true, true, true]);
  });
  test("returns all true when all values are true", () => {
    const array = makeItemCategories({
      armor: true,
      item: true,
      keyItem: true,
      weapon: true,
    });
    expect(array).toEqual([true, true, true, true]);
    expect(validate(array)).toBe(true);
  });
  test("returns all false when all values are false", () => {
    const array = makeItemCategories({
      armor: false,
      item: false,
      keyItem: false,
      weapon: false,
    });
    expect(array).toEqual([false, false, false, false]);
    expect(validate(array)).toBe(true);
  });
  test("returns all true when param is undefined", () => {
    const array = makeItemCategories(undefined);
    expect(array).toEqual([true, true, true, true]);
    expect(validate(array)).toBe(true);
  });
  test("returns correct array when only one value is true (armor)", () => {
    const array = makeItemCategories({ armor: true });
    expect(array).toEqual([true, true, true, true]); // 他がundefinedなのでtrue
    expect(validate(array)).toBe(true);
  });
  test("returns correct array when only one value is false (item)", () => {
    const array = makeItemCategories({ item: false });
    expect(array).toEqual([false, true, true, true]);
    expect(validate(array)).toBe(true);
  });
  test("returns correct array when some values are set", () => {
    const array = makeItemCategories({ item: false, weapon: false });
    expect(array).toEqual([false, false, true, true]);
    expect(validate(array)).toBe(true);
  });
});

describe("makeItemCategories <-> makeItemCategoriesFromArray round trip", () => {
  testRoundTrip(
    { armor: true, item: false, keyItem: false, weapon: false },
    "armor only true",
  );
  testRoundTrip(
    { armor: false, item: true, keyItem: false, weapon: false },
    "item only true",
  );
  testRoundTrip(
    { armor: false, item: false, keyItem: true, weapon: false },
    "keyItem only true",
  );
  testRoundTrip(
    { armor: false, item: false, keyItem: false, weapon: true },
    "weapon only true",
  );
  testRoundTrip(
    { armor: true, item: true, keyItem: false, weapon: false },
    "armor and item true",
  );
  testRoundTrip(
    { armor: false, item: true, keyItem: true, weapon: false },
    "item and keyItem true",
  );
  testRoundTrip(
    { armor: true, item: true, keyItem: true, weapon: false },
    "armor, item, keyItem true",
  );
  testRoundTrip(
    { armor: false, item: false, keyItem: false, weapon: false },
    "all false",
  );
  testRoundTrip(
    { armor: true, item: true, keyItem: true, weapon: true },
    "all true",
  );
});
