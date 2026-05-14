import type { DomainLabel } from "@RpgTypes/libs";
import type { DamageLabels } from "./damageLabels";

export const DEFAULT_DAMAGE_LABELS = {
  title: "ダメージ",
  options: {},
} as const satisfies DomainLabel<DamageLabels>;
