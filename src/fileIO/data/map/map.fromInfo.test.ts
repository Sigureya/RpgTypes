import type { MockedFunction } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Data_Map, Data_MapInfo } from "@RpgTypes/rmmz";
import { makeMapData, makeMapInfoData } from "@RpgTypes/rmmz";
import { readMapFilesFromInfo, readMapFilesFromInfoEx } from "./map";
import type {
  MapFiles,
  MapReadTerms,
  MapReadSuccess,
  MapReadFailed,
} from "./types";

interface ConvertedMap {
  mockDisplayName: string;
}

const terms: MapReadTerms = {
  jsonParseError: "json parse error",
  invalidStructure: "invalid structure",
  fileNotFound: "file not found",
};

const map1: Data_Map = makeMapData({
  displayName: "Map1",
});
const map2: Data_Map = makeMapData({
  displayName: "Map2",
});

const mapFileName = (id: number) => `Map${String(id).padStart(3, "0")}.json`;
const mapName = (id: number) => `Map${String(id).padStart(3, "0")}`;

const readMapFile = (filename: string): Promise<string> => {
  if (filename === mapFileName(1)) {
    return Promise.resolve(JSON.stringify(map1));
  }
  if (filename === mapFileName(2)) {
    return Promise.resolve(JSON.stringify(map2));
  }
  return Promise.reject(new Error("file not found"));
};

const mockConvertFn = (data: MapReadSuccess<Data_Map>): ConvertedMap => ({
  mockDisplayName: data.map.displayName,
});

const infoToFailed = (info: Data_MapInfo, message: string): MapReadFailed => ({
  map: null,
  message,
  filename: mapName(info.id),
  editingName: info.name,
});

describe("readMapFilesFromInfo", () => {
  test("成功したマップだけをそのまま返す", async () => {
    const infos = [
      makeMapInfoData({ id: 1, name: "Map1" }),
      makeMapInfoData({ id: 999, name: "Missing" }),
    ];
    const validateFn = vi.fn((data: unknown): data is Data_Map => !!data);
    const mockMapFileFn = vi.fn(readMapFile);

    const result = await readMapFilesFromInfo(
      infos,
      terms,
      mockMapFileFn,
      (d): d is Data_Map => validateFn(d),
    );

    expect(mockMapFileFn).toHaveBeenNthCalledWith(1, "Map001.json");
    expect(mockMapFileFn).toHaveBeenNthCalledWith(2, "Map999.json");
    expect(validateFn).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      info: { success: true },
      validMaps: [
        {
          map: map1,
          filename: "Map001",
          editingName: "Map1",
        },
      ],
      invalidMaps: [infoToFailed(infos[1], terms.fileNotFound)],
    });
  });
});

describe("readMapFilesFromInfoEx", () => {
  test("入力が空なら空の結果を返す", async () => {
    const validateFn: MockedFunction<(data: unknown) => boolean> = vi.fn(
      () => true,
    );
    const mockMapFileFn = vi.fn(readMapFile);
    const convertFn = vi.fn(mockConvertFn);

    const result = await readMapFilesFromInfoEx(
      [],
      terms,
      mockMapFileFn,
      (d): d is Data_Map => validateFn(d),
      convertFn,
    );

    expect(mockMapFileFn).not.toHaveBeenCalled();
    expect(validateFn).not.toHaveBeenCalled();
    expect(convertFn).not.toHaveBeenCalled();
    expect(result).toEqual({
      info: { success: true },
      validMaps: [],
      invalidMaps: [],
    });
  });

  test("成功分だけ変換して invalidMaps と分離する", async () => {
    const infos = [
      makeMapInfoData({ id: 1, name: "Map1" }),
      makeMapInfoData({ id: 2, name: "Map2" }),
      makeMapInfoData({ id: 999, name: "Missing" }),
    ];
    const validateFn = vi.fn((data: unknown): data is Data_Map => !!data);
    const mockMapFileFn = vi.fn(readMapFile);
    const convertFn = vi.fn(mockConvertFn);

    const result = await readMapFilesFromInfoEx(
      infos,
      terms,
      mockMapFileFn,
      (d): d is Data_Map => validateFn(d),
      convertFn,
    );

    expect(mockMapFileFn).toHaveBeenNthCalledWith(1, "Map001.json");
    expect(mockMapFileFn).toHaveBeenNthCalledWith(2, "Map002.json");
    expect(mockMapFileFn).toHaveBeenNthCalledWith(3, "Map999.json");
    expect(validateFn).toHaveBeenCalledTimes(2);
    expect(convertFn).toHaveBeenCalledTimes(2);
    expect(result).toEqual({
      info: { success: true },
      validMaps: [
        {
          map: { mockDisplayName: "Map1" },
          filename: "Map001",
          editingName: "Map1",
        },
        {
          map: { mockDisplayName: "Map2" },
          filename: "Map002",
          editingName: "Map2",
        },
      ],
      invalidMaps: [infoToFailed(infos[2], terms.fileNotFound)],
    });
  });

  test("バリデーション失敗時は invalidStructure に集約される", async () => {
    const infos = [
      makeMapInfoData({ id: 1, name: "Map1" }),
      makeMapInfoData({ id: 2, name: "Map2" }),
    ];
    const validateFn: MockedFunction<(data: unknown) => boolean> = vi.fn(
      () => false,
    );
    const mockMapFileFn = vi.fn(readMapFile);
    const convertFn = vi.fn(mockConvertFn);

    const result = await readMapFilesFromInfoEx(
      infos,
      terms,
      mockMapFileFn,
      (d): d is Data_Map => validateFn(d),
      convertFn,
    );

    expect(mockMapFileFn).toHaveBeenNthCalledWith(1, "Map001.json");
    expect(mockMapFileFn).toHaveBeenNthCalledWith(2, "Map002.json");
    expect(validateFn).toHaveBeenCalledTimes(2);
    expect(convertFn).not.toHaveBeenCalled();
    expect(result).toEqual({
      info: { success: true },
      validMaps: [],
      invalidMaps: infos.map((info) =>
        infoToFailed(info, terms.invalidStructure),
      ),
    });
  });
});
