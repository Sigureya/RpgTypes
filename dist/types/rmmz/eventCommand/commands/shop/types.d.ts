import { EventCommandLike2 } from '../../frame';
import { SHOP_PROCESSING, SHOP_PROCESSING_BODY } from '../../../rpg';
import { ValueOf } from 'src/libs/templates/valueOf';
import { CUSTOM_PRICE, NORMAL_PRICE } from './constants';
export type GoodsType = {
    item: 0;
    weapon: 1;
    armors: 2;
};
type GOODS_TYPES = ValueOf<GoodsType>;
export interface Command_ShopProcessing extends EventCommandLike2<typeof SHOP_PROCESSING> {
    parameters: ShopProcessing;
}
export interface Command_ShopProcessingBody extends EventCommandLike2<typeof SHOP_PROCESSING_BODY> {
    parameters: ShopGoods;
}
export type ShopGoods = [
    itemType: GOODS_TYPES,
    id: number,
    isCustomPrice: typeof CUSTOM_PRICE | typeof NORMAL_PRICE,
    customPrice: number
];
export type ShopProcessing = [
    itemType: GOODS_TYPES,
    id: number,
    isCustomPrice: typeof CUSTOM_PRICE | typeof NORMAL_PRICE,
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
export {};
