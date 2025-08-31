import { EventCommandLike2 } from '../../../frame';
import { ENEMY_APPEAR } from '../../../../rpg';
export interface Command_EnemyAppear extends EventCommandLike2<typeof ENEMY_APPEAR> {
    parameters: ParamArray_EnemyAppear;
}
export type ParamArray_EnemyAppear = [enemyIndex: number];
