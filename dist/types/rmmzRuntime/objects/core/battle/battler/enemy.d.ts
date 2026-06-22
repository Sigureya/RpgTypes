import { Data_AnyGoodsUnion, Data_Enemy } from '../../../../../rmmz/rpg';
import { Rmmz_Battler } from './battler';
import { Rmmz_EnemyBase } from './enemyBase/enemy';
export interface Rmmz_Enemy extends Rmmz_Battler, Rmmz_EnemyBase {
    makeDropItems(): Data_AnyGoodsUnion[];
    name(): string;
    battlerHue(): number;
    battlerName(): string;
    originalName(): string;
    enemy(): Data_Enemy;
}
