import type { ItemCategories, ItemCategoriesArray } from "./types";

export const makeItemCategories = (
  param: Partial<ItemCategories> = {}
): ItemCategoriesArray => {
  return [
    param.item ?? true,
    param.weapon ?? true,
    param.armor ?? true,
    param.keyItem ?? true,
  ];
};
export const makeItemCategoriesFromArray = (
  param: ItemCategoriesArray
): ItemCategories => {
  return {
    item: param[0],
    weapon: param[1],
    armor: param[2],
    keyItem: param[3],
  };
};
