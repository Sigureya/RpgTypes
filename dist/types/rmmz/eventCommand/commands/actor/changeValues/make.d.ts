import { Command_ChangeActorHP, Command_ChangeActorMP, Command_ChangeActorTP, ParamObject_ChangeActorHP, ParamObject_ChangeActorValue } from './types';
export declare const makeCommandGainActorHP: (params: ParamObject_ChangeActorHP, indent?: number) => Command_ChangeActorHP;
export declare const makeCommandLoseActorHP: (params: ParamObject_ChangeActorHP, indent?: number) => Command_ChangeActorHP;
export declare const makeCommandGainActorTP: (params: ParamObject_ChangeActorValue, indent?: number) => Command_ChangeActorTP;
export declare const makeCommandLoseActorTP: (params: ParamObject_ChangeActorValue, indent?: number) => Command_ChangeActorTP;
export declare const makeCommandGainActorMP: (params: ParamObject_ChangeActorValue, indent?: number) => Command_ChangeActorMP;
export declare const makeCommandLoseActorMP: (params: ParamObject_ChangeActorValue, indent?: number) => Command_ChangeActorMP;
