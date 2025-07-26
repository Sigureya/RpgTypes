import type { DomainLabel } from "src/libs/templates";
import type { WeaponLabels } from "./weaponLabels";

export const LABELS_DATA_WEAPON = {
  title: "武器",
  options: {
    weaponTypeId: "武器タイプID",
  },
} as const satisfies DomainLabel<WeaponLabels>;
