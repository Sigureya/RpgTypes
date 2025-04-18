import { test, expect, describe } from "vitest";
import type { SkillLabels, EnemyLabels } from "@sigureya/rpgtypes";
import { mergeNestedPrimitiveRecords, mergeWithDefaults } from "./mergeLabel";

const MOCK_SKILL_LABELS = {
  domainName: "スキル",
  mpCost: "消費MP",
  tpCost: "消費TP",
  requiredWeaponTypeId1: "武器タイプ1",
  requiredWeaponTypeId2: "武器タイプ2",
} as const satisfies SkillLabels;

const MOCK_ENEMY_LABELS = {
  battlerHue: "色相",
  battlerName: "画像",
  domainName: "エネミー",
  dropItems: "ドロップアイテム",
  gold: "所持金",
} as const satisfies EnemyLabels;

describe("mergeWithDefaults", () => {
  describe("SkillLabels", () => {
    test("returns default when override is empty", () => {
      const result = mergeWithDefaults<SkillLabels>(MOCK_SKILL_LABELS, {});
      expect(result).toEqual(MOCK_SKILL_LABELS);
    });

    test("overrides only valid string fields", () => {
      const result = mergeWithDefaults(MOCK_SKILL_LABELS, {
        domainName: "skill",
        tpCost: 10, // not a string
      });
      const expected: SkillLabels = {
        domainName: "skill",
        mpCost: MOCK_SKILL_LABELS.mpCost,
        tpCost: MOCK_SKILL_LABELS.tpCost,
        requiredWeaponTypeId1: MOCK_SKILL_LABELS.requiredWeaponTypeId1,
        requiredWeaponTypeId2: MOCK_SKILL_LABELS.requiredWeaponTypeId2,
      };
      expect(result).toEqual(expected);
    });

    test("ignores extra keys not in default", () => {
      const badSrc = {
        ...MOCK_SKILL_LABELS,
        badParam: "bad",
      } as const satisfies {
        badParam: string;
      } & SkillLabels;
      const result = mergeWithDefaults<SkillLabels>(MOCK_SKILL_LABELS, badSrc);
      expect(result).toEqual(MOCK_SKILL_LABELS);
    });
  });

  describe("EnemyLabels", () => {
    test("returns default when override is empty", () => {
      const result = mergeWithDefaults<EnemyLabels>(MOCK_ENEMY_LABELS, {});
      expect(result).toEqual(MOCK_ENEMY_LABELS);
      expect(result).not.toBe(MOCK_ENEMY_LABELS);
    });

    test("overrides single field correctly", () => {
      const result = mergeWithDefaults(MOCK_ENEMY_LABELS, {
        domainName: "enemy",
      });
      const expected: EnemyLabels = {
        ...MOCK_ENEMY_LABELS,
        domainName: "enemy",
      };
      expect(result).toEqual(expected);
    });
  });
});

interface MockDomains {
  skill: SkillLabels;
  enemy: EnemyLabels;
}

describe("mergeNestedPrimitiveRecords", () => {
  const mock = {
    skill: MOCK_SKILL_LABELS,
    enemy: MOCK_ENEMY_LABELS,
  } as const satisfies MockDomains;

  test("returns deep copy equal to input when override is empty", () => {
    const result = mergeNestedPrimitiveRecords(mock, {});
    expect(result).not.toBe(mock);
    expect(result).toEqual(mock);
  });
  test("bad arg", () => {
    const domain: Partial<MockDomains> & { badArg: { s: string } } = {
      badArg: { s: "" },
    };
    const result = mergeNestedPrimitiveRecords(mock, domain);
    expect(result).toEqual(mock);
  });
});
