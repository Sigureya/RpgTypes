import type {
  ParamObject_BranchActorByClass,
  ParamObject_BranchActorByName,
  ParamObject_BranchActorBySkill,
  ParamObject_BranchActorByWeapon,
  ParamObject_BranchActorByArmor,
  ParamObject_BranchActorByState,
} from "./types/actor";
import type { Command_BranchByActor } from "./types/command";

export const makeCommand_BranchByActorInParty = (
  actorId: number,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 0, 0],
  };
};

export const makeCommand_BranchByActorName = (
  { actorId, name }: ParamObject_BranchActorByName,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 1, name],
  };
};

export const makeCommand_BranchByActorClass = (
  { actorId, classId }: ParamObject_BranchActorByClass,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 2, classId],
  };
};

export const makeCommand_BranchByActorSkill = (
  { actorId, skillId }: ParamObject_BranchActorBySkill,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 3, skillId],
  };
};

export const makeCommand_BranchByActorWeapon = (
  { actorId, weaponId }: ParamObject_BranchActorByWeapon,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 4, weaponId],
  };
};

export const makeCommand_BranchByActorArmor = (
  { actorId, armorId }: ParamObject_BranchActorByArmor,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 5, armorId],
  };
};

export const makeCommand_BranchByActorState = (
  { actorId, stateId }: ParamObject_BranchActorByState,
  indent: number = 0,
): Command_BranchByActor => {
  return {
    code: 111,
    indent: indent,
    parameters: [4, actorId, 6, stateId],
  };
};
