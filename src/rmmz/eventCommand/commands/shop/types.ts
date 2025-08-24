import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { SHOP_PROCESSING, SHOP_PROCESSING_BODY } from "@RpgTypes/rmmz/rpg";
import type { ValueOf } from "src/libs/templates/valueOf";

export type GoodsType = {
  item: 0;
  weapon: 1;
  armors: 2;
};

type GOODS_TYPES = ValueOf<GoodsType>;

export interface Command_ShopProcessing
  extends EventCommandLike2<typeof SHOP_PROCESSING> {
  parameters: ShopProcessing;
}

export interface Command_ShopProcessingBody
  extends EventCommandLike2<typeof SHOP_PROCESSING_BODY> {
  parameters: ShopGoods;
}

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

export interface ParamObject_ShopProcessing {
  buyOnly: boolean;
  goods: ParamObject_ShopGoods[];
}

export interface ParamObject_ShopGoods {
  itemType: keyof GoodsType;
  id: number;
  customPrice?: number;
}
