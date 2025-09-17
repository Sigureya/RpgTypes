import { Command_ChangeEnemyTP, Command_ChangeEnemyMP, ParamObject_ChangeEnemyValue } from './types';
export declare const makeCommandGainEnemyMP: (param: ParamObject_ChangeEnemyValue, indent?: number) => Command_ChangeEnemyMP;
export declare const makeCommandLoseEnemyMP: (param: ParamObject_ChangeEnemyValue, indent?: number) => Command_ChangeEnemyMP;
export declare const makeCommandGainEnemyTP: (param: ParamObject_ChangeEnemyValue, indent?: number) => Command_ChangeEnemyTP;
export declare const makeCommandLoseEnemyTP: (param: ParamObject_ChangeEnemyValue, indent?: number) => Command_ChangeEnemyTP;
