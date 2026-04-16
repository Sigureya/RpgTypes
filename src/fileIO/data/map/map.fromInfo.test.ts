import type { MockedFunction } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type { Data_Map, Data_MapInfo } from "@RpgTypes/rmmz";
import { makeMapData, makeMapInfoData } from "@RpgTypes/rmmz";
import { readMapFilesFromInfoEx } from "./map";
import type {
  MapFiles,
  MapReadTerms,
  MapReadSuccess,
  MapReadFailed,
} from "./types";

interface TestCase {
  caseName: string;
  infos: Data_MapInfo[];
  failedIds: number[];
  expected: MapFiles<ConvertedMap>;
}

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

const readMapFile = (info: Data_MapInfo): Promise<string> => {
  if (info.id === 1) {
    return Promise.resolve(JSON.stringify(map1));
  }
  if (info.id === 2) {
    return Promise.resolve(JSON.stringify(map2));
  }
  return Promise.reject(new Error("file not found"));
};

const mockConvertFn = (data: MapReadSuccess<Data_Map>): ConvertedMap => ({
  mockDisplayName: data.map.displayName,
});

const infoToFailed = (info: Data_MapInfo, message: string): MapReadFailed => ({
  map: null,
  message: message,
  filename: `Map${String(info.id).padStart(3, "0")}`,
  editingName: info.name,
});

const runTestCase = (testCase: TestCase) => {
  describe(testCase.caseName, () => {
    test("読み込みが常に失敗", async () => {
      const validateFn: MockedFunction<(data: unknown) => boolean> = vi.fn(
        () => true,
      );

      const mockMapFileFn = vi.fn(() =>
        Promise.reject(new Error("file not found")),
      );

      const convertFn = vi.fn(mockConvertFn);
      const result = await readMapFilesFromInfoEx(
        testCase.infos,
        terms,
        mockMapFileFn,
        (d): d is Data_Map => validateFn(d),
        convertFn,
      );
      expect(convertFn).not.toHaveBeenCalled();
      expect(validateFn).not.toHaveBeenCalled();
      expect(mockMapFileFn).toHaveBeenCalledTimes(testCase.infos.length);
      testCase.infos.forEach((info) => {
        expect(mockMapFileFn).toHaveBeenCalledWith(info);
      });
      expect(result.validMaps).toEqual([]);
      expect(result.invalidMaps.length).toBe(testCase.infos.length);
      const expectedInvalidMaps = testCase.infos.map((info) => {
        return infoToFailed(info, terms.fileNotFound);
      });
      expect(result.invalidMaps).toEqual(expectedInvalidMaps);
    });

    test("validateが常に失敗", async () => {
      const validateFn: MockedFunction<(data: unknown) => boolean> = vi.fn(
        () => false,
      );
      const mockMapFileFn = vi.fn(
        async (): Promise<string> => JSON.stringify(map1),
      );
      const convertFn = vi.fn(mockConvertFn);

      const result = await readMapFilesFromInfoEx(
        testCase.infos,
        terms,
        mockMapFileFn,
        (d): d is Data_Map => validateFn(d),
        convertFn,
      );

      expect(mockMapFileFn).toHaveBeenCalledTimes(testCase.infos.length);
      expect(validateFn).toHaveBeenCalledTimes(testCase.infos.length);
      expect(convertFn).not.toHaveBeenCalled();
      expect(result.validMaps).toEqual([]);

      const expectedInvalidMaps = testCase.infos.map((info) => {
        return infoToFailed(info, terms.invalidStructure);
      });
      expect(result.invalidMaps).toEqual(expectedInvalidMaps);
    });
    test("通常処理", async () => {
      const validateFn: MockedFunction<(data: unknown) => boolean> = vi.fn(
        () => true,
      );
      const invalidMapIds = new Set(testCase.failedIds);
      const mockMapFileFn = vi.fn((info: Data_MapInfo): Promise<string> => {
        if (invalidMapIds.has(info.id)) {
          return Promise.reject(new Error("file not found"));
        }
        return readMapFile(info);
      });
      const convertFn = vi.fn(mockConvertFn);
      const result = await readMapFilesFromInfoEx(
        testCase.infos,
        terms,
        mockMapFileFn,
        (d): d is Data_Map => validateFn(d),
        convertFn,
      );

      const numReadSuccess = Math.max(
        0,
        testCase.infos.length - testCase.expected.invalidMaps.length,
      );
      expect(validateFn).toHaveBeenCalledTimes(numReadSuccess);
      expect(result).toEqual(testCase.expected);
      expect(mockMapFileFn).toHaveBeenCalledTimes(testCase.infos.length);
    });
  });
};

const testCases: TestCase[] = [
  {
    caseName: "入力が空のときは validMaps も invalidMaps も空になること",
    infos: [],
    failedIds: [],
    expected: {
      info: { success: true },
      validMaps: [],
      invalidMaps: [],
    },
  },
  {
    caseName:
      "複数のマップ情報があるとき、すべてのマップ読み込みに成功するケース",
    infos: [
      makeMapInfoData({ id: 1, name: "Map1" }),
      makeMapInfoData({ id: 2, name: "Map2" }),
    ],
    failedIds: [],
    expected: {
      info: { success: true },
      invalidMaps: [],
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
    },
  },
  {
    caseName: "存在しないマップを読み込むと、失敗する",
    infos: [makeMapInfoData({ id: 999, name: "NonExistentMap" })],
    failedIds: [],
    expected: {
      info: { success: true },
      validMaps: [],
      invalidMaps: [
        {
          map: null,
          message: "file not found",
          filename: "Map999",
          editingName: "NonExistentMap",
        },
      ],
    },
  },
  {
    caseName:
      "複数のマップ情報があるとき、すべてのマップ読み込みに失敗するケース",
    infos: [
      makeMapInfoData({ id: 1, name: "Map1" }),
      makeMapInfoData({ id: 2, name: "Map2" }),
      makeMapInfoData({ id: 3, name: "Map3" }),
    ],
    failedIds: [1, 2, 3],
    expected: {
      info: { success: true },
      validMaps: [],
      invalidMaps: [
        {
          map: null,
          message: "file not found",
          filename: "Map001",
          editingName: "Map1",
        },
        {
          map: null,
          message: "file not found",
          filename: "Map002",
          editingName: "Map2",
        },
        {
          map: null,
          message: "file not found",
          filename: "Map003",
          editingName: "Map3",
        },
      ],
    },
  },
];

describe("readMapFilesFromInfoEx", () => {
  testCases.forEach(runTestCase);
});
