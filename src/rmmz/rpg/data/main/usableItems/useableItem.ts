import {
  DAMAGE_TYPE_HP_RECOVER,
  DAMAGE_TYPE_MP_RECOVER,
  DAMAGE_TYPE_HP_DAMAGE,
  DAMAGE_TYPE_HP_DRAIN,
  DAMAGE_TYPE_MP_DAMAGE,
  DAMAGE_TYPE_MP_DRAIN,
} from "./constants/damageType";
import type { Data_UsableItem } from "./core/usableItem";

export const isUsableItemInBattle = (item: Data_UsableItem): boolean => {
  return item.occasion === 0 || item.occasion === 1;
};

export const isUsableItemOutBattle = (item: Data_UsableItem): boolean => {
  return item.occasion === 0 || item.occasion === 2;
};

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
