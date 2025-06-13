import { describe, test, expect } from "vitest";
import {
  makeMapData,
  makeMapInfoData,
  SCHEMA_DATA_MAP_INFO,
  type Data_MapInfo,
} from "./map";
import type { Data_Map } from "./map";
import { SCHEMA_DATA_MAP } from "./map/schema";
import { isDataMapInfo, isDataMap } from "./validate";

describe("", () => {
  test("", () => {
    expect(SCHEMA_DATA_MAP_INFO).not.toBeUndefined();
  });
  test("", () => {
    expect(SCHEMA_DATA_MAP).not.toBeUndefined();
  });
});
describe("", () => {
  test("", () => {
    const map: Data_Map = makeMapData();
    expect(isDataMap(map)).toBe(true);
  });
});
describe("", () => {
  test("", () => {
    const mapInfo: Data_MapInfo = makeMapInfoData();
    expect(isDataMapInfo(mapInfo)).toBe(true);
  });
});
