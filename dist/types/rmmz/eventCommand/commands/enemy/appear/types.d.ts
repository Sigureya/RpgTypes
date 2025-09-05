import { EventCommandLike } from '../../../frame';
import { ENEMY_APPEAR } from '../../../../rpg';
export interface Command_EnemyAppear extends EventCommandLike<typeof ENEMY_APPEAR> {
    parameters: ParamArray_EnemyAppear;
}
export type ParamArray_EnemyAppear = [enemyIndex: number];
