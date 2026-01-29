import { Data_AnyGoodsUnion } from '../../../../../rmmz/rpg';
import { Rmmz_BattlerBase } from './base';
export interface Rmmz_Enemy extends Rmmz_BattlerBase {
    makeDropItems(): Data_AnyGoodsUnion[];
}
