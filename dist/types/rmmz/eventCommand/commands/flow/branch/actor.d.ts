import { ParamObject_BranchActorByClass, ParamObject_BranchActorByName, ParamObject_BranchActorBySkill, ParamObject_BranchActorByWeapon, ParamObject_BranchActorByArmor, ParamObject_BranchActorByState } from './types/actor';
import { Command_BranchByActor } from './types/command';
export declare const makeCommandBranchByActorInParty: (actorId: number, indent?: number) => Command_BranchByActor;
export declare const makeCommandBranchByActorName: ({ actorId, name }: ParamObject_BranchActorByName, indent?: number) => Command_BranchByActor;
export declare const makeCommandBranchByActorClass: ({ actorId, classId }: ParamObject_BranchActorByClass, indent?: number) => Command_BranchByActor;
export declare const makeCommandBranchByActorSkill: ({ actorId, skillId }: ParamObject_BranchActorBySkill, indent?: number) => Command_BranchByActor;
export declare const makeCommandBranchByActorWeapon: ({ actorId, weaponId }: ParamObject_BranchActorByWeapon, indent?: number) => Command_BranchByActor;
export declare const makeCommandBranchByActorArmor: ({ actorId, armorId }: ParamObject_BranchActorByArmor, indent?: number) => Command_BranchByActor;
export declare const makeCommandBranchByActorState: ({ actorId, stateId }: ParamObject_BranchActorByState, indent?: number) => Command_BranchByActor;
