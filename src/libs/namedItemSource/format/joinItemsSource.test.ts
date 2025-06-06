import { describe, test, expect } from "vitest";
import { joinItemsSoruce } from "./joinItemsSource";
import type { FormatCompiled, NamedItemSource } from "./core";

const mockWeapons = {
  label: "weapons",
  source: { author: "rmmz", module: "data", kind: "weapon" },
  items: [
    { id: 1, name: "sword" },
    { id: 2, name: "axe" },
    { id: 3, name: "bow" },
  ],
} as const satisfies NamedItemSource;

const mockEnemies = {
  label: "enemies",
  source: { author: "rmmz", module: "data", kind: "enemy" },
  items: [
    { id: 4, name: "goblin" },
    { id: 5, name: "orc" },
    { id: 6, name: "dragon" },
  ],
} as const satisfies NamedItemSource;

describe("joinItemsSoruce", () => {
  describe("when label does not have dataSource", () => {
    const map = joinItemsSoruce(
      [
        {
          targetKey: 6,
          pattern: "format A",
          label: "Label 6",
        },
      ],
      [mockWeapons, mockEnemies]
    );
    test("returns entry with empty data array", () => {
      expect(map.size).toBe(1);
      expect(map.get(6)).toEqual({
        patternCompiled: "format A",
        label: "Label 6",
        data: undefined,
      } satisfies FormatCompiled);
    });
  });

  describe("when label has dataSource", () => {
    const map = joinItemsSoruce(
      [
        {
          targetKey: 7,
          pattern: "fmt",
          label: "label 7",
          dataSource: { ...mockWeapons.source },
        },
      ],
      [mockWeapons, mockEnemies]
    );
    test("returns entry with data from the correct NamedItemSource", () => {
      expect(map.size).toBe(1);

      expect(map.get(7)).toEqual({
        patternCompiled: "fmt",
        label: "label 7",
        data: mockWeapons.items,
      } satisfies FormatCompiled);
    });
  });
});

describe("buildFinalFormatMap with empty input", () => {
  test("returns an empty map when no labels or sources are provided", () => {
    const map = joinItemsSoruce([], []);
    expect(map).toEqual(new Map());
  });
});
