import { EventCommandLike2 } from '../../../frame';
import { ENEMY_TRANSFORM } from '../../../../rpg';
export interface Command_EnemyTransform extends EventCommandLike2<typeof ENEMY_TRANSFORM> {
    parameters: ParamArray_EnemyTransfrom;
}
export type ParamArray_EnemyTransfrom = [enemyId: number, newEnemyId: number];
export interface ParamObject_EnemyTransform {
    enemyId: number;
    newEnemyId: number;
}
