import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import {
  isValidMapPosition,
  mapAutotileType,
  mapRegionId,
  mapTileId,
} from "@RpgTypes/rmmz/rpg/event/map/tiles";
import type { Data_MapTiles } from "@RpgTypes/rmmz/rpg/event/map/tiles";
import type { Rmmz_Map } from "@RpgTypes/rmmzRuntime";
import { Game_Map } from "./rmmz_objects";

const WIDTH = 3;
const HEIGHT = 2;

/** オートタイルの境目。2048 未満は -1、そこから 48 ごとに 1 つ増える */
const TILE = {
  PLAIN: 0,
  LAST_NORMAL: 2047,
  AUTO_0: 2048,
  AUTO_0_LAST: 2095,
  AUTO_1: 2096,
  AUTO_3: 2048 + 48 * 3,
} as const;

/** z=0 のタイル。オートタイルの判定に使う */
const LAYER_0: number[] = [
  TILE.PLAIN,
  TILE.LAST_NORMAL,
  TILE.AUTO_0,
  TILE.AUTO_0_LAST,
  TILE.AUTO_1,
  TILE.AUTO_3,
];

/** z=5 は地域。0 は「地域なし」 */
const LAYER_5: number[] = [0, 1, 7, 0, 63, 12];

const makeMapData = (): number[] => {
  const data = new Array<number>(WIDTH * HEIGHT * 6).fill(0);
  LAYER_0.forEach((tile, index) => {
    data[index] = tile;
  });
  LAYER_5.forEach((tile, index) => {
    // z=5 の先頭は (5 * height) * width
    data[5 * HEIGHT * WIDTH + index] = tile;
  });
  return data;
};

const map: Data_MapTiles = {
  width: WIDTH,
  height: HEIGHT,
  data: makeMapData(),
};

/** Game_Map のうち、この検証で呼ぶものだけ */
type FakeMap = Pick<
  Rmmz_Map,
  "tileId" | "width" | "height" | "isValid" | "regionId" | "autotileType"
>;

const proto = Game_Map.prototype;

const createCoreMap = (): FakeMap => {
  return {
    tileId: proto.tileId,
    width: proto.width,
    height: proto.height,
    isValid: proto.isValid,
    regionId: proto.regionId,
    autotileType: proto.autotileType,
  };
};

beforeAll(() => {
  // コアの tileId / isValid は $dataMap の width / height / data しか読まない
  vi.stubGlobal("$dataMap", map);
});

afterAll(() => {
  vi.unstubAllGlobals();
});

interface TestCase {
  name: string;
  x: number;
  y: number;
  expected: {
    valid: boolean;
    /** z=0 のタイル番号 */
    tileId: number;
    autotileType: number;
    regionId: number;
  };
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { x, y, expected } = testCase;

    describe("function", () => {
      test("isValidMapPosition", () => {
        expect(isValidMapPosition(map, x, y)).toBe(expected.valid);
      });
      test("mapTileId", () => {
        expect(mapTileId(map, x, y, 0)).toBe(expected.tileId);
      });
      test("mapAutotileType", () => {
        expect(mapAutotileType(map, x, y, 0)).toBe(expected.autotileType);
      });
      test("mapRegionId", () => {
        expect(mapRegionId(map, x, y)).toBe(expected.regionId);
      });
    });

    describe("Map", () => {
      test("isValid", () => {
        expect(createCoreMap().isValid(x, y)).toBe(expected.valid);
      });
      test("tileId", () => {
        expect(createCoreMap().tileId(x, y, 0)).toBe(expected.tileId);
      });
      test("autotileType", () => {
        expect(createCoreMap().autotileType(x, y, 0)).toBe(
          expected.autotileType,
        );
      });
      test("regionId", () => {
        expect(createCoreMap().regionId(x, y)).toBe(expected.regionId);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "(0,0) 何もない",
    x: 0,
    y: 0,
    expected: {
      valid: true,
      tileId: TILE.PLAIN,
      // 2048 未満はオートタイルではない
      autotileType: -1,
      regionId: 0,
    },
  },
  {
    name: "(1,0) オートタイルの 1 つ手前",
    x: 1,
    y: 0,
    expected: {
      valid: true,
      tileId: TILE.LAST_NORMAL,
      autotileType: -1,
      regionId: 1,
    },
  },
  {
    name: "(2,0) オートタイルの先頭",
    x: 2,
    y: 0,
    expected: {
      valid: true,
      tileId: TILE.AUTO_0,
      autotileType: 0,
      regionId: 7,
    },
  },
  {
    name: "(0,1) 同じ種類の最後",
    x: 0,
    y: 1,
    expected: {
      valid: true,
      tileId: TILE.AUTO_0_LAST,
      // 48 個で 1 つの種類。2095 までは 0
      autotileType: 0,
      regionId: 0,
    },
  },
  {
    name: "(1,1) 次の種類の先頭",
    x: 1,
    y: 1,
    expected: {
      valid: true,
      tileId: TILE.AUTO_1,
      autotileType: 1,
      regionId: 63,
    },
  },
  {
    name: "(2,1) 3 つめの種類",
    x: 2,
    y: 1,
    expected: {
      valid: true,
      tileId: TILE.AUTO_3,
      autotileType: 3,
      regionId: 12,
    },
  },
  {
    name: "マップの外 (左)",
    x: -1,
    y: 0,
    expected: {
      valid: false,
      // 範囲外の添字は undefined になり、|| 0 で 0 になる
      tileId: 0,
      autotileType: -1,
      // 範囲外は地域なし
      regionId: 0,
    },
  },
  {
    name: "マップの外 (下)",
    x: 0,
    y: HEIGHT,
    expected: {
      valid: false,
      // (5 * 2 + 2) * 3 + 0 は z=6 相当の位置。データの外なので 0
      tileId: 0,
      autotileType: -1,
      regionId: 0,
    },
  },
];

testCases.forEach(runTestCase);
