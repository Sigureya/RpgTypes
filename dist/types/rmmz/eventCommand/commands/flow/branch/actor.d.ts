import { ParamObject_BranchActorByClass, ParamObject_BranchActorByName, ParamObject_BranchActorBySkill, ParamObject_BranchActorByWeapon, ParamObject_BranchActorByArmor, ParamObject_BranchActorByState } from './types/actor';
import { Command_BranchByActor } from './types/command';
export declare const makeCommand_BranchByActorInParty: (actorId: number, indent?: number) => Command_BranchByActor;
export declare const makeCommand_BranchByActorName: ({ actorId, name }: ParamObject_BranchActorByName, indent?: number) => Command_BranchByActor;
export declare const makeCommand_BranchByActorClass: ({ actorId, classId }: ParamObject_BranchActorByClass, indent?: number) => Command_BranchByActor;
export declare const makeCommand_BranchByActorSkill: ({ actorId, skillId }: ParamObject_BranchActorBySkill, indent?: number) => Command_BranchByActor;
export declare const makeCommand_BranchByActorWeapon: ({ actorId, weaponId }: ParamObject_BranchActorByWeapon, indent?: number) => Command_BranchByActor;
export declare const makeCommand_BranchByActorArmor: ({ actorId, armorId }: ParamObject_BranchActorByArmor, indent?: number) => Command_BranchByActor;
export declare const makeCommand_BranchByActorState: ({ actorId, stateId }: ParamObject_BranchActorByState, indent?: number) => Command_BranchByActor;
