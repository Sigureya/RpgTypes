import type { ValueOf } from "../../../../../";
declare const GOODS_TYPE: {
    readonly item: 0;
    readonly weapon: 1;
    readonly armors: 2;
};
type GOODS_TYPES = ValueOf<typeof GOODS_TYPE>;
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
export {};
