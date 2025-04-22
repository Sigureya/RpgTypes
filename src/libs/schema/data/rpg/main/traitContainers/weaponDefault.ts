import type { DomainLabel } from "@RpgTypes/templates";
import type { WeaponLabels } from "./weaponLabels";

export const LABELS_DATA_WEAPON = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID",
  },
} as const satisfies DomainLabel<WeaponLabels>;
