import type { DomainLabel } from "@RpgTypes/templates";
import type { DamageLabels } from "./damageLabels";

export const DEFAULT_DAMAGE_LABELS = {
  title: "ダメージ",
  options: {},
} as const satisfies DomainLabel<DamageLabels>;
