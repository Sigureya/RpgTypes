import type { DomainLabel } from "@RpgTypes/templates";
import type { UsableItemLabels } from "./usableItemLabels";

export const DEFAULT_USABLE_ITEM_LABELS = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率",
  },
} as const satisfies DomainLabel<UsableItemLabels>;
