import type { DomainLabel } from "@RpgTypes/templates";
import type { ItemLabels } from "./itemLabels";

export const DEFAULT_ITEM_LABELS = {
  title: "アイテム",
  options: {
    consumable: "消耗品",
  },
} as const satisfies DomainLabel<ItemLabels>;
