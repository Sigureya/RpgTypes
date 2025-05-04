import { describe, test, expect } from "vitest";
import { isDataMapInfo } from "./validate";
import type { Data_MapInfo } from "./map";

describe("isDataMapInfo", () => {
  test("should return true for valid Data_MapInfo object", () => {
    const mapInfo: Data_MapInfo = {
      id: 1,
      name: "Test Map",
      parentId: 0,
      order: 0,
      scrollX: 0,
      scrollY: 0,
      expanded: true,
    };
    expect(isDataMapInfo(mapInfo)).toBe(true);
  });

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
    expect(isDataMapInfo({ ...mapInfo, id: false })).toBe(false);
    expect(isDataMapInfo({ ...mapInfo, name: 123 })).toBe(false);
    expect(isDataMapInfo({ ...mapInfo, parentId: "0" })).toBe(false);
    expect(isDataMapInfo({ ...mapInfo, order: "0" })).toBe(false);
    expect(isDataMapInfo({ ...mapInfo, scrollX: "0" })).toBe(false);
    expect(isDataMapInfo({ ...mapInfo, scrollY: "0" })).toBe(false);
    expect(isDataMapInfo({ ...mapInfo, expanded: "true" })).toBe(false);
  });

  test("should return false for invalid or incomplete objects", () => {
    const invalidMapInfo = { id: "invalid" }; // Invalid id
    expect(isDataMapInfo(invalidMapInfo)).toBe(false);
    expect(isDataMapInfo({})).toBe(false);
    expect(isDataMapInfo(null)).toBe(false);
    expect(isDataMapInfo(undefined)).toBe(false);
  });
});
