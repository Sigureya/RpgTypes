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
});
