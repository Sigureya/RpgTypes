import { EventCommandLike, CHANGE_ENEMY_TP } from '../../../../../../libs/eventCommand';
import { ParamArray_ChangeEnemyValueBase, ParamObject_ChangeEnemyValueBase, ParamObject_ChangeEnemyValueVV } from './value';
export interface Command_ChangeEnemyTP extends EventCommandLike<typeof CHANGE_ENEMY_TP> {
    parameters: ParamArray_ChangeEnemyTP;
}
export type ParamObject_ChangeEnemyTp = ParamObject_ChangeEnemyValueBase;
export type ParamArray_ChangeEnemyTP = ParamArray_ChangeEnemyValueBase;
export type ParamObject_ChangeEnemyTp2 = ParamObject_ChangeEnemyValueVV;
