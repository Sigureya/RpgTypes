import { DropItem, Trait } from '../../../../../../rmmz/rpg';
export interface Rmmz_EnemyBase {
    isEnemy(): boolean;
    enemyId(): number;
    traitObjects(): Trait[];
    paramBase(paramId: number): number;
    exp(): number;
    gold(): number;
    dropItems(): DropItem[];
}
