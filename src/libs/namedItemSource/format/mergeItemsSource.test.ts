import { describe, test, expect } from "vitest";
import type {
  FormatCompiled,
  FormatLabelResolved,
  NamedItemSource,
  SourceIdentifier,
} from "./core";
import { mergeItemsSource } from "./mergeItemsSource";

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

const mockSkills = {
  label: "skills",
  source: { author: "rmmz", module: "data", kind: "skill" },
  items: [
    { id: 7, name: "fireball" },
    { id: 8, name: "heal" },
    { id: 9, name: "lightning" },
  ],
} as const satisfies NamedItemSource;

const mockEmptySource = {
  label: "empty",
  source: { author: "rmmz", module: "data", kind: "empty" },
  items: [],
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

const testCaseMrgeItemsSource = <Key>({
  caseName,
  labels,
  namedItemSources,
  expected,
}: TestCase<Key>) => {
  describe(caseName, () => {
    const map: Map<Key, FormatCompiled> = mergeItemsSource(labels, namedItemSources);
    test("returns a map with correct entries", () => {
      expect(map.size).lessThanOrEqual(labels.length);
    });
    test("returns a map with correct entries for each label", () => {
      expect(map).toEqual(expected);
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
      caseName: "all labels have valid dataSource",
      labels: [
        { label: "weapon113", pattern: "{name}", kindId: 113, dataSource: mockWeapons.source },
        { label: "weapon211", pattern: "{name}", kindId: 211, dataSource: mockWeapons.source },
        { label: "enemy404", pattern: "enemy {name}", kindId: 404, dataSource: mockEnemies.source },
        { label: "skill999", pattern: "999{name}", kindId: 999, dataSource: mockSkills.source },
        {
          label: "emptySource",
          pattern: "{name}",
          kindId: 1000,
          dataSource: mockEmptySource.source,
        },
      ],
      namedItemSources: [mockEnemies, mockWeapons, mockSkills, mockEmptySource],
      expected: new Map([
        [113, { label: "weapon113", patternCompiled: "{name}", data: mockWeapons.items }],
        [211, { label: "weapon211", patternCompiled: "{name}", data: mockWeapons.items }],
        [404, { label: "enemy404", patternCompiled: "enemy {name}", data: mockEnemies.items }],
        [999, { label: "skill999", patternCompiled: "999{name}", data: mockSkills.items }],
        [1000, { label: "emptySource", patternCompiled: "{name}", data: mockEmptySource.items }],
      ]),
    },
    {
      caseName: "labels with and without dataSource",
      labels: [
        { label: "", pattern: "", kindId: 0 },
        { label: "aaa", pattern: "format A", kindId: 58 },
        { label: "bbb", pattern: "format B", kindId: 66, dataSource: mockWeapons.source },
        { label: "ccc", pattern: "format C", kindId: 75, dataSource: mockInvalidSource },
        { label: "ddd", pattern: "format D", kindId: 81, dataSource: mockWeapons.source },
      ],
      namedItemSources: [mockWeapons, mockEnemies],
      expected: new Map([
        [0, { label: "", patternCompiled: "", data: undefined }],
        [58, { label: "aaa", patternCompiled: "format A", data: undefined }],
        [66, { label: "bbb", patternCompiled: "format B", data: mockWeapons.items }],
        [75, { label: "ccc", patternCompiled: "format C", data: undefined }],
        [81, { label: "ddd", patternCompiled: "format D", data: mockWeapons.items }],
      ]),
    },
  ]);
  describe("tergetkey is not unique", () => {
    runTest("returns last entry for duplicate targetKey", [
      {
        caseName: "duplicate targetKey with different dataSource",
        labels: [
          { label: "skill", pattern: "{name}", kindId: 926, dataSource: mockSkills.source },
          { label: "enemy", pattern: "{name}", kindId: 926, dataSource: mockEnemies.source },
          { label: "weapon", pattern: "{name}", kindId: 926, dataSource: mockWeapons.source },
        ],
        namedItemSources: [mockWeapons, mockEnemies],
        expected: new Map([
          [926, { label: "weapon", patternCompiled: "{name}", data: mockWeapons.items }],
        ]),
      },
    ]);
  });
});
