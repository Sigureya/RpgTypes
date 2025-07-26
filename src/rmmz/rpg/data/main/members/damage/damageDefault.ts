import type { DomainLabel } from "src/libs/templates";
import type { DamageLabels } from "./damageLabels";

export const DEFAULT_DAMAGE_LABELS = {
  title: "ダメージ",
  options: {},
} as const satisfies DomainLabel<DamageLabels>;
