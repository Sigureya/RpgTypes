import type { DomainLabel, ItemLabels } from "@RpgTypes/schema";

export const MockItemLabels = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品",
  },
} as const satisfies DomainLabel<ItemLabels>;
