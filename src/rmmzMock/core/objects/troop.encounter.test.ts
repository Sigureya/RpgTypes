import { describe, expect, test, vi } from "vitest";
import type { Encounter, Map_EncounterSoucre } from "@RpgTypes/rmmz/rpg";
import { selectMapEncounters } from "@RpgTypes/rmmz/rpg";
import { Game_Map, Game_Player } from "./rmmz_objects";

const MAP_WIDTH = 3;
const MAP_HEIGHT = 2;
const REGION_LAYER = 5;
const LAYER_COUNT = 6;

/**
 * @description regionId は data の第 5 層に入っている。
 * 座標 [x, y] とリージョン ID の組から、元実装が読むのと同じ並びの data を作る。
 */
const createMapData = (
  regions: ReadonlyArray<readonly [number, number, number]>,
  encounterList: Encounter[],
): Map_EncounterSoucre => {
  const data = new Array<number>(LAYER_COUNT * MAP_HEIGHT * MAP_WIDTH).fill(0);
  regions.forEach(([x, y, regionId]) => {
    data[(REGION_LAYER * MAP_HEIGHT + y) * MAP_WIDTH + x] = regionId;
  });
  return {
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    data,
    encounterList,
  };
};

/**
 * @description $dataMap を差し替えたうえで Game_Map / Game_Player の
 * prototype をそのまま使い、元実装の makeEncounterTroopId を走らせる。
 */
const callOriginal = (
  map: Map_EncounterSoucre,
  x: number,
  y: number,
  randomFn: (max: number) => number,
): number => {
  vi.stubGlobal("$dataMap", map);
  const gameMap = Object.create(Game_Map.prototype) as {
    regionId(x: number, y: number): number;
  };
  vi.stubGlobal("$gameMap", gameMap);
  // @ts-expect-error Math.randomInt はツクールが足す拡張
  Math.randomInt = randomFn;
  const player = Object.create(Game_Player.prototype) as {
    _x: number;
    _y: number;
    makeEncounterTroopId(): number;
  };
  player._x = x;
  player._y = y;
  return player.makeEncounterTroopId();
};

const callFunction = (
  map: Map_EncounterSoucre,
  x: number,
  y: number,
  randomFn: (max: number) => number,
): number => {
  const encounter = selectMapEncounters(map, x, y, randomFn);
  return encounter ? encounter.troopId : 0;
};

interface TestCase {
  caseName: string;
  regions: ReadonlyArray<readonly [number, number, number]>;
  encounterList: Encounter[];
  x: number;
  y: number;
  randomValue: number;
  expectedTroopId: number;
  /** 重み合計が 0 のときは乱数を引かないので undefined になる */
  expectedWeightSum: number | undefined;
}

const createRandomFn = (
  value: number,
): ((max: number) => number) & { calls: number[] } => {
  const calls: number[] = [];
  const fn = (max: number): number => {
    calls.push(max);
    return value;
  };
  return Object.assign(fn, { calls });
};

describe("selectMapEncounters", () => {
  testCases.forEach((testCase) => {
    describe(testCase.caseName, () => {
      const map = createMapData(testCase.regions, testCase.encounterList);

      test("Game_Player.makeEncounterTroopId", () => {
        const randomFn = createRandomFn(testCase.randomValue);
        const result = callOriginal(map, testCase.x, testCase.y, randomFn);
        expect(result).toBe(testCase.expectedTroopId);
        expect(randomFn.calls).toStrictEqual(
          testCase.expectedWeightSum === undefined
            ? []
            : [testCase.expectedWeightSum],
        );
      });

      test("function", () => {
        const randomFn = createRandomFn(testCase.randomValue);
        const result = callFunction(map, testCase.x, testCase.y, randomFn);
        expect(result).toBe(testCase.expectedTroopId);
        expect(randomFn.calls).toStrictEqual(
          testCase.expectedWeightSum === undefined
            ? []
            : [testCase.expectedWeightSum],
        );
      });

      test("同値", () => {
        const originalResult = callOriginal(
          map,
          testCase.x,
          testCase.y,
          createRandomFn(testCase.randomValue),
        );
        const functionResult = callFunction(
          map,
          testCase.x,
          testCase.y,
          createRandomFn(testCase.randomValue),
        );
        expect(functionResult).toBe(originalResult);
      });
    });
  });
});

const testCases: TestCase[] = [
  {
    caseName: "エンカウントが空なら 0",
    regions: [],
    encounterList: [],
    x: 0,
    y: 0,
    randomValue: 0,
    expectedTroopId: 0,
    expectedWeightSum: undefined,
  },
  {
    caseName: "regionSet が空のエンカウントはどこでも出る",
    regions: [[1, 1, 7]],
    encounterList: [{ regionSet: [], troopId: 11, weight: 5 }],
    x: 1,
    y: 1,
    randomValue: 0,
    expectedTroopId: 11,
    expectedWeightSum: 5,
  },
  {
    caseName: "リージョン未設定のタイルでも regionSet が空なら出る",
    regions: [],
    encounterList: [{ regionSet: [], troopId: 12, weight: 3 }],
    x: 0,
    y: 0,
    randomValue: 2,
    expectedTroopId: 12,
    expectedWeightSum: 3,
  },
  {
    caseName: "リージョンが一致するものだけが候補になる",
    regions: [[2, 0, 4]],
    encounterList: [
      { regionSet: [9], troopId: 21, weight: 10 },
      { regionSet: [4], troopId: 22, weight: 2 },
    ],
    x: 2,
    y: 0,
    randomValue: 1,
    expectedTroopId: 22,
    expectedWeightSum: 2,
  },
  {
    caseName: "リージョンが一致しなければ候補が消えて 0",
    regions: [[2, 0, 4]],
    encounterList: [{ regionSet: [9], troopId: 21, weight: 10 }],
    x: 2,
    y: 0,
    randomValue: 0,
    expectedTroopId: 0,
    expectedWeightSum: undefined,
  },
  {
    caseName: "regionSet が空のものと一致するものは合算される",
    regions: [[0, 1, 3]],
    encounterList: [
      { regionSet: [], troopId: 31, weight: 1 },
      { regionSet: [3], troopId: 32, weight: 4 },
      { regionSet: [8], troopId: 33, weight: 100 },
    ],
    x: 0,
    y: 1,
    randomValue: 1,
    expectedTroopId: 32,
    expectedWeightSum: 5,
  },
  {
    caseName: "重みの境界。乱数が最初の重み未満なら先頭が当たる",
    regions: [[0, 1, 3]],
    encounterList: [
      { regionSet: [], troopId: 31, weight: 1 },
      { regionSet: [3], troopId: 32, weight: 4 },
    ],
    x: 0,
    y: 1,
    randomValue: 0,
    expectedTroopId: 31,
    expectedWeightSum: 5,
  },
  {
    caseName: "マップ外の座標はリージョン 0 として扱う",
    regions: [[1, 1, 6]],
    encounterList: [
      { regionSet: [6], troopId: 41, weight: 4 },
      { regionSet: [], troopId: 42, weight: 4 },
    ],
    x: MAP_WIDTH,
    y: 0,
    randomValue: 0,
    expectedTroopId: 42,
    expectedWeightSum: 4,
  },
  {
    caseName: "重みが 0 だけなら選ばれない",
    regions: [],
    encounterList: [{ regionSet: [], troopId: 51, weight: 0 }],
    x: 0,
    y: 0,
    randomValue: 0,
    expectedTroopId: 0,
    expectedWeightSum: undefined,
  },
];
