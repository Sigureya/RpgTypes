import { describe, test, expect } from "vitest";
import type { Data_MapInfo } from "@RpgTypes/rmmz/rpg";
const validate = require("./mapinfoValidate.cjs");

const isDataMapInfo = (data: unknown): data is Data_MapInfo => {
  return validate(data);
};

describe("isDataMapInfo", () => {
  test("valid Data_MapInfo", () => {
    const data: Data_MapInfo = {
      name: "Test Map",
      order: 1,
      expanded: true,
      id: 1,
      parentId: 0,
      scrollX: 0,
      scrollY: 0,
    };
    expect(data).toSatisfy(isDataMapInfo);
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
    expect({ ...mapInfo, id: false }).not.toSatisfy(isDataMapInfo);
    expect({ ...mapInfo, name: 123 }).not.toSatisfy(isDataMapInfo);
    expect({ ...mapInfo, parentId: "0" }).not.toSatisfy(isDataMapInfo);
    expect({ ...mapInfo, order: "0" }).not.toSatisfy(isDataMapInfo);
    expect({ ...mapInfo, scrollX: "0" }).not.toSatisfy(isDataMapInfo);
    expect({ ...mapInfo, scrollY: "0" }).not.toSatisfy(isDataMapInfo);
    expect({ ...mapInfo, expanded: "true" }).not.toSatisfy(isDataMapInfo);
  });

  test("should return false for invalid or incomplete objects", () => {
    const invalidMapInfo = { id: "invalid" }; // Invalid id
    expect(invalidMapInfo).not.toSatisfy(isDataMapInfo);
    expect({}).not.toSatisfy(isDataMapInfo);
    expect(null).not.toSatisfy(isDataMapInfo);
    expect(undefined).not.toSatisfy(isDataMapInfo);
  });
});
