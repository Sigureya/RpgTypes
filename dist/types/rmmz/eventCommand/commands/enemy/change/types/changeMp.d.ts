import { EventCommandLike, CHANGE_ENEMY_MP } from '../../../../../../libs/eventCommand';
import { ParamArray_ChangeEnemyValueBase, ParamObject_ChangeEnemyValueBase, ParamObject_ChangeEnemyValueVV } from './value';
export interface Command_ChangeEnemyMP extends EventCommandLike<typeof CHANGE_ENEMY_MP> {
    parameters: ParamArray_ChangeEnemyMP;
}
export interface ParamObject_ChangeEnemyMpDirect {
}
export type ParamObject_ChangeEnemyMp = ParamObject_ChangeEnemyValueBase;
export type ParamObject_ChangeEnemyMp2 = ParamObject_ChangeEnemyValueVV;
export type ParamArray_ChangeEnemyMP = ParamArray_ChangeEnemyValueBase;
export type ParamArray_GainEnemyMP = ParamArray_ChangeEnemyMP;
