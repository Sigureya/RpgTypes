import { describe, expect, test, vi } from "vitest";
import type { Trait } from "@RpgTypes/rmmz/rpg";
import {
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_GUARD,
  FLAG_ID_PRESERVE_TP,
  FLAG_ID_SUBSTITUTE,
  TRAIT_SPECIAL_FLAG,
  traitCollapseType,
  traitIsPreserveTp,
  traitsIsAutoBattle,
  traitsIsGuard,
  traitsIsSubstitute,
  traitsSpecialFlag,
  TRAIT_COLLAPSE_TYPE,
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
}

const cases: TestCase[] = [
  { name: "特徴なし", traits: [] },
  { name: "自動戦闘", traits: [flag(FLAG_ID_AUTO_BATTLE)] },
  { name: "防御", traits: [flag(FLAG_ID_GUARD)] },
  { name: "身代わり", traits: [flag(FLAG_ID_SUBSTITUTE)] },
  { name: "TP持ち越し", traits: [flag(FLAG_ID_PRESERVE_TP)] },
  {
    name: "全部",
    traits: [
      flag(FLAG_ID_AUTO_BATTLE),
      flag(FLAG_ID_GUARD),
      flag(FLAG_ID_SUBSTITUTE),
      flag(FLAG_ID_PRESERVE_TP),
    ],
  },
  { name: "value に入っているだけ", traits: [flagInValue(FLAG_ID_GUARD)] },
  { name: "無関係なフラグ", traits: [flag(99)] },
];

describe("specialFlag がコアスクリプトと一致する", () => {
  cases.forEach(({ name, traits }) => {
    describe(name, () => {
      const flagIds = [
        FLAG_ID_AUTO_BATTLE,
        FLAG_ID_GUARD,
        FLAG_ID_SUBSTITUTE,
        FLAG_ID_PRESERVE_TP,
      ];
      flagIds.forEach((flagId) => {
        test(`flagId: ${flagId}`, () => {
          const battlerBase = createMockedBattlerBase(traits);
          const expected: boolean = battlerBase.specialFlag(flagId);
          const result: boolean = traitsSpecialFlag(traits, flagId);
          expect(result).toBe(expected);
        });
      });

      test("isAutoBattle", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(traitsIsAutoBattle(traits)).toBe(battlerBase.isAutoBattle());
      });

      test("isGuard", () => {
        const battlerBase = createMockedBattlerBase(traits);
        // isGuard は入力可能かどうかも見るので、特徴の判定だけを比べる
        expect(traitsIsGuard(traits)).toBe(
          battlerBase.specialFlag(FLAG_ID_GUARD),
        );
      });

      test("isSubstitute", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(traitsIsSubstitute(traits)).toBe(
          battlerBase.specialFlag(FLAG_ID_SUBSTITUTE),
        );
      });

      test("isPreserveTp", () => {
        const battlerBase = createMockedBattlerBase(traits);
        expect(traitIsPreserveTp(traits)).toBe(battlerBase.isPreserveTp());
      });
    });
  });
});

describe("collapseType がコアスクリプトと一致する", () => {
  const collapseCases: Trait[][] = [
    [],
    [collapse(1)],
    [collapse(1), collapse(3)],
    [collapse(3), collapse(1)],
  ];
  collapseCases.forEach((traits, index) => {
    test(`case ${index}`, () => {
      const battlerBase = createMockedBattlerBase(traits);
      const expected: number = battlerBase.collapseType();
      const result: number = traitCollapseType(traits);
      expect(result).toBe(expected);
    });
  });
});
