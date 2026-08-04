import type { Data_UsableItem } from "./core/usableItem";
export const HITTYPE_CERTAIN = 0 as const;
export const HITTYPE_PHYSICAL = 1 as const;
export const HITTYPE_MAGICAL = 2 as const;

export const isCertainHit = (item: Data_UsableItem): boolean => {
  return item.hitType === HITTYPE_CERTAIN;
};

export const isPhysicalHit = (item: Data_UsableItem): boolean => {
  return item.hitType === HITTYPE_PHYSICAL;
};

export const isMagicalHit = (item: Data_UsableItem): boolean => {
  return item.hitType === HITTYPE_MAGICAL;
};
