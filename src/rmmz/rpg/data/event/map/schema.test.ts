import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { AudioFileParams } from "src/utils";
import SCHEMA_MAP_EVENT_PAGE from "./event/page/schema";
import { makeMapData } from "./make";
import type { Data_Map } from "./map";
import SCHEMA_DATA_MAP from "./schema";
const ajv = new Ajv({ strict: true });
const dataMap = ajv.compile(SCHEMA_DATA_MAP);

const isMapData = (data: unknown): data is Data_Map => {
  return dataMap(data);
};

describe("", () => {
  test("", () => {
    expect(SCHEMA_DATA_MAP).not.toBeUndefined();
  });
  test("", () => {
    expect(SCHEMA_MAP_EVENT_PAGE).not.toBeUndefined();
  });
});

describe("", () => {
  const audio: AudioFileParams = {
    name: "test",
    volume: 0,
    pitch: 0,
    pan: 0,
  };
  const map = makeMapData({
    bgm: audio,
    bgs: audio,
  });
  describe("", () => {
    test("", () => {
      expect(isMapData(map)).toBe(true);
    });
  });
});
