import type { Data_UsableItem } from "./core/usableItem";

export const isUsableItemInBattle = (item: Data_UsableItem): boolean => {
  return item.occasion === 0 || item.occasion === 1;
};

export const isUsableItemOutBattle = (item: Data_UsableItem): boolean => {
  return item.occasion === 0 || item.occasion === 2;
};
