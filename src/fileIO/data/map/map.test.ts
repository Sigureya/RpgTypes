import type { MockedFunction } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Data_Map, Data_MapInfo } from "@RpgTypes/rmmz";
import { readMapFileFromInfo } from "./map";
import type { MapReadFailed, MapReadSuccess, MapReadTerms } from "./types";

const terms: MapReadTerms = {
  jsonParseError: "json parse error",
  invalidStructure: "invalid structure",
  fileNotFound: "file not found",
};

const info: Data_MapInfo = {
  id: 1,
  name: "FirstMap",
  expanded: false,
  order: 0,
  parentId: 0,
  scrollX: 0,
  scrollY: 0,
};

type MockMap = Pick<Data_Map, "displayName">;
type MockedValidateFn = MockedFunction<(data: unknown) => boolean>;

describe("readMapFileFromInfo", () => {
  test("マップ読み込み成功時は map と filename を返す", async () => {
    const map: MockMap = { displayName: "Map A" };
    const readFileFn = vi.fn(async () => JSON.stringify(map));
    const validate = vi.fn((data: unknown): data is Data_Map => {
      return typeof data === "object" && data !== null;
    });

    const expected: MapReadSuccess<MockMap> = {
      map,
      filename: "Map001",
      editingName: "FirstMap",
    };

    const result = await readMapFileFromInfo(
      info,
      terms,
      readFileFn,
      (d): d is Data_Map => validate(d),
    );

    expect(readFileFn).toHaveBeenCalledWith("Map001.json");
    expect(validate).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  test("ファイル読み込み失敗時は fileNotFound エラーを返す", async () => {
    const readFileFn = vi.fn(async () => {
      throw new Error("missing");
    });
    const validate: MockedValidateFn = vi.fn(() => true);

    const expected: MapReadFailed = {
      map: null,
      message: "file not found",
      filename: "Map001",
      editingName: "FirstMap",
    };

    const result = await readMapFileFromInfo(
      info,
      terms,
      readFileFn,
      (d): d is Data_Map => validate(d),
    );

    expect(validate).not.toHaveBeenCalled();
    expect(result).toEqual(expected);
  });

  test("JSON が壊れていると jsonParseError を返す", async () => {
    const readFileFn = vi.fn(async () => "{ bad json }");
    const validate: MockedValidateFn = vi.fn(() => true);
    const expected: MapReadFailed = {
      map: null,
      message: "json parse error",
      filename: "Map001",
      editingName: "FirstMap",
    };

    const result = await readMapFileFromInfo(
      info,
      terms,
      readFileFn,
      (d): d is Data_Map => validate(d),
    );

    expect(validate).not.toHaveBeenCalled();
    expect(result).toEqual(expected);
  });

  test("バリデーション失敗時は invalidStructure を返す", async () => {
    const data = { any: "value" };
    const readFileFn = vi.fn(async () => JSON.stringify(data));
    const validate: MockedValidateFn = vi.fn(() => false);

    const expected: MapReadFailed = {
      map: null,
      message: "invalid structure",
      filename: "Map001",
      editingName: "FirstMap",
    };
    const result = await readMapFileFromInfo(
      info,
      terms,
      readFileFn,
      (d): d is Data_Map => validate(d),
    );

    expect(validate).toHaveBeenCalledTimes(1);
    expect(validate).toHaveBeenCalledWith(data);
    expect(result).toEqual(expected);
  });
});
