import { SHOP_PROCESSING, SHOP_PROCESSING_BODY } from "@RpgTypes/rmmz/rpg";
import { CUSTOM_PRICE, NORMAL_PRICE } from "./constants";
import type {
  Command_ShopProcessing2,
  Command_ShopProcessingBody2,
  GoodsType,
  ParamObject_ShopGoods,
  ParamObject_ShopProcessing,
} from "./types";

const GOODS_TYPES = {
  item: 0,
  weapon: 1,
  armors: 2,
} as const satisfies GoodsType;

const isCustomPrice = (goods: ParamObject_ShopGoods): boolean =>
  goods.customPrice !== undefined && goods.customPrice !== 0;

export const makeCommandShopProcessing = (
  { goods, buyOnly = false }: ParamObject_ShopProcessing,
  indent: number = 0
): (Command_ShopProcessing2 | Command_ShopProcessingBody2)[] => {
  return goods.map(
    (item, index): Command_ShopProcessing2 | Command_ShopProcessingBody2 => {
      const usingCustomPrice = isCustomPrice(item)
        ? CUSTOM_PRICE
        : NORMAL_PRICE;
      return index === 0
        ? ({
            code: SHOP_PROCESSING,
            indent: indent,
            parameters: [
              GOODS_TYPES[item.itemType] ?? GOODS_TYPES.item,
              item.id,
              usingCustomPrice,
              item.customPrice ?? 0,
              buyOnly,
            ],
          } satisfies Command_ShopProcessing2)
        : ({
            code: SHOP_PROCESSING_BODY,
            indent: indent,
            parameters: [
              GOODS_TYPES[item.itemType] ?? GOODS_TYPES.item,
              item.id,
              usingCustomPrice,
              item.customPrice ?? 0,
            ],
          } satisfies Command_ShopProcessingBody2);
    }
  );
};
