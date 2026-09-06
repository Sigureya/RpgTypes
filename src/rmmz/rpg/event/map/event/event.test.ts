import { describe, expect, test } from "vitest";
import type { MapEvent } from "./page";
import { mapEvent, mapEventIdXy, mapEvents, mapEventsXy } from "./event";

/** イベントは番号を空けて並ぶ。0 番と欠番は null になる */
const event = (id: number, x: number, y: number): MapEvent => ({
  id,
  name: `EV${id}`,
  pages: [],
  note: "",
  x,
  y,
});

interface TestCase {
  name: string;
  events: (MapEvent | null)[];
  expected: {
    /** null を除いた並び */
    allIds: number[];
    /** (1,2) にいるイベントの並び */
    idsAtPoint: number[];
    /** (1,2) の先頭のイベント番号 */
    idAtPoint: number;
    /** (9,9) には誰もいない */
    idAtEmpty: number;
  };
}

const POINT = { x: 1, y: 2 } as const;
const EMPTY_POINT = { x: 9, y: 9 } as const;

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const map = { events: testCase.events };
    const { expected } = testCase;

    test("mapEvents", () => {
      const result = mapEvents(map).map((e) => e.id);
      expect(result).toEqual(expected.allIds);
    });

    test("mapEventsXy", () => {
      const result = mapEventsXy(map, POINT.x, POINT.y).map((e) => e.id);
      expect(result).toEqual(expected.idsAtPoint);
    });

    test("mapEventIdXy", () => {
      expect(mapEventIdXy(map, POINT.x, POINT.y)).toBe(expected.idAtPoint);
    });

    test("誰もいない場所", () => {
      expect(mapEventsXy(map, EMPTY_POINT.x, EMPTY_POINT.y)).toEqual([]);
      expect(mapEventIdXy(map, EMPTY_POINT.x, EMPTY_POINT.y)).toBe(
        expected.idAtEmpty,
      );
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "イベントなし",
    events: [null],
    expected: { allIds: [], idsAtPoint: [], idAtPoint: 0, idAtEmpty: 0 },
  },
  {
    name: "重ならずに並んでいる",
    events: [null, event(1, 1, 2), event(2, 3, 4)],
    expected: {
      allIds: [1, 2],
      idsAtPoint: [1],
      idAtPoint: 1,
      idAtEmpty: 0,
    },
  },
  {
    name: "同じ場所に重なっている",
    events: [null, event(1, 3, 4), event(2, 1, 2), event(3, 1, 2)],
    expected: {
      allIds: [1, 2, 3],
      // 並びは元のまま
      idsAtPoint: [2, 3],
      // 先頭だけを採る
      idAtPoint: 2,
      idAtEmpty: 0,
    },
  },
  {
    name: "欠番がある",
    events: [null, event(1, 1, 2), null, event(3, 1, 2)],
    expected: {
      allIds: [1, 3],
      idsAtPoint: [1, 3],
      idAtPoint: 1,
      idAtEmpty: 0,
    },
  },
];

testCases.forEach(runTestCase);

describe("mapEvent", () => {
  const map = { events: [null, event(1, 1, 2), null, event(3, 5, 6)] };

  test("番号で引く", () => {
    expect(mapEvent(map, 1)?.id).toBe(1);
    expect(mapEvent(map, 3)?.id).toBe(3);
  });

  test("欠番と範囲外は undefined", () => {
    expect(mapEvent(map, 0)).toBe(undefined);
    expect(mapEvent(map, 2)).toBe(undefined);
    expect(mapEvent(map, 99)).toBe(undefined);
  });
});
