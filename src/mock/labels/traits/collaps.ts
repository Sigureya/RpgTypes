import type { DomainLabel, CollapsOptionLabels } from "@RpgTypes/schema";

export const MockCollapsLabels = {
  domainName: "消滅エフェクト",
  options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし",
  },
} as const satisfies DomainLabel<CollapsOptionLabels>;
