import type { BranchCodeTable } from "./branch";

export interface ParamObject_BranchActorByName {
  actorId: number;
  name: string;
}

export interface ParamObject_BranchActorByClass {
  actorId: number;
  classId: number;
}

export interface ParamObject_BranchActorBySkill {
  actorId: number;
  skillId: number;
}

export interface ParamObject_BranchActorByWeapon {
  actorId: number;
  weaponId: number;
}
export interface ParamObject_BranchActorByArmor {
  actorId: number;
  armorId: number;
}

export interface ParamObject_BranchActorByState {
  actorId: number;
  stateId: number;
}

export type BranchParam_Actor =
  | BranchByActorInParty
  | BranchByActorName
  | BranchByActorClass
  | BranchByActorSkill
  | BranchByActorWeapon
  | BranchByActorArmor
  | BranchByActorState;
export type BranchByActorInParty = [
  branchCode: BranchCodeTable["ACTOR"],
  actorId: number,
  operandParty: 0,
];

export type BranchByActorName = [
  branchCode: BranchCodeTable["ACTOR"],
  actorId: number,
  operandName: 1,
  name: string,
];

export type BranchByActorClass = [
  branchCode: BranchCodeTable["ACTOR"],
  actorId: number,
  operandClass: 2,
  classId: number,
];

export type BranchByActorSkill = [
  branchCode: BranchCodeTable["ACTOR"],
  actorId: number,
  operandSkill: 3,
  skillId: number,
];

export type BranchByActorWeapon = [
  branchCode: BranchCodeTable["ACTOR"],
  actorId: number,
  operandWeapon: 4,
  weaponId: number,
];

export type BranchByActorArmor = [
  branchCode: BranchCodeTable["ACTOR"],
  actorId: number,
  operandArmor: 5,
  armorId: number,
];

export type BranchByActorState = [
  branchCode: BranchCodeTable["ACTOR"],
  actorId: number,
  operandState: 6,
  stateId: number,
];
