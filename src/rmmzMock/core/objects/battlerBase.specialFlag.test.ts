import { describe, expect, test, vi } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import {
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_GUARD,
  FLAG_ID_PRESERVE_TP,
  FLAG_ID_SUBSTITUTE,
  TRAIT_COLLAPSE_TYPE,
  TRAIT_SPECIAL_FLAG,
  traitCollapseType,
  traitIsPreserveTp,
  traitsIsAutoBattle,
  traitsIsGuard,
  traitsIsSubstitute,
  traitsSpecialFlag,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_BattlerBase } from "@RpgTypes/rmmzRuntime";
import { Game_BattlerBase } from "./rmmz_objects";

const createMockedBattlerBase = (traits: Trait[]): Rmmz_BattlerBase => {
  const battlerBase = new Game_BattlerBase();
  vi.spyOn(battlerBase, "allTraits").mockReturnValue(traits);
  return battlerBase;
};

const flag = (dataId: number): Trait => ({
  code: TRAIT_SPECIAL_FLAG,
  dataId,
  value: 0,
});

/** dataId ではなく value に flagId を入れた特徴。誤判定の検出用 */
const flagInValue = (value: number): Trait => ({
  code: TRAIT_SPECIAL_FLAG,
  dataId: 99,
  value,
});

const collapse = (dataId: number): Trait => ({
  code: TRAIT_COLLAPSE_TYPE,
  dataId,
  value: 0,
});

interface TestCase {
  name: string;
  traits: Trait[];
  expected: {
    autoBattle: boolean;
    guard: boolean;
    substitute: boolean;
    preserveTp: boolean;
    collapseType: number;
  };
}

const runTestCase = (testCase: TestCase): void => {
  describe(testCase.name, () => {
    const { traits, expected } = testCase;

    describe("function", () => {
      test("traitsIsAutoBattle", () => {
        expect(traitsIsAutoBattle(traits)).toBe(expected.autoBattle);
      });
      test("traitsIsGuard", () => {
        expect(traitsIsGuard(traits)).toBe(expected.guard);
      });
      test("traitsIsSubstitute", () => {
        expect(traitsIsSubstitute(traits)).toBe(expected.substitute);
      });
      test("traitIsPreserveTp", () => {
        expect(traitIsPreserveTp(traits)).toBe(expected.preserveTp);
      });
      test("traitsSpecialFlag", () => {
        expect(traitsSpecialFlag(traits, FLAG_ID_AUTO_BATTLE)).toBe(
          expected.autoBattle,
        );
        expect(traitsSpecialFlag(traits, FLAG_ID_GUARD)).toBe(expected.guard);
        expect(traitsSpecialFlag(traits, FLAG_ID_SUBSTITUTE)).toBe(
          expected.substitute,
        );
        expect(traitsSpecialFlag(traits, FLAG_ID_PRESERVE_TP)).toBe(
          expected.preserveTp,
        );
      });
      test("traitCollapseType", () => {
        expect(traitCollapseType(traits)).toBe(expected.collapseType);
      });
    });

    describe("BattlerBase", () => {
      test("isAutoBattle", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.isAutoBattle()).toBe(expected.autoBattle);
      });
      // isGuard / isSubstitute は canMove() も見るので、特徴の判定だけを比べる
      test("specialFlag(GUARD)", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.specialFlag(FLAG_ID_GUARD)).toBe(expected.guard);
      });
      test("specialFlag(SUBSTITUTE)", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.specialFlag(FLAG_ID_SUBSTITUTE)).toBe(
          expected.substitute,
        );
      });
      test("isPreserveTp", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.isPreserveTp()).toBe(expected.preserveTp);
      });
      test("collapseType", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(battlerBase.collapseType()).toBe(expected.collapseType);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    name: "特徴なし",
    traits: [],
    expected: {
      autoBattle: false,
      guard: false,
      substitute: false,
      preserveTp: false,
      collapseType: 0,
    },
  },
  {
    name: "自動戦闘",
    traits: [flag(FLAG_ID_AUTO_BATTLE)],
    expected: {
      autoBattle: true,
      guard: false,
      substitute: false,
      preserveTp: false,
      collapseType: 0,
    },
  },
  {
    name: "防御",
    traits: [flag(FLAG_ID_GUARD)],
    expected: {
      autoBattle: false,
      guard: true,
      substitute: false,
      preserveTp: false,
      collapseType: 0,
    },
  },
  {
    name: "身代わり",
    traits: [flag(FLAG_ID_SUBSTITUTE)],
    expected: {
      autoBattle: false,
      guard: false,
      substitute: true,
      preserveTp: false,
      collapseType: 0,
    },
  },
  {
    name: "TP 持ち越し",
    traits: [flag(FLAG_ID_PRESERVE_TP)],
    expected: {
      autoBattle: false,
      guard: false,
      substitute: false,
      preserveTp: true,
      collapseType: 0,
    },
  },
  {
    name: "全部",
    traits: [
      flag(FLAG_ID_AUTO_BATTLE),
      flag(FLAG_ID_GUARD),
      flag(FLAG_ID_SUBSTITUTE),
      flag(FLAG_ID_PRESERVE_TP),
    ],
    expected: {
      autoBattle: true,
      guard: true,
      substitute: true,
      preserveTp: true,
      collapseType: 0,
    },
  },
  {
    name: "value にだけ flagId が入っている",
    // 判定は dataId で行う。value を見る実装なら全て true になってしまう
    traits: [
      flagInValue(FLAG_ID_AUTO_BATTLE),
      flagInValue(FLAG_ID_GUARD),
      flagInValue(FLAG_ID_SUBSTITUTE),
      flagInValue(FLAG_ID_PRESERVE_TP),
    ],
    expected: {
      autoBattle: false,
      guard: false,
      substitute: false,
      preserveTp: false,
      collapseType: 0,
    },
  },
  {
    name: "無関係なフラグ",
    traits: [flag(99)],
    expected: {
      autoBattle: false,
      guard: false,
      substitute: false,
      preserveTp: false,
      collapseType: 0,
    },
  },
  {
    name: "消滅方法 (1 つ)",
    traits: [collapse(1)],
    expected: {
      autoBattle: false,
      guard: false,
      substitute: false,
      preserveTp: false,
      collapseType: 1,
    },
  },
  {
    name: "消滅方法 (大きいほうを採る)",
    traits: [collapse(3), collapse(1)],
    expected: {
      autoBattle: false,
      guard: false,
      substitute: false,
      preserveTp: false,
      collapseType: 3,
    },
  },
];

testCases.forEach(runTestCase);
