import type { DomainLabel, SkillLabels } from "@RpgTypes/schema";

export const MockSkillLabels = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費",
  },
} as const satisfies DomainLabel<SkillLabels>;
