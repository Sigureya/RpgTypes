import type { ValueOf } from "src/templates/valueOf";

export type GoodsType = {
  item: 0;
  weapon: 1;
  armors: 2;
};

type GOODS_TYPES = ValueOf<GoodsType>;

export type ShopGoods = [
  itemType: GOODS_TYPES,
  id: number,
  isCustomPrice: 0 | 1,
  customPrice: number
];
export type ShopProcessing = [
  itemType: GOODS_TYPES,
  id: number,
  isCustomPrice: 0 | 1,
  customPrice: number,
  buyOnly: boolean
];
