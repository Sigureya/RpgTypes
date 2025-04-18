import type { WeaponLabels, DomainLabel } from "@RpgTypes/schema";

export const MockWeaponLabels = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID",
  },
} as const satisfies DomainLabel<WeaponLabels>;
