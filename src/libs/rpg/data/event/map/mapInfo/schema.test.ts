import Ajv from "ajv";
import { describe, test, expect } from "vitest";
import { makeMapInfoData } from "./make";
import type { Data_MapInfo } from "./mapInfo";
import { SCHEMA_DATA_MAP_INFO } from "./schema";

const ajv = new Ajv();
const validate = ajv.compile(SCHEMA_DATA_MAP_INFO);
const isValid = (data: unknown): data is Data_MapInfo => {
  return validate(data);
};
describe("SCHEMA_DATA_MAP_INFO", () => {
  test("should be defined", () => {
    expect(SCHEMA_DATA_MAP_INFO).not.toBeUndefined();
  });
});

describe("Data_MapInfo", () => {
  test("should be valid by schema", () => {
    const data: Data_MapInfo = {
      name: "test",
      id: 1,
      expanded: true,
      order: 0,
      parentId: 0,
      scrollX: 0,
      scrollY: 0,
    };
    expect(isValid(data)).toBe(true);
  });
  test("", () => {
    const data: Data_MapInfo = makeMapInfoData();
    expect(isValid(data)).toBe(true);
  });

  test("should be invalid if required properties are missing", () => {
    const data = {
      name: "test",
      id: 1,
    };
    expect(isValid(data)).toBe(false);
  });
});

describe("isDataMapInfo", () => {
  test("should return false for invalid Data_MapInfo properties", () => {
    const mapInfo: Data_MapInfo = {
      id: 1,
      name: "Test Map",
      parentId: 0,
      order: 0,
      scrollX: 0,
      scrollY: 0,
      expanded: true,
    };
    expect(isValid({ ...mapInfo, id: false })).toBe(false);
    expect(isValid({ ...mapInfo, name: 123 })).toBe(false);
    expect(isValid({ ...mapInfo, parentId: "0" })).toBe(false);
    expect(isValid({ ...mapInfo, order: "0" })).toBe(false);
    expect(isValid({ ...mapInfo, scrollX: "0" })).toBe(false);
    expect(isValid({ ...mapInfo, scrollY: "0" })).toBe(false);
    expect(isValid({ ...mapInfo, expanded: "true" })).toBe(false);
  });

  test("should return false for invalid or incomplete objects", () => {
    const invalidMapInfo = { id: "invalid" }; // Invalid id
    expect(isValid(invalidMapInfo)).toBe(false);
    expect(isValid({})).toBe(false);
    expect(isValid(null)).toBe(false);
    expect(isValid(undefined)).toBe(false);
  });
});
