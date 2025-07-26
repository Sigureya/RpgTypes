import type { DomainLabel } from "src/libs/templates";
import type { SkillLabels } from "./skillLabels";

export const DEFAULT_SKILL_LABELS = {
  title: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費",
  },
} as const satisfies DomainLabel<SkillLabels>;
