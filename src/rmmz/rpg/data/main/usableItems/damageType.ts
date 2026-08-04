import type { Data_UsableItem } from "./core/usableItem";

export const DAMAGE_TYPE_HP_DAMAGE = 1 as const;
export const DAMAGE_TYPE_MP_DAMAGE = 2 as const;
export const DAMAGE_TYPE_HP_RECOVER = 3 as const;
export const DAMAGE_TYPE_MP_RECOVER = 4 as const;
export const DAMAGE_TYPE_HP_DRAIN = 5 as const;
export const DAMAGE_TYPE_MP_DRAIN = 6 as const;

export const isHpRecoverItem = (item: Data_UsableItem): boolean => {
  return item.damage.type === DAMAGE_TYPE_HP_RECOVER;
};

export const isMpRecoverItem = (item: Data_UsableItem): boolean => {
  return item.damage.type === DAMAGE_TYPE_MP_RECOVER;
};

export const isHpDamage = (item: Data_UsableItem): boolean => {
  return (
    item.damage.type === DAMAGE_TYPE_HP_DAMAGE ||
    item.damage.type === DAMAGE_TYPE_HP_DRAIN
  );
};

export const isMpDamage = (item: Data_UsableItem): boolean => {
  return (
    item.damage.type === DAMAGE_TYPE_MP_DAMAGE ||
    item.damage.type === DAMAGE_TYPE_MP_DRAIN
  );
};

export const isHpEffect = (item: Data_UsableItem): boolean => {
  return (
    item.damage.type === DAMAGE_TYPE_HP_DAMAGE ||
    item.damage.type === DAMAGE_TYPE_HP_DRAIN ||
    item.damage.type === DAMAGE_TYPE_HP_RECOVER
  );
};

export const isMpEffect = (item: Data_UsableItem): boolean => {
  return (
    item.damage.type === DAMAGE_TYPE_MP_DAMAGE ||
    item.damage.type === DAMAGE_TYPE_MP_DRAIN ||
    item.damage.type === DAMAGE_TYPE_MP_RECOVER
  );
};
