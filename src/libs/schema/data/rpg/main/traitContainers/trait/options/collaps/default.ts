import type { DomainLabel } from "@RpgTypes/templates";
import type { CollapsOptionLabels } from "./labels";

export const DEFAULT_COLLAPS_LABELS = {
  domainName: "消滅エフェクト",
  options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし",
  },
} as const satisfies DomainLabel<CollapsOptionLabels>;
