import type {
  BranchByActorClass,
  BranchByActorName,
  BranchByActorSkill,
  BranchByActorWeapon,
  BranchByActorArmor,
  BranchParam_Actor,
} from "@RpgTypes/rmmz";
import type { Rmmz_Members } from "@RpgTypes/rmmzRuntime";
import type {
  Rmmz_BranchSourceActor,
  Rmmz_BranchSourceProvider,
} from "./types";

export const evaluateActorBranch = (
  parameters: BranchParam_Actor,
  party: Rmmz_Members<Rmmz_BranchSourceActor>,
  provider: Rmmz_BranchSourceProvider,
): boolean => {
  const actor = provider.gameActor(parameters[1]);
  if (!actor) {
    return false;
  }
  switch (parameters[2]) {
    case 0:
      return party.members().includes(actor);
    case 1:
      return branchByActorName(parameters, actor);
    case 2:
      return branchByActorClass(parameters, actor, provider);
    case 3:
      return branchByActorSkill(parameters, actor);
    case 4:
      return branchByActorWeapon(parameters, actor, provider);
    case 5:
      return branchByActorArmor(parameters, actor, provider);
    case 6:
      return actor.isStateAffected(parameters[3]);
    default:
      return false;
  }
};

const branchByActorName = (
  params: BranchByActorName,
  actor: Rmmz_BranchSourceActor,
): boolean => {
  // C#移植メモ ここの実装は大変問題があるため、C#向けの実装は全然違うものを用意する
  const name: string = params[3];
  return actor.name() === name;
};

const branchByActorClass = (
  params: BranchByActorClass,
  actor: Rmmz_BranchSourceActor,
  provider: Rmmz_BranchSourceProvider,
): boolean => {
  // この実装は大変非効率だが、ツクールMZ本体と同じにする必要がある
  const classObj = provider.classData(params[3]);
  return actor.isClass(classObj);
};

const branchByActorSkill = (
  params: BranchByActorSkill,
  actor: Rmmz_BranchSourceActor,
): boolean => {
  return actor.hasSkill(params[3]);
};

const branchByActorWeapon = (
  params: BranchByActorWeapon,
  actor: Rmmz_BranchSourceActor,
  provider: Rmmz_BranchSourceProvider,
): boolean => {
  const weaponObj = provider.weaponData(params[3]);
  return actor.hasWeapon(weaponObj);
};

const branchByActorArmor = (
  params: BranchByActorArmor,
  actor: Rmmz_BranchSourceActor,
  provider: Rmmz_BranchSourceProvider,
): boolean => {
  return actor.hasArmor(provider.armorData(params[3]));
};
