import { EventCommandLike2 } from '../../../frame';
import { ENEMY_RECOVER_ALL } from '../../../../rpg';
export interface Command_EnemyRecoverAll extends EventCommandLike2<typeof ENEMY_RECOVER_ALL> {
    parameters: ParamArray_EnemyRecoverAll;
}
export type ParamArray_EnemyRecoverAll = [];
