import { EventCommandLike, ENEMY_APPEAR } from '../../../../../libs/eventCommand';
export interface Command_EnemyAppear extends EventCommandLike<typeof ENEMY_APPEAR> {
    parameters: ParamArray_EnemyAppear;
}
export type ParamArray_EnemyAppear = [enemyIndex: number];
