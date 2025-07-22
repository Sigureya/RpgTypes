import { describe, test, expect } from "vitest";
import Ajv from "ajv";
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
      scrollX: 3.14,
      scrollY: 33.4,
    };
    expect(data).toSatisfy(isValid);
  });
  test("", () => {
    const data: Data_MapInfo = makeMapInfoData();
    expect(data).toSatisfy(isValid);
  });

  test("should be invalid if required properties are missing", () => {
    const data = {
      name: "test",
      id: 1,
    };
    expect(data).not.toSatisfy(isValid);
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
    expect({ ...mapInfo, id: false }).not.toSatisfy(isValid);
    expect({ ...mapInfo, name: 123 }).not.toSatisfy(isValid);
    expect({ ...mapInfo, parentId: "0" }).not.toSatisfy(isValid);
    expect({ ...mapInfo, order: "0" }).not.toSatisfy(isValid);
    expect({ ...mapInfo, scrollX: "0" }).not.toSatisfy(isValid);
    expect({ ...mapInfo, scrollY: "0" }).not.toSatisfy(isValid);
    expect({ ...mapInfo, expanded: "true" }).not.toSatisfy(isValid);
  });

  test("should return false for invalid or incomplete objects", () => {
    const invalidMapInfo = { id: "invalid" }; // Invalid id
    expect(invalidMapInfo).not.toSatisfy(isValid);
    expect({}).not.toSatisfy(isValid);
    expect(null).not.toSatisfy(isValid);
    expect(undefined).not.toSatisfy(isValid);
  });
});
