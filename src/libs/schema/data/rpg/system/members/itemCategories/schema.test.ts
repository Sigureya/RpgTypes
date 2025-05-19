import { describe, test, expect } from "vitest";
import { makeItemCategories, makeItemCategoriesFromArray } from "./make";
import type { ItemCategories, ItemCategoriesArray } from "./types";
import { SCHEMA_SYSTEM_ITEM_CATEGORIES } from "./schema";
import Ajv from "ajv";

const ajv = new Ajv();
const validate = ajv.compile(SCHEMA_SYSTEM_ITEM_CATEGORIES);

const isItemCategories = (data: unknown): data is ItemCategoriesArray => {
  return validate(data);
};

describe("", () => {
  test("", () => {
    const xx = makeItemCategories({});
    expect(isItemCategories(xx)).toBe(true);
  });
});
