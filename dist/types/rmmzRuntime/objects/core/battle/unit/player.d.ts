import { Data_AnyGoodsUnion } from '../../../../../rmmz/rpg';
export interface Rmmz_UnitPlayer {
    steps(): number;
    gold(): number;
    gainGold(amount: number): void;
    loseGold(amount: number): void;
    hasItem(item: Data_AnyGoodsUnion, includeEquip?: boolean): boolean;
    numItems(item: Data_AnyGoodsUnion, includeEquip?: boolean): number;
    gainItem(item: Data_AnyGoodsUnion, amount: number, includeEquip?: boolean): void;
    loseItem(item: Data_AnyGoodsUnion, amount: number, includeEquip?: boolean): void;
}
