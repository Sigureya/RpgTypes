import { Rmmz_Enemy } from './battler/enemy';
import { Rmmz_Unit } from './unit/unit';
export interface Rmmz_Troop extends Rmmz_Unit<Rmmz_Enemy> {
    members(): Rmmz_Enemy[];
    setup(troopId: number): void;
}
