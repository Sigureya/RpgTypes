import type { DomainLabel } from "@RpgTypes/schema";
import type { ArmorLabels } from "./armorLabels";
export const MockArmorLabels = {
  domainName: "防具",
  options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID",
  },
} as const satisfies DomainLabel<ArmorLabels>;
