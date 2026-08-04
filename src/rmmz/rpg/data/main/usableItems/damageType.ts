import type { Data_UsableItem } from "./core/usableItem";

export const DAMAGE_TYPE_HP_DAMAGE = 1 as const;
export const DAMAGE_TYPE_MP_DAMAGE = 2 as const;
export const DAMAGE_TYPE_HP_RECOVER = 3 as const;
export const DAMAGE_TYPE_MP_RECOVER = 4 as const;
export const DAMAGE_TYPE_HP_DRAIN = 5 as const;
export const DAMAGE_TYPE_MP_DRAIN = 6 as const;

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

export const isDamage = (item: Data_UsableItem): boolean => {
  return (
    item.damage.type === DAMAGE_TYPE_HP_DAMAGE ||
    item.damage.type === DAMAGE_TYPE_MP_DAMAGE
  );
};

export const isRecover = (item: Data_UsableItem): boolean => {
  return (
    item.damage.type === DAMAGE_TYPE_HP_RECOVER ||
    item.damage.type === DAMAGE_TYPE_MP_RECOVER
  );
};

export const isDrain = (item: Data_UsableItem): boolean => {
  return (
    item.damage.type === DAMAGE_TYPE_HP_DRAIN ||
    item.damage.type === DAMAGE_TYPE_MP_DRAIN
  );
};

export const isHpRecoverItem = (item: Data_UsableItem): boolean => {
  return item.damage.type === DAMAGE_TYPE_HP_RECOVER;
};

export const isMpRecoverItem = (item: Data_UsableItem): boolean => {
  return item.damage.type === DAMAGE_TYPE_MP_RECOVER;
};

export const isHpRecovery = (item: Data_UsableItem): boolean => {
  return item.damage.type === DAMAGE_TYPE_HP_RECOVER;
};

export const isMpRecovery = (item: Data_UsableItem): boolean => {
  return item.damage.type === DAMAGE_TYPE_MP_RECOVER;
};
