import { describe, expect, test, vi } from "vitest";
import type { Command_CommonEvent, Data_CommonEvent } from "@RpgTypes/rmmz";
import {
  makeCommonEventData,
  makeCommandCommonEvent as common,
} from "@RpgTypes/rmmz";
import { treeShake } from "./treeShake";
const mock: Data_CommonEvent[] = [
  makeCommonEventData({ id: 1, name: "A", list: [common({ eventId: 2 })] }),
  makeCommonEventData({ id: 2, name: "B", list: [common({ eventId: 3 })] }),
  makeCommonEventData({ id: 3, name: "C", list: [] }),
  makeCommonEventData({ id: 4, name: "D", list: [common({ eventId: 5 })] }),
  makeCommonEventData({ id: 5, name: "E", list: [] }),
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
  test(() => {
    const expected = new Set([1, 2, 3, 5]);
    const result: Set<number> = treeShake(mock, new Set([1]));
    expect(result).toEqual(expected);
  });
});
