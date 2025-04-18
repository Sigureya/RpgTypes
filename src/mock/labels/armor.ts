import type { DomainLabel, ArmorLabels } from "@RpgTypes/schema";

export const MockArmorLabels = {
  domainName: "防具",
  options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID",
  },
} as const satisfies DomainLabel<ArmorLabels>;
