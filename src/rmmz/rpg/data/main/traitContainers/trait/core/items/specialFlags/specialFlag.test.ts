import { describe, expect, test } from "vitest";
import type { Data_NamedItem } from "@RpgTypes/libs";
import {
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_GUARD,
  FLAG_ID_SUBSTITUTE,
  FLAG_ID_PRESERVE_TP,
} from "./constants";
import { specialFlagToArray } from "./specialFlags";

describe("specialFlagToArray", () => {
  const result = specialFlagToArray({
    autoBattle: "Auto Battle",
    guard: "Guard",
    substitute: "Substitute",
    preventEscape: "Prevent Escape",
  });
  test("should return correct special flag options", () => {
    const expected: Data_NamedItem[] = [
      { id: FLAG_ID_AUTO_BATTLE, name: "Auto Battle" },
      { id: FLAG_ID_GUARD, name: "Guard" },
      { id: FLAG_ID_SUBSTITUTE, name: "Substitute" },
      { id: FLAG_ID_PRESERVE_TP, name: "Prevent Escape" },
    ];
    expect(result).toEqual(expected);
  });
  test("should be sorted by id", () => {
    const sortedResult = [...result].sort((a, b) => a.id - b.id);
    expect(result).toEqual(sortedResult);
  });
});
