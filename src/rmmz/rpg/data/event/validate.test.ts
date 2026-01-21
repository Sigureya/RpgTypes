import { describe, test, expect } from "vitest";
import { makeMapData } from "./map";
import type { Data_Map } from "./map";
import SCHEMA_DATA_MAP from "./map/schema";
import { isDataMap } from "./validate";

describe("", () => {
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
