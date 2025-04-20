import type { DomainLabel } from "@RpgTypes/schema";
import type { ArmorLabels } from "./armorLabels";

export const DEFAULT_ARMOR_LABELS = {
  domainName: "防具",
  options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID",
  },
} as const satisfies DomainLabel<ArmorLabels>;
