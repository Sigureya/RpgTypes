import { Command_ChangeActorState, ParamObject_ChangeActorState, ParamObject_ChangeActorStateEach, ParamObject_ChangeActorStateVariable } from './types';
export declare const makeCommandAddActorStateTarget: (param: ParamObject_ChangeActorState, indent?: number) => Command_ChangeActorState;
export declare const makeCommandRemoveActorStateTarget: (param: ParamObject_ChangeActorState, indent?: number) => Command_ChangeActorState;
export declare const makeCommandAddActorStateEach: (param: ParamObject_ChangeActorStateEach, indent?: number) => Command_ChangeActorState;
export declare const makeCommandRemoveActorStateEach: (param: ParamObject_ChangeActorStateEach, indent?: number) => Command_ChangeActorState;
export declare const makeCommandAddActorStateVariable: (param: ParamObject_ChangeActorStateVariable, indent?: number) => Command_ChangeActorState;
export declare const makeCommandRemoveActorStateVariable: (param: ParamObject_ChangeActorStateVariable, indent?: number) => Command_ChangeActorState;
