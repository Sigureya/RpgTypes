import { EventCommandLike } from '../../../frame';
import { ENEMY_RECOVER_ALL } from '../../../../rpg';
export interface Command_EnemyRecoverAll extends EventCommandLike<typeof ENEMY_RECOVER_ALL> {
    parameters: ParamArray_EnemyRecoverAll;
}
export interface Command_EnemyRecoverAllEach extends EventCommandLike<typeof ENEMY_RECOVER_ALL> {
    parameters: [0];
}
export type ParamArray_EnemyRecoverAll = [enemyIndex: number];
