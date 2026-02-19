import { Command_ChangeClaass, ParamObject_ChangeClass, Command_ChangeEquip, ParamObject_ChangeEquip, Command_ChangeActorImages, ParamObject_ChangeActorImages } from './types';
export declare const makeCommandChangeClass: (param: ParamObject_ChangeClass, indent?: number) => Command_ChangeClaass;
export declare const makeCommandChangeEquip: (param: ParamObject_ChangeEquip, indent?: number) => Command_ChangeEquip;
export declare const makeCommandChangeActorImages: ({ actorId, faceIndex, faceName, characterIndex, characterName, battlerName, }?: Partial<ParamObject_ChangeActorImages>, indent?: number) => Command_ChangeActorImages;
