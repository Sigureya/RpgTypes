import type { Data_NamedItem } from "src/namedItemSource";
import { describe, expect, test } from "vitest";
import { collapsOptionsToArray } from "./collaps";
import {
  COLLAPS_NORMAL,
  COLLAPS_BOSS,
  COLLAPS_INSTANT,
  COLLAPS_NONE,
} from "./constants";
import type { CollapsOptionLabels, NormalLabel } from "./labels";

describe("collapsOptionsToArray", () => {
  const options: CollapsOptionLabels = {
    bossCollaps: "Boss Collapse",
    instantCollaps: "Instant Collapse",
    noneCollaps: "No Collapse",
  };
  const global: NormalLabel = {
    normal: "Normal Collapse",
  };

  const result = collapsOptionsToArray(options, global);
  test("should return correct collaps options", () => {
    const expected: Data_NamedItem[] = [
      { id: COLLAPS_NORMAL, name: "Normal Collapse" },
      { id: COLLAPS_BOSS, name: "Boss Collapse" },
      { id: COLLAPS_INSTANT, name: "Instant Collapse" },
      { id: COLLAPS_NONE, name: "No Collapse" },
    ];

    expect(result).toEqual(expected);
  });
  test("should be sorted by id", () => {
    const sortedResult = [...result].sort((a, b) => a.id - b.id);
    expect(result).toEqual(sortedResult);
  });
});
