import type { DomainLabel } from "src/libs/templates/domainLabel";
import type { UsableItemLabels } from "./usableItemLabels";

export const DEFAULT_USABLE_ITEM_LABELS = {
  title: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率",
  },
} as const satisfies DomainLabel<UsableItemLabels>;
