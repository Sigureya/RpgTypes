import { Data_AnyGoodsUnion } from '../../../../rmmz/rpg';
import { Rmmz_Actor } from './battler';
import { Rmmz_Unit } from './unit';
import { Rmmz_UnitPlayer } from './unit/player';
export interface Rmmz_Party extends Rmmz_Unit<Rmmz_Actor>, Rmmz_UnitPlayer {
    canInput(): boolean;
    gainItem(goods: Data_AnyGoodsUnion, amount: number): void;
    gainItem(goods: Data_AnyGoodsUnion, amount: number, includeEquip: boolean): void;
    inBattle(): boolean;
}
