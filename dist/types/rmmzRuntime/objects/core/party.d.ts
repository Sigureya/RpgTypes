import { Data_AnyGoodsUnion } from '../../../rmmz/rpg';
import { Rmmz_Actor } from './battler';
import { Rmmz_Unit } from './unit/unit';
export interface Rmmz_Party extends Rmmz_Unit<Rmmz_Actor> {
    canInput(): boolean;
    gainItem(goods: Data_AnyGoodsUnion, amount: number): void;
    gainItem(goods: Data_AnyGoodsUnion, amount: number, includeEquip: boolean): void;
}
