import type {
  EventCommandLike,
  SHOP_PROCESSING,
  SHOP_PROCESSING_BODY,
} from "@RpgTypes/libs/eventCommand";
import type { ValueOf } from "src/libs/templates/valueOf";
import type { CUSTOM_PRICE, NORMAL_PRICE } from "./constants";

export type GoodsType = {
  item: 0;
  weapon: 1;
  armors: 2;
};

type GOODS_TYPES = ValueOf<GoodsType>;

export interface Command_ShopProcessing extends EventCommandLike<
  typeof SHOP_PROCESSING
> {
  parameters: ParamArray_ShopProcessing;
}

export interface Command_ShopProcessingBody extends EventCommandLike<
  typeof SHOP_PROCESSING_BODY
> {
  parameters: ParamArray_ShopGoods;
}

export type ParamArray_ShopGoods = [
  itemType: GOODS_TYPES,
  id: number,
  isCustomPrice: typeof CUSTOM_PRICE | typeof NORMAL_PRICE,
  customPrice: number,
];

export type ParamArray_ShopProcessing = [
  itemType: GOODS_TYPES,
  id: number,
  isCustomPrice: typeof CUSTOM_PRICE | typeof NORMAL_PRICE,
  customPrice: number,
  buyOnly: boolean,
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
