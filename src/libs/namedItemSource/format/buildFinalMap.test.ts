import { describe, test, expect } from "vitest";
import { buildFinalFormatMap } from "./buildFinalMap";
import type { NamedItemSource } from "./types";

const mockWeapons = {
  source: { author: "rmmz", module: "data", kind: "weapon" },
  items: [
    { id: 1, name: "sword" },
    { id: 2, name: "axe" },
    { id: 3, name: "bow" },
  ],
} as const satisfies NamedItemSource;

const mockEnemies = {
  source: { author: "rmmz", module: "data", kind: "enemy" },
  items: [
    { id: 4, name: "goblin" },
    { id: 5, name: "orc" },
    { id: 6, name: "dragon" },
  ],
} as const satisfies NamedItemSource;

describe("", () => {
  describe("", () => {
    const map = buildFinalFormatMap(
      [
        {
          targetKey: 6,
          format: "format A",
          label: "Label 6",
        },
      ],
      [mockWeapons, mockEnemies]
    );
    test("", () => {
      expect(map.size).toBe(1);
      expect(map.get(6)).toEqual({
        format: "format A",
        label: "Label 6",
        data: [],
      });
    });
  });
  describe("", () => {
    const map = buildFinalFormatMap(
      [
        {
          targetKey: 7,
          format: "fmt",
          label: "label 7",
          dataSource: { ...mockWeapons.source },
        },
      ],
      [mockWeapons, mockEnemies]
    );
    test("", () => {
      expect(map.size).toBe(1);

      expect(map.get(7)).toEqual({
        format: "fmt",
        label: "label 7",
        data: mockWeapons.items,
      });
    });
  });
});

describe("", () => {
  test("", () => {
    const map = buildFinalFormatMap([], []);
    expect(map).toEqual(new Map());
  });
});
