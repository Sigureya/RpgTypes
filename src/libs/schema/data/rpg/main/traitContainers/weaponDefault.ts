import type { DomainLabel } from "@RpgTypes/templates";
import type { WeaponLabels } from "./weaponLabels";

export const DEFAULT_WEAPON_LABELS = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID",
  },
} as const satisfies DomainLabel<WeaponLabels>;
