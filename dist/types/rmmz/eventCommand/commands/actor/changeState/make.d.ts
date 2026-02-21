import { Command_ChangeActorState, ParamObject_ChangeActorState, ParamObject_ChangeActorStateEach, ParamObject_ChangeActorStateVariable } from './types';
export declare const makeCommandAddStateTargetActor: (param: ParamObject_ChangeActorState, indent?: number) => Command_ChangeActorState;
export declare const makeCommandRemoveActorTargetState: (param: ParamObject_ChangeActorState, indent?: number) => Command_ChangeActorState;
export declare const makeCommandAddStateEachActor: (param: ParamObject_ChangeActorStateEach, indent?: number) => Command_ChangeActorState;
export declare const makeCommandRemoveStateEachActors: (param: ParamObject_ChangeActorStateEach, indent?: number) => Command_ChangeActorState;
export declare const makeCommandAddStateByVariable: (param: ParamObject_ChangeActorStateVariable, indent?: number) => Command_ChangeActorState;
export declare const makeCommandRemoveStateByVariable: (param: ParamObject_ChangeActorStateVariable, indent?: number) => Command_ChangeActorState;
