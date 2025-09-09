import { Data_AnyGoodsUnion } from '../../../rmmz/rpg';
import { Rmmz_Unit } from './unit/unit';
export interface Rmmz_Party extends Rmmz_Unit<{}> {
    canInput(): boolean;
    gainItem(goods: Data_AnyGoodsUnion, amount: number): void;
    gainItem(goods: Data_AnyGoodsUnion, amount: number, includeEquip: boolean): void;
}
