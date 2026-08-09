import type {
  BranchByActorClass,
  BranchByActorName,
  BranchByActorSkill,
  BranchByActorWeapon,
  BranchByActorArmor,
  BranchParam_Actor,
  Provider_RpgData,
  Provider_RpgItems,
} from "@RpgTypes/rmmz";
import type { Rmmz_ActorsReadonly, Rmmz_Members } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_BranchSourceActor } from "./types";

export const evaluateBranchByActor = (
  parameters: BranchParam_Actor,
  party: Rmmz_Members<Rmmz_BranchSourceActor>,
  actors: Rmmz_ActorsReadonly<Rmmz_BranchSourceActor>,
  provider: Provider_RpgData,
): boolean => {
  const actor = actors.actor(parameters[1]);
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
  provider: Provider_RpgData,
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
  provider: Provider_RpgItems,
): boolean => {
  const weaponObj = provider.dataWeapon(params[3]);
  return actor.hasWeapon(weaponObj);
};

const branchByActorArmor = (
  params: BranchByActorArmor,
  actor: Rmmz_BranchSourceActor,
  provider: Provider_RpgItems,
): boolean => {
  return actor.hasArmor(provider.dataArmor(params[3]));
};
