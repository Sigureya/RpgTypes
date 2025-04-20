import type { DomainLabel } from "@RpgTypes/schema";
import type { ItemLabels } from "./itemLabels";

export const MockItemLabels = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品",
  },
} as const satisfies DomainLabel<ItemLabels>;
