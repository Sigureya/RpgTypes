import { ValueOf } from "@utils/types";

const GOODS_TYPE = {
  item: 0,
  weapon: 1,
  armors: 2,
} as const;

type GOODS_TYPES = ValueOf<typeof GOODS_TYPE>;

export type ShopGoods = [
  itemType: GOODS_TYPES,
  id: number,
  isCustomPrice: 0 | 1,
  customPrice: number
];
