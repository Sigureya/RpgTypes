import { describe, expect, test, vi } from "vitest";
import type { Terms_Basic } from "@RpgTypes/rmmz";
import { basicTerms } from "./systemTerms";
import type { ExtractedBasicTermsTextItem } from "./types";

type UUID = "test-uuid";
const MockUUID = "test-uuid" as const satisfies UUID;
const filename = "system.json" as const;

const kindBasic: Terms_Basic = {
  level: "レベル",
  levelA: "LV",
  hp: "ヒットポイント",
  hpA: "HP",
  mp: "マジックパワー",
  mpA: "MP",
  tp: "トクギポイント",
  tpA: "TP",
  experience: "経験値",
  exp: "EXP",
};

const basic = {
  level: "Level",
  levelA: "Lv",
  hp: "HP",
  hpA: "HP",
  mp: "MP",
  mpA: "MP",
  tp: "TP",
  tpA: "TP",
  experience: "Experience",
  exp: "EXP",
};

const expectedBasic: ExtractedBasicTermsTextItem<UUID>[] = [
  {
    baseText: basic.level,
    dataKey: "basic.level",
    filename,
    id: 0,
    kind: kindBasic.level,
    uuid: "test-uuid",
  },
  {
    baseText: basic.levelA,
    dataKey: "basic.levelA",
    filename,
    id: 0,
    kind: kindBasic.levelA,
    uuid: "test-uuid",
  },
  {
    baseText: basic.hp,
    dataKey: "basic.hp",
    filename,
    id: 0,
    kind: kindBasic.hp,
    uuid: "test-uuid",
  },
  {
    baseText: basic.hpA,
    dataKey: "basic.hpA",
    filename,
    id: 0,
    kind: kindBasic.hpA,
    uuid: "test-uuid",
  },
  {
    baseText: basic.mp,
    filename: filename,
    id: 0,
    kind: kindBasic.mp,
    uuid: "test-uuid",
    dataKey: "basic.mp",
  },
  {
    baseText: "MP",
    filename: "system.json",
    id: 0,
    kind: kindBasic.mpA,
    uuid: "test-uuid",
    dataKey: "basic.mpA",
  },
  {
    baseText: "TP",
    filename: "system.json",
    id: 0,
    kind: kindBasic.tp,
    uuid: "test-uuid",
    dataKey: "basic.tp",
  },
  {
    baseText: "TP",
    filename: "system.json",
    id: 0,
    kind: kindBasic.tpA,
    uuid: "test-uuid",
    dataKey: "basic.tpA",
  },
  {
    baseText: basic.experience,
    filename: filename,
    id: 0,
    kind: kindBasic.experience,
    uuid: "test-uuid",
    dataKey: "basic.experience",
  },
  {
    baseText: basic.exp,
    filename: filename,
    id: 0,
    kind: kindBasic.exp,
    uuid: "test-uuid",
    dataKey: "basic.exp",
  },
];

describe("systemBasic", () => {
  const mockFnUUID = vi.fn(() => MockUUID);
  const kindFn = vi.fn<(key: keyof Terms_Basic) => string>(
    (key) => kindBasic[key],
  );
  const result = basicTerms<UUID>(basic, filename, mockFnUUID, kindFn);

  test("should extract system basic terms", () => {
    expect(result).toEqual(expectedBasic);
  });

  test("basic handler should be called once for each basic key", () => {
    const calledKeys = new Set<string>(
      kindFn.mock.calls.map((call) => call[0]),
    );
    expect(calledKeys.size).toBe(Object.keys(basic).length);
    expect(calledKeys).toEqual(new Set(Object.keys(basic)));
  });
  test("messages handler should be called once for each message key", () => {
    const calledKeys = new Set<string>(
      kindFn.mock.calls.map((call) => call[0]),
    );
    expect(calledKeys.size).toBe(Object.keys(kindBasic).length);
    expect(calledKeys).toEqual(new Set(Object.keys(kindBasic)));
  });
});
