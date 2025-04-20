import type { DomainLabel } from "@RpgTypes/schema";
import type { ItemLabels } from "./itemLabels";

export const DEFAULT_ITEM_LABELS = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品",
  },
} as const satisfies DomainLabel<ItemLabels>;
