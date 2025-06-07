import { describe, test, expect } from "vitest";
import { mergeItemsSource } from "./mergeItemsSource";
import type { FormatCompiled, FormatLabelResolved, NamedItemSource, SourceIdentifier } from "./core";

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

const mockInvalidSource = {
  author: "unknown",
  module: "unknown",
  kind: "unknown",
} satisfies SourceIdentifier;

interface TestCase<Key> {
  caseName: string;
  namedItemSources: NamedItemSource[];
  labels: FormatLabelResolved<Key>[];
  expected: Map<Key, FormatCompiled>;
}

const testCaseMrgeItemsSource = <Key>({ caseName, labels, namedItemSources }: TestCase<Key>) => {
  describe(caseName, () => {
    const map: Map<Key, FormatCompiled> = mergeItemsSource(labels, namedItemSources);
    test("returns a map with correct entries", () => {
      expect(map.size).toBe(labels.length);
    });
  });
};

const runTest = <Key>(caseDescribe: string, caseList: TestCase<Key>[]) => {
  describe(caseDescribe, () => {
    caseList.forEach(testCaseMrgeItemsSource);
  });
};

describe("mergeItemsSource", () => {
  runTest("returns empty map for empty input", [
    {
      caseName: "empty labels and empty sources",
      labels: [],
      namedItemSources: [],
      expected: new Map(),
    },
    {
      caseName: "empty labels with non-empty sources",
      labels: [],
      namedItemSources: [mockWeapons, mockEnemies],
      expected: new Map(),
    },
  ]);
  runTest("returns correct map for mixed labels", [
    {
      caseName: "labels with and without dataSource",
      labels: [
        { label: "aaa", pattern: "format A", targetKey: 58 },
        { label: "bbb", pattern: "format B", targetKey: 66, dataSource: mockWeapons.source },
        { label: "ccc", pattern: "format C", targetKey: 75, dataSource: mockInvalidSource },
      ],
      namedItemSources: [mockWeapons, mockEnemies],
      expected: new Map([
        [58, { label: "aaa", patternCompiled: "format A", data: undefined }],
        [66, { label: "bbb", patternCompiled: "format B", data: mockWeapons.items }],
        [75, { label: "ccc", patternCompiled: "format C", data: undefined }],
      ]),
    },
  ]);
});
