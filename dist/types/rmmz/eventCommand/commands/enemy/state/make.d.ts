import { Command_ChangeEnemyState, ParamObject_ChangeEnemyState } from './types';
export declare const makeCommandAddEnemyState: (param: ParamObject_ChangeEnemyState, indent?: number) => Command_ChangeEnemyState;
export declare const makeCommandRemoveEnemyState: (param: ParamObject_ChangeEnemyState, indent?: number) => Command_ChangeEnemyState;
export declare const makeCommandAddEachEnemyState: (param: {
    stateId: number;
}, indent?: number) => Command_ChangeEnemyState;
export declare const makeCommandRemoveEachEnemyState: (param: {
    stateId: number;
}, indent?: number) => Command_ChangeEnemyState;
