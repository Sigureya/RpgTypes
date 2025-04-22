import type { DomainLabel } from "@RpgTypes/templates";
import type { ArmorLabels } from "./armorLabels";

export const LABELS_DATA_ARMOR = {
  domainName: "防具",
  options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID",
  },
} as const satisfies DomainLabel<ArmorLabels>;
