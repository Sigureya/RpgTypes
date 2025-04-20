import type { DomainLabel } from "@RpgTypes/templates";
import type { DamageLabels } from "./damageLabels";

export const DEFAULT_DAMAGE_LABELS = {
  domainName: "ダメージ",
  options: {},
} as const satisfies DomainLabel<DamageLabels>;
