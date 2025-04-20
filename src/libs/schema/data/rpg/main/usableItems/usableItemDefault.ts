import type { DomainLabel, UsableItemLabels } from "@RpgTypes/schema";

export const MockUsableItem = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率",
  },
} as const satisfies DomainLabel<UsableItemLabels>;
