import type {
  ParamObject_BranchActorByClass,
  ParamObject_BranchActorByName,
  ParamObject_BranchActorBySkill,
  ParamObject_BranchActorByWeapon,
  ParamObject_BranchActorByArmor,
  ParamObject_BranchActorByState,
} from "./types/actor";
import type { Command_BranchByActor } from "./types/command";

//　内部のマジックナンバーを隠蔽するために似た関数を複数作っている

export const makeCommandBranchByActorInParty = (
  actorId: number,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 0],
  };
};

export const makeCommandBranchByActorName = (
  { actorId, name }: ParamObject_BranchActorByName,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 1, name],
  };
};

export const makeCommandBranchByActorClass = (
  { actorId, classId }: ParamObject_BranchActorByClass,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 2, classId],
  };
};

export const makeCommandBranchByActorSkill = (
  { actorId, skillId }: ParamObject_BranchActorBySkill,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 3, skillId],
  };
};

export const makeCommandBranchByActorWeapon = (
  { actorId, weaponId }: ParamObject_BranchActorByWeapon,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 4, weaponId],
  };
};

export const makeCommandBranchByActorArmor = (
  { actorId, armorId }: ParamObject_BranchActorByArmor,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 5, armorId],
  };
};

export const makeCommandBranchByActorState = (
  { actorId, stateId }: ParamObject_BranchActorByState,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 6, stateId],
  };
};
