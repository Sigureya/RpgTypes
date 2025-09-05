import { describe, expect, test } from "vitest";
import type { Command_CommonEvent, Data_CommonEvent } from "@RpgTypes/rmmz";
import {
  makeCommonEventData,
  makeCommandCommonEvent as common,
} from "@RpgTypes/rmmz";
import { treeShake } from "./treeShake";
const mock: Data_CommonEvent[] = [
  makeCommonEventData({ id: 1, name: "A", list: [common({ eventId: 2 })] }),
  makeCommonEventData({ id: 2, name: "B", list: [] }),
  makeCommonEventData({ id: 3, name: "C", list: [common({ eventId: 4 })] }),
  makeCommonEventData({ id: 4, name: "D", list: [common({ eventId: 5 })] }),
  makeCommonEventData({ id: 5, name: "E", list: [] }),
  makeCommonEventData({
    id: 6,
    name: "F",
    list: [common({ eventId: 1 }), common({ eventId: 3 })],
  }),
  makeCommonEventData({
    id: 7,
    name: "F",
    list: [common({ eventId: 7 })],
  }),
];

test("makeCommandCommonEvent", () => {
  const expected: Command_CommonEvent = {
    code: 117,
    indent: 0,
    parameters: [5],
  };
  const result: Command_CommonEvent = common({ eventId: 5 });
  expect(result).toEqual(expected);
});

describe("treeShake", () => {
  test("１つのイベントに依存している", () => {
    const root = new Set([1]);
    const expected = new Set([1, 2]);
    const result: ReadonlySet<number> = treeShake(mock, root);
    expect(result).toEqual(expected);
  });
  test("孤立しているコモンイベント", () => {
    const root = new Set([2]);
    const expected = new Set([2]);
    const result: ReadonlySet<number> = treeShake(mock, root);
    expect(result).toEqual(expected);
  });
  test("２つのイベントに依存している", () => {
    const root = new Set([3]);
    const expected = new Set([3, 4, 5]);
    const result: ReadonlySet<number> = treeShake(mock, root);
    expect(result).toEqual(expected);
  });
  test("起点を２つ指定し、依存関数を全て取得する", () => {
    const root = new Set([1, 3]);
    const expected = new Set([1, 2, 3, 4, 5]);
    const result: ReadonlySet<number> = treeShake(mock, root);
    expect(result).toEqual(expected);
  });

  test("もっと上を起点にして取得する", () => {
    const root = new Set([6]);
    const expected = new Set([1, 2, 3, 4, 5, 6]);
    const result: ReadonlySet<number> = treeShake(mock, root);
    expect(result).toEqual(expected);
  });
  test("循環参照している場合", () => {
    const root = new Set([7]);
    const expected = new Set([7]);
    const result: ReadonlySet<number> = treeShake(mock, root);
    expect(result).toEqual(expected);
  });
});
